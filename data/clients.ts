export interface Client {
  name: string;
  file: string;
}

export interface ClientGroup {
  label: string;
  clients: Client[];
}

export const clientGroups: ClientGroup[] = [
  {
    label: "Government Agencies",
    clients: [
      { name: "DepEd", file: "deped.webp" },
      { name: "DepEd Baybay", file: "deped_baybay.webp" },
      { name: "DPWH", file: "dpwh.webp" },
      { name: "DTI", file: "dti.webp" },
      { name: "DAR", file: "dar.webp" },
      { name: "DAR EV", file: "dar_ev.webp" },
      { name: "DAR SDS", file: "dar_sds.webp" },
      { name: "DSWD R5", file: "dswdr5.webp" },
      { name: "BIR", file: "bir.webp" },
      { name: "PNP", file: "pnp.webp" },
      { name: "PNP R5", file: "pnp_ro5.webp" },
      { name: "CGT", file: "cgt.webp" },
      { name: "Human Settlements", file: "human_sett.webp" },
    ],
  },
  {
    label: "Local Government Units",
    clients: [
      { name: "Abuyog", file: "abuyog.webp" },
      { name: "Alangalang", file: "alangalang.webp" },
      { name: "Anwaray", file: "anwaray.webp" },
      { name: "Baybay", file: "baybay.webp" },
      { name: "Baybay Water", file: "baybay_water.webp" },
      { name: "Bontoc", file: "bontoc.webp" },
      { name: "Catbalogan", file: "catbalogan.webp" },
      { name: "Hindang", file: "hindang.webp" },
      { name: "Hilingos", file: "hilingos.webp" },
      { name: "Inopacan", file: "inopacan.webp" },
      { name: "Macrohon", file: "macrohon.webp" },
      { name: "Mahaplag", file: "mahaplag.webp" },
      { name: "Palo", file: "palo.webp" },
      { name: "Paranas", file: "paranas.webp" },
      { name: "Tanauan", file: "tanauan.webp" },
      { name: "Tolosa", file: "tolosa.webp" },
      { name: "Tandag", file: "tandag.webp" },
      { name: "City of Maasin", file: "city_maasin.webp" },
      { name: "City of Tandag", file: "city_of_tandag.webp" },
      { name: "Muni Bontoc", file: "muni_bontoc.webp" },
      { name: "Muni Palo", file: "muni_palo.webp" },
      { name: "Muni Tanauan", file: "muni_tanauan.webp" },
    ],
  },
  {
    label: "Academic Institutions",
    clients: [
      { name: "NEMSU", file: "NEMSU.webp" },
      { name: "SSU", file: "SSU.webp" },
      { name: "SSU COE", file: "ssu_coe.webp" },
      { name: "EVSU", file: "evsu.webp" },
      { name: "UEPP", file: "UEPP.webp" },
      { name: "VSU Isabel", file: "VSU ISABEL.webp" },
      { name: "Bicol University", file: "bicol_university.webp" },
      { name: "Biliran Province", file: "biliran.webp" },
      { name: "College of Maasin", file: "college_of_maasin.webp" },
      { name: "SLSU", file: "slsu.webp" },
      { name: "UE", file: "University_of_the_East_seal.webp" },
      { name: "SDS", file: "SDS.webp" },
      { name: "Surigao del Norte", file: "Surigao_del_norte.webp" },
      { name: "Samar State University", file: "Samar State University.webp" },
      { name: "St. Pauls", file: "ST_ PAULS.webp" },
      { name: "Tinago Elem", file: "TINAGO ELEM.webp" },
      { name: "FCIC", file: "fcic.webp" },
    ],
  },
  {
    label: "Private & Non-Profit",
    clients: [
      { name: "DBP", file: "dbp.webp" },
      { name: "HFC", file: "hfc.webp" },
      { name: "PASAR", file: "pasar.webp" },
      { name: "PAX", file: "pax.webp" },
      { name: "PLAN", file: "plan.webp" },
      { name: "RAFT", file: "rafi.webp" },
      { name: "SBMPC", file: "sbmpc.webp" },
      { name: "Tingog", file: "Tingog.webp" },
    ],
  },
];
