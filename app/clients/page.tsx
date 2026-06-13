import Image from "next/image";

const clientGroups = [
  {
    label: "Government Agencies",
    clients: [
      { name: "DepEd", file: "deped.png" },
      { name: "DepEd Baybay", file: "deped_baybay.png" },
      { name: "DPWH", file: "dpwh.png" },
      { name: "DTI", file: "dti.jpg" },
      { name: "DAR", file: "dar.png" },
      { name: "DAR EV", file: "dar_ev.png" },
      { name: "DAR SDS", file: "dar_sds.png" },
      { name: "DSWD R5", file: "dswdr5.png" },
      { name: "BIR", file: "bir.png" },
      { name: "PNP", file: "pnp.png" },
      { name: "PNP R5", file: "pnp_ro5.png" },
      { name: "CGT", file: "cgt.png" },
      { name: "Human Settlements", file: "human_sett.jpg" },
    ],
  },
  {
    label: "Local Government Units",
    clients: [
      { name: "Abuyog", file: "abuyog.png" },
      { name: "Alangalang", file: "alangalang.png" },
      { name: "Anwaray", file: "anwaray.png" },
      { name: "Baybay", file: "baybay.png" },
      { name: "Baybay Water", file: "baybay_water.png" },
      { name: "Bontoc", file: "bontoc.png" },
      { name: "Catbalogan", file: "catbalogan.png" },
      { name: "Hindang", file: "hindang.png" },
      { name: "Hilingos", file: "hilingos.png" },
      { name: "Inopacan", file: "inopacan.png" },
      { name: "Macrohon", file: "macrohon.jpg" },
      { name: "Mahaplag", file: "mahaplag.png" },
      { name: "Palo", file: "palo.png" },
      { name: "Paranas", file: "paranas.png" },
      { name: "Tanauan", file: "tanauan.png" },
      { name: "Tolosa", file: "tolosa.png" },
      { name: "Tandag", file: "tandag.jpg" },
      { name: "City of Maasin", file: "city_maasin.jpg" },
      { name: "City of Tandag", file: "city_of_tandag.jpg" },
      { name: "Muni Bontoc", file: "muni_bontoc.jpg" },
      { name: "Muni Palo", file: "muni_palo.jpg" },
      { name: "Muni Tanauan", file: "muni_tanauan.jpg" },
    ],
  },
  {
    label: "Academic Institutions",
    clients: [
      { name: "NEMSU", file: "NEMSU.png" },
      { name: "SSU", file: "SSU.png" },
      { name: "SSU COE", file: "ssu_coe.png" },
      { name: "EVSU", file: "evsu.png" },
      { name: "UEPP", file: "UEPP.png" },
      { name: "VSU Isabel", file: "VSU ISABEL.png" },
      { name: "Bicol University", file: "bicol_university.png" },
      { name: "Biliran Province", file: "biliran.png" },
      { name: "College of Maasin", file: "college_of_maasin.jpg" },
      { name: "SLSU", file: "slsu.jpg" },
      { name: "UE", file: "University_of_the_East_seal.png" },
      { name: "SDS", file: "SDS.png" },
      { name: "Surigao del Norte", file: "Surigao_del_norte.png" },
      { name: "Samar State University", file: "Samar State University.png" },
      { name: "St. Pauls", file: "ST_ PAULS.png" },
      { name: "Tinago Elem", file: "TINAGO ELEM.png" },
      { name: "FCIC", file: "fcic.png" },
    ],
  },
  {
    label: "Private & Non-Profit",
    clients: [
      { name: "DBP", file: "dbp.jpg" },
      { name: "HFC", file: "hfc.jpg" },
      { name: "PASAR", file: "pasar.jpg" },
      { name: "PAX", file: "pax.jpg" },
      { name: "PLAN", file: "plan.jpg" },
      { name: "RAFT", file: "rafi.jpg" },
      { name: "SBMPC", file: "sbmpc.jpg" },
      { name: "Tingog", file: "Tingog.jpg" },
    ],
  },
];

export default function ClientsPage() {
  return (
    <>
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-16">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h1 className="display-lg-mobile md:display-lg text-primary mb-4">
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
              <h2 className="headline-md text-primary mb-2">
                {group.label}
              </h2>
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
    </>
  );
}
