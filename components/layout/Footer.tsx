import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="mt-auto bg-background-footer text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative mb-4 h-12 w-48">
              <Image
                src="/Images/Contact/footer-logo.webp"
                alt="Stylish Living Furniture"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="max-w-xs">
              Curated furniture for slow living and timeless spaces.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="body-md text-inverse-on-surface/60 no-underline transition-colors hover:text-inverse-on-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="body-md">
                Brgy. 95 Caibaan, Maharlika Hwy
                <br />
                Tacloban City, Philippines
              </li>
              <li className="body-md">(+63) 917 145 3352</li>
              <li className="body-md">hello@stylishlivingfurniture.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-inverse-on-surface/40">
            &copy; {new Date().getFullYear()} Stylish Living Furniture. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
