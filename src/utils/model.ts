import TestImage from "@/assets/Img_nosotros.jpg";
import { StaticImageData } from "next/image";
export interface Terminal {
  name: string;
  address: string;
  url: StaticImageData;
  ref1: string;
  ref2: string;
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

/* export interface Terminal {
  name: string;
  location: string;
  phones: {
    text: string;
    link: string;
  }[];
} */

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
    lat: 29.793499030415738,
    lng: -95.36091622383215,
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
    lat: 22.150390127986395,
    lng: -100.95013187562942,
    url: "https://maps.app.goo.gl/Antyn9VygRq5Aa4n6",
    id: "o2",
  },
];

export const terminals: Terminal[] = [
  {
    name: "Lotería Nacional",
    address: "Reforma 1 Tabacalera, cuatemoc",
    url: TestImage,
    ref1: "",
    ref2: "",
    id: "t1",
  },
  {
    name: "City Express Junior by Marriot Puebla",
    address: "Reforma 1 Tabacalera, cuatemoc",
    url: TestImage,
    ref1: "",
    ref2: "",
    id: "t2",
  },
  {
    name: "Soriana Híper Boca del Río",
    address: "Reforma 1 Tabacalera, cuatemoc",
    url: TestImage,
    ref1: "",
    ref2: "",
    id: "t3",
  },
  {
    name: "Terminal Veracruz AV Express",
    address: "Reforma 1 Tabacalera, cuatemoc",
    url: TestImage,
    ref1: "",
    ref2: "",
    id: "t4",
  },
  {
    name: "Omnibus turísticos Ocaso Xalapa",
    address: "Reforma 1 Tabacalera, cuatemoc",
    url: TestImage,
    ref1: "Enfrente de la torre orgullo Veracruzano",
    ref2: "El acceso es por lateral del puente boulevar Xalapa - Banderilla",
    id: "t5",
  },
];
