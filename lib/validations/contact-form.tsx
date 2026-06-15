import * as v from "valibot";

export const nameSchema = v.pipe(
  v.string(),
  v.trim(),
  v.minLength(2, "Name must be at least 2 characters"),
  v.maxLength(100, "Name must be at most 100 characters"),
  v.check((input) => {
    if (input.length < 2) return true;

    const nameRegex = /^[\p{L}\p{M}'-](?:[\p{L}\p{M}'\-\s]*[\p{L}\p{M}'-])?$/u;

    return nameRegex.test(input);
  }, "Name contains invalid characters"),
);

export const emailSchema = v.pipe(
  v.string(),
  v.email("Please enter a valid email address"),
  v.maxLength(254, "Email address is too long"),
);

export const messageSchema = v.pipe(
  v.string(),
  v.transform((val) => val.trim()),
  v.minLength(10, "Message must be at least 10 characters"),
  v.maxLength(2000, "Message must be at most 2000 characters"),
);

export const contactFormSchema = v.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export type ContactFormOutput = v.InferOutput<typeof contactFormSchema>;
