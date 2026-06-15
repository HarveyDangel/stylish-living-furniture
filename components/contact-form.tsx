"use client";

import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { MAX_MESSAGE_LENGTH } from "@/lib/contants";
import {
  contactFormSchema,
  emailSchema,
  messageSchema,
  nameSchema,
} from "@/lib/validations/contact-form";

export function ContactForm() {
  const honeypotRef = useRef<HTMLInputElement>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    validators: {
      onSubmit: contactFormSchema,
    },

    onSubmit: async ({ value }) => {
      const honeypot = honeypotRef.current?.value ?? "";

      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...value,
            confirm_email: honeypot,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          toast.error(data.error ?? "Something went wrong.");
          return;
        }

        toast.success("Message sent successfully!");
        form.reset();
      } catch {
        toast.error("Something went wrong.");
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <input
        ref={honeypotRef}
        type="text"
        name="confirm_email"
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute -left-[9999px] opacity-0"
      />

      <div className="flex flex-col gap-6">
        <form.Subscribe selector={(state) => state.isSubmitting}>
          {(isSubmitting) => (
            <FieldGroup className="gap-4">
              {/* Name */}
              <form.Field name="name" validators={{ onBlur: nameSchema }}>
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="John Doe"
                        autoComplete="off"
                        className="h-12 rounded-sm placeholder:text-base placeholder:text-muted-foreground placeholder:italic dark:bg-background"
                        aria-invalid={isInvalid}
                        disabled={isSubmitting}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              {/* Email */}
              <form.Field name="email" validators={{ onBlur: emailSchema }}>
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel
                        className="text-muted-foreground"
                        htmlFor={field.name}
                      >
                        Email
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="email"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="johndoe@example.com"
                        autoComplete="off"
                        className="h-12 rounded-sm placeholder:text-base placeholder:text-muted-foreground placeholder:italic dark:bg-background"
                        aria-invalid={isInvalid}
                        disabled={isSubmitting}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              {/* Message */}
              <form.Field name="message" validators={{ onBlur: messageSchema }}>
                {(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;

                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel
                        className="text-muted-foreground"
                        htmlFor={field.name}
                      >
                        Message
                      </FieldLabel>
                      <InputGroup className="rounded-sm">
                        <InputGroupTextarea
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Tell me about your project or opportunity..."
                          rows={6}
                          className="max-h-32 min-h-32 overflow-y-auto rounded-sm placeholder:text-base placeholder:text-muted-foreground placeholder:italic dark:bg-background"
                          aria-invalid={isInvalid}
                          disabled={isSubmitting}
                        />
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.state.value.length}/{MAX_MESSAGE_LENGTH}{" "}
                            characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              </form.Field>

              <p className="text-xs leading-relaxed">
                By sending this message, you agree to our{" "}
                <Link
                  href="/terms"
                  className="transition-colors duration-200 ease-out hover:text-foreground hover:underline hover:underline-offset-2"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="transition-colors duration-200 ease-out hover:text-foreground hover:underline hover:underline-offset-2"
                >
                  Privacy Policy
                </Link>{" "}
                regarding the processing of your data.
              </p>
            </FieldGroup>
          )}
        </form.Subscribe>

        {/* Submit + Reset */}
        <form.Subscribe
          selector={(state) => [
            state.isSubmitting,
            state.canSubmit,
            state.isTouched,
          ]}
        >
          {([isSubmitting, canSubmit, isTouched]) => (
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                variant="secondary"
                size="xl"
                className="w-fit rounded-sm px-8"
                disabled={isSubmitting || !canSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Spinner />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>

              {isTouched && !isSubmitting && (
                <Button
                  type="button"
                  variant="outline"
                  size="xl"
                  className="w-fit rounded-sm px-6"
                  onClick={() => form.reset()}
                >
                  Reset
                </Button>
              )}
            </div>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}
