"use client";

import Image from "next/image";
import Link from "next/link";

interface Branch {
  name: string;
  address: string;
  contact: string;
  hours: string;
  days: string;
  image: string;
}

const branches: Branch[] = [
  {
    name: "Tacloban Main",
    address: "Brgy. 95 Caibaan, Maharlika Highway, Tacloban City",
    contact: "(+63) 917 145 3352",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/tacloban.webp",
  },
  {
    name: "Cebu",
    address: "Pelaez Street, Brgy. Sto. Niño, Bogo City, Cebu",
    contact: "(+63) 917 145 3747",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/cebu.webp",
  },
  {
    name: "Legazpi",
    address: "Brgy. Centro Baybay, Peñarranda Street, Legazpi City, Albay",
    contact: "(0917) 145 4271",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/legazpi.webp",
  },
  {
    name: "Surigao",
    address: "Magallanes Street, Brgy. Washington, Surigao City",
    contact: "(+63) 917 145 3937",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/surigao.webp",
  },
  {
    name: "Catbalogan",
    address: "San Bartolome St., Brgy 7 Ubanon, Catbalogan",
    contact: "(+63) 917 145 3722",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/catbalogan.webp",
  },
  {
    name: "Borongan",
    address: "Baybay 4, Brgy. Songco, Borongan City",
    contact: "(0917) 712 5433",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/borongan.webp",
  },
  {
    name: "Guiuan",
    address: "National Highway Road, Brgy. Surok, Guiuan, Eastern Samar",
    contact: "(+63) 917 622 0904",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/guiuan.webp",
  },
  {
    name: "Maasin",
    address: "Garces Street, Brgy. Tunga-tunga, Maasin City",
    contact: "(+63) 917 145 4269",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/maasin.webp",
  },
  {
    name: "Naval",
    address: "Vicentillo Street, Pob. Naval, Biliran",
    contact: "(0917) 145 3710",
    hours: "8:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/naval.webp",
  },
  {
    name: "Tandag",
    address: "Donasco Street, Bagong Lungsod, Tandag City",
    contact: "(+63) 917 145 3351",
    hours: "9:00 AM - 6:00 PM",
    days: "Monday to Saturday",
    image: "/Images/Branches/tandag.webp",
  },
];

export default function BranchesSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="headline-md text-primary">Our Branches</h2>
          <p className="body-md text-on-surface-variant mt-2">
            Find a branch near you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.slice(0, 3).map((branch) => (
            <div
              key={branch.name}
              className="group overflow-hidden rounded-lg bg-surface-container-low shadow-[var(--shadow-floating)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="headline-sm absolute bottom-3 left-4 text-white">
                  {branch.name}
                </h3>
              </div>
              <div className="space-y-2 p-4">
                <p className="body-md text-on-surface-variant">
                  {branch.address}
                </p>
                <p className="label-md text-primary">{branch.contact}</p>
                <p className="body-md text-on-surface-variant">
                  {branch.hours}
                </p>
                <p className="label-sm text-on-surface-variant">
                  {branch.days}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/branches"
            className="inline-block rounded border border-primary px-10 py-3 text-sm font-semibold uppercase tracking-[0.05em] text-primary no-underline transition-colors hover:bg-primary hover:text-white"
          >
            View All Branches
          </Link>
        </div>
      </div>
    </section>
  );
}
