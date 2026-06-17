import { ipAddress } from "@vercel/functions";
import { Resend } from "resend";
import * as v from "valibot";
import { ratelimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations/contact-form";
import { serverEnv } from "@/env";
import { ContactFormEmail } from "@/components/emails/contact-form";

const resend = new Resend(serverEnv.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Content-Type check
    const contentType = req.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
      return Response.json(
        {
          error: "Invalid request.",
        },
        {
          status: 415,
        },
      );
    }

    // Honeypot check
    const body = await req.json();

    if (body.confirm_email) {
      return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Rate limit
    const ip = ipAddress(req);

    if (!ip && serverEnv.NODE_ENV === "production") {
      console.warn("Could not determine IP for rate limiting");
    }

    const { success } = await ratelimit.limit(ip ?? "127.0.0.1");

    if (!success) {
      return Response.json(
        {
          error: "Too many requests. Try again later.",
        },
        {
          status: 429,
        },
      );
    }

    // Validate
    const parsed = v.safeParse(contactFormSchema, body);

    if (!parsed.success) {
      return Response.json(
        {
          error: "Invalid form data.",
        },
        {
          status: 400,
        },
      );
    }

    const { name, email, message } = parsed.output;

    // Send
    const { data, error } = await resend.emails.send({
      from: serverEnv.CONTACT_DOMAIN,
      to: serverEnv.CONTACT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      console.log(error);
      return Response.json(
        {
          error: "Failed to send email. Try again later.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Something went wrong. Try again later.",
      },
      {
        status: 500,
      },
    );
  }
}
