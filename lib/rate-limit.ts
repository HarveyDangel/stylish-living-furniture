import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "5 m"),
  //   limiter: Ratelimit.slidingWindow(
  //     process.env.NODE_ENV === "development" ? 10 : 2, // 10 in dev, 2 in prod
  //     "5 m",
  //   ),
  analytics: true,
  prefix: "portfolio:kennethloto.dev",
});
