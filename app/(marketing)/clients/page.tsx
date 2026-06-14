import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { clientGroups } from "@/data/clients";

export default function ClientsPage() {
  return (
    <>
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="display-lg-mobile md:display-lg mb-4 text-primary">
              Our Clients
            </h1>
            <p className="body-lg text-on-surface-variant">
              Over the years, we have had the privilege of serving government
              agencies, local government units, academic institutions, and
              private organizations across the Visayas and beyond.
            </p>
          </div>

          {clientGroups.map((group) => (
            <div key={group.label} className="mb-16 last:mb-0">
              <h2 className="headline-md mb-2 text-primary">{group.label}</h2>
              <div className="mb-8 h-px w-full bg-outline-variant" />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex aspect-[3/2] items-center justify-center rounded-lg border border-outline-variant bg-surface-container-low p-4 transition-shadow hover:shadow-[var(--shadow-floating)]"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={`/Images/Clients/${client.file}`}
                        alt={client.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Be One of Our Partners"
        description="Join the growing family of government agencies, LGUs, academic institutions, and private organizations that trust Stylish Living Furniture for their spaces."
        buttonText="Inquire About Partnerships"
      />
    </>
  );
}
