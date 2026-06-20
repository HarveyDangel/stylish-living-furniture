import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

export const env = createEnv({
  server: {
    RESEND_API_KEY: v.pipe(v.string(), v.minLength(1)),
    UPSTASH_REDIS_REST_URL: v.pipe(v.string(), v.url()),
    UPSTASH_REDIS_REST_TOKEN: v.pipe(v.string(), v.minLength(1)),
    CONTACT_DOMAIN: v.pipe(v.string(), v.minLength(1)),
    CONTACT_EMAIL: v.pipe(v.string(), v.email()),
    NODE_ENV: v.optional(
      v.picklist(["development", "test", "production"]),
      "development",
    ),
  },
  /*
   * For Next.js >= 13.4.4, we can pass the entire process.env to the server runtime.
   * This is safe on the server because this file is never imported by client code.
   */
  experimental__runtimeEnv: process.env,
});
