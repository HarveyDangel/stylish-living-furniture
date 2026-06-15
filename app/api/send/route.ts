// import { ipAddress } from "@vercel/functions";
import { Resend } from "resend";
import * as v from "valibot";
// import { ContactFormEmail } from "@/components/emails/contact-form";
// import { getEnv } from "@/lib/env";
// import { ratelimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations/contact-form";
import { ContactFormEmail } from "@/components/contact-form-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    // const ip = ipAddress(req) ?? "127.0.0.1";
    // const { success } = await ratelimit.limit(ip);

    // if (!success) {
    //   return Response.json(
    //     {
    //       error: "Too many requests. Try again later.",
    //     },
    //     {
    //       status: 429,
    //     },
    //   );
    // }

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

    // Send
    const { data, error } = await resend.emails.send({
      from: "Stylish Living Furniture <onboarding@resend.dev>",
      to: ["harveydangel@gmail.com"],
      replyTo: ["harveydangel@gmail.com"],
      subject: `New message from ${body.name}`,
      react: ContactFormEmail({ message: body.message }),
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
