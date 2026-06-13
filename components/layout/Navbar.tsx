import Link from "next/link";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  return (
    <header className="bg-surface">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
        <Link
          href="/"
          className="text-primary no-underline"
        >
          <h1 className="headline-sm">Stylish Living Furniture</h1>
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="label-md relative text-on-surface-variant no-underline after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
