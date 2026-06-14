import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Derives up to two initials from a full name.
 *
 * @param name - Full name string, or `null`/`undefined`.
 * @returns Uppercased initials (e.g. `"JD"`), or `"??"` if no name is provided.
 *
 * @example
 * getInitials("Juan Dela Cruz") // "JD"
 * getInitials(null)             // "??"
 */
export function getInitials(name?: string | null): string {
  if (!name) return "??";

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
