import TestImage from "@/assets/Img_nosotros.jpg";
import Terminal1 from "@/assets/Terminal1.jpg";
import Terminal2 from "@/assets/Terminal2.jpg";
import Terminal4 from "@/assets/Terminal4.jpg";
import Terminal5 from "@/assets/Terminal5.jpg";


import { StaticImageData } from "next/image";
export interface Terminal {
  name: string;
  address: string;
  url: StaticImageData;
  maps: string;
  ref1: {
    es: string;
    en: string;
  };
  ref2: {
    es: string;
    en: string;
  };
  id: string;
}

export interface Office {
  name: {
    es: string;
    en: string;
  };
  address: string;
  phone1?: string;
  phonelink1?: string;
  phone2?: string;
  phonelink2?: string;
  country: string;
  lat: number;
  lng: number;
  url: string;
  id: string;
}

export const offices: Office[] = [
  {
    name: {
      es: "Oficina en Veracruz",
      en: "Veracruz Office",
    },
    address: "Av. Salvador Díaz Mirón 1892, Moderno, 91910, Veracruz",
    phone1: "+52 (55) 4944 5404",
    phonelink1: "tel:+52(55)49445404",
    phone2: "+1(713)237-8227",
    phonelink2: "tel:+1(713)222-7543",
    country: "us",
    lat: 19.176642,
    lng: -96.134361,
    url: "https://maps.app.goo.gl/g3MnTDrC62hkqHtz8",
    id: "o1",
  },
  {
    name: {
      es: "Oficina en CDMX",
      en: "CDMX Office",
    },
    address:
      "Lotería Nacional - Reforma 1, Tabacalera, Cuauhtémoc, 06030 Ciudad de México",
    phone1: "+52 (55) 4944 5404",
    phonelink1: "tel:+52(55)49445404",
    phone2: "+52(444)822-4720",
    phonelink2: "tel:+52(444)822-4720",
    country: "mx",
    lat: 19.435693,
    lng: -99.150128,
    url: "https://maps.app.goo.gl/Antyn9VygRq5Aa4n6",
    id: "o2",
  },
];

export const terminals: Terminal[] = [
  {
    name: "Lotería Nacional",
    address: "Reforma 1 Tabacalera, cuauhtémoc, 06030 Ciudad de México, CDMX",
    url: Terminal1,
    maps: "https://maps.app.goo.gl/nppJM3aVVRRFQzFB8",
    ref1: {
      es: "Referencia: Se encuentra frente a Torre Caballito",
      en: "Reference: It is located in front of Torre Caballito",
    },
    ref2: {
      es: "El ingreso es por Av. de la República",
      en: "The entrance is through Avenida de la República",
    },
    id: "t1",
  },
  {
    name: "City Express Junior by Marriot Puebla",
    address:
      "Cto. Juan Pablo II 1743, Reserva Territorial Atlixcáyotl, La Noria, 72410 Heróica Puebla de Zaragoza",
    url: Terminal2,
    maps: "https://maps.app.goo.gl/BuFMka9iBNtHtkV48",
    ref1: {
      es: "Referencia: Se encuentra al lado de Walmart Express La Noria",
      en: "Reference: It is located next to Walmart Express La Noria",
    },
    ref2: {
      es: "El ingreso es por Cto Juan Pablo II",
      en: "The entrance is through Cto Juan Pablo II",
    },
    id: "t2",
  },
  {
    name: "Terminal Veracruz AV Express / Smile Bus",
    address: "Av. Salvador Díaz Mirón 1892, Moderno, 91910 Veracruz Veracruz",
    url: Terminal4,
    maps: "https://maps.app.goo.gl/BuFMka9iBNtHtkV48",
    ref1: {
      es: "Referencia: Se encuentra al lado del ex cine Buñuel",
      en: "Reference: It is located next to the former Buñuel cinema.",
    },
    ref2: {
      es: "El ingreso es por Av. Salvador Díaz Mirón",
      en: "The entrance is through Av. Salvador Díaz Mirón",
    },
    id: "t4",
  },
  {
    name: "Omnibus turísticos Ocaso Smile Bus Xalapa",
    address:
      "Bldv. Jalapa-Benderilla 109, 21 de marzo, 91010 Xalapa-Enríquez, Veracruz",
    url: Terminal5,
    maps: "https://maps.app.goo.gl/pPmELT91cDkf3Wip9",
    ref1: {
      es: "Referencia: Se encuentra frente a la torre Orgullo Veracruzano",
      en: "Reference: It is located in front of the Orgullo Veracruzano tower",
    },
    ref2: {
      es: "El ingreso es por la lateral del puente boulevar Xalapa - Banderilla",
      en: "The entrance is from the side of the Xalapa - Banderilla boulevard bridge.",
    },
    id: "t5",
  },
];
