import Image from "next/image";
import Link from "next/link";

const branches = [
  {
    name: "Tacloban Main",
    address: "Brgy. 95 Caibaan, Maharlika Highway, Tacloban City",
    contact: "(+63) 917 145 3352",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/tacloban.jpg",
  },
  {
    name: "Cebu",
    address: "Pelaez Street, Brgy. Sto. Niño, Bogo City, Cebu",
    contact: "(+63) 917 145 3747",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/cebu.jpg",
  },
  {
    name: "Legazpi",
    address: "Brgy. Centro Baybay, Peñarranda Street, Legazpi City, Albay",
    contact: "(0917) 145 4271",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/legazpi.jpg",
  },
  {
    name: "Surigao",
    address: "Magallanes Street, Brgy. Washington, Surigao City",
    contact: "(+63) 917 145 3937",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/surigao.jpg",
  },
  {
    name: "Catbalogan",
    address: "San Bartolome St., Brgy 7 Ubanon, Catbalogan",
    contact: "(+63) 917 145 3722",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/catbalogan.jpg",
  },
  {
    name: "Borongan",
    address: "Baybay 4, Brgy. Songco, Borongan City",
    contact: "(0917) 712 5433",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/borongan.jpg",
  },
  {
    name: "Guiuan",
    address: "National Highway Road, Brgy. Surok, Guiuan, Eastern Samar",
    contact: "(+63) 917 622 0904",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/guiuan.jpg",
  },
  {
    name: "Maasin",
    address: "Garces Street, Brgy. Tunga-tunga, Maasin City",
    contact: "(+63) 917 145 4269",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/maasin.jpg",
  },
  {
    name: "Naval",
    address: "Vicentillo Street, Pob. Naval, Biliran",
    contact: "(0917) 145 3710",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/naval.jpg",
  },
  {
    name: "Tandag",
    address: "Donasco Street, Bagong Lungsod, Tandag City",
    contact: "(+63) 917 145 3351",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/tandag.jpg",
  },
];

export default function BranchesPage() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="display-lg-mobile md:display-lg text-primary mb-4">
            Our Branches
          </h1>
          <p className="body-lg text-on-surface-variant">
            With ten branches across the Visayas and Bicol, we are always
            within reach. Visit the branch nearest you.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="group overflow-hidden rounded-lg border border-outline-variant bg-surface-container-low shadow-[var(--shadow-floating)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h2 className="headline-sm text-white">{branch.name}</h2>
                  <span className="label-sm text-white/70">{branch.days}</span>
                </div>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="body-md text-on-surface-variant">
                    {branch.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <p className="label-md text-primary">{branch.contact}</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <p className="body-md text-on-surface-variant">{branch.hours}</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <p className="body-md text-on-surface-variant">{branch.days}</p>
                </div>
                <Link
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  className="label-md mt-2 inline-flex items-center gap-1 text-primary no-underline transition-colors hover:text-primary-container"
                >
                  Get Directions
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
