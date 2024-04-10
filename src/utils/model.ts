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

export interface Terminal {
  name: string;
  location: string;
  phones: {
    text: string;
    link: string;
  }[];
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
    name: "Matehuala",
    location: "San Luis de Potosí, México",
    phones: [{ text: "486-980-0697", link: "tel:+527869800697" }],
  },
  {
    name: "San Diego",
    location: "Guanajuato, México",
    phones: [{ text: "418-684-0464", link: "tel:+524186840464" }],
  },
  {
    name: "Dolores Hidalgo",
    location: "Guanajuato, México",
    phones: [{ text: "418-185-4340", link: "tel:+524181854340" }],
  },
  {
    name: "San Miguel",
    location: "Guanajuato, México",
    phones: [
      { text: "415-153-2132", link: "tel:+524151532132" },
      { text: "415-104-0263", link: "tel:+524151040263" },
      { text: "415-121-8019", link: "tel:+524151218019" },
    ],
  },
  {
    name: "Celaya",
    location: "Guanajuato, México",
    phones: [{ text: "461-215-1393", link: "tel:+524612151393" }],
  },
  {
    name: "Salamanca",
    location: "Guanajuato, México",
    phones: [{ text: "464-649-3061", link: "tel:+524646493091" }],
  },
  {
    name: "SalvaTierra",
    location: "Guanajuato, México",
    phones: [{ text: "466-663-1398", link: "tel:+524666631398" }],
  },
  {
    name: "Villa Hidalgo",
    location: "San Luis de Potosí, México",
    phones: [
      { text: "486-855-2439", link: "tel:+524868552439" },
      { text: "444-662-8711", link: "tel:+524446628711" },
      { text: "444-418-7161", link: "tel:+524444187161" },
    ],
  },
  {
    name: "Yuriria",
    location: "Guanajuato, México",
    phones: [{ text: "445-168-2231", link: "tel:+524451682231" }],
  },
  {
    name: "Moroleon",
    location: "Guanajuato, México",
    phones: [{ text: "445-445-2121", link: "tel:+524454452121" }],
  },
  {
    name: "Cuitzeo",
    location: "Michoacán, México",
    phones: [
      { text: "455-357-1391", link: "tel:+524553571391" },
      { text: "455-357-1396", link: "tel:+524553571396" },
      { text: "455-357-1397", link: "tel:+524553571397" },
    ],
  },
  {
    name: "Morelia",
    location: "Michoacán, México",
    phones: [{ text: "445-168-2231", link: "tel:+524451682231" }],
  },
  {
    name: "San Felipe",
    location: "Guanajuato, México",
    phones: [{ text: "428-685-2734", link: "tel:+524286852734" }],
  },
  {
    name: "Ocampo",
    location: "Guanajuato, México",
    phones: [{ text: "428-142-8102", link: "tel:+524281428102" }],
  },
  {
    name: "La Escondida",
    location: "Guanajuato, México",
    phones: [
      { text: "477-256-4228", link: "tel:+524772564228" },
      { text: "428-107-2938", link: "tel:+524281072938" },
    ],
  },
  {
    name: "Gachupines",
    location: "Guanajuato, México",
    phones: [{ text: "428-102-1013", link: "tel:+524281021013" }],
  },
  {
    name: "Ojuelos",
    location: "Jalisco, México",
    phones: [
      { text: "496-137-4828", link: "tel:+524961374828" },
      { text: "196-129-1356", link: "tel:+521961291356" },
    ],
  },
  {
    name: "Rosenberg",
    location: "Texas, USA",
    phones: [
      { text: "346-988-1857", link: "tel:+13469881857" },
      { text: "832-798-8302", link: "tel:+18327988302" },
    ],
  },
];
