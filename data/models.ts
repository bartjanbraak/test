export type PorscheModel = {
  slug: string;
  name: string;
  era: string;
  tagline: string;
  power: number;
  torque: number;
  zeroToSixty: number;
  topSpeed: number;
  drivetrain: string;
  image: string;
  gallery: string[];
  price: string;
};

export const models: PorscheModel[] = [
  {
    slug: '911-gt3',
    name: '911 GT3',
    era: '992 Generation',
    tagline: 'A naturally aspirated track icon sharpened for road and circuit balance.',
    power: 502,
    torque: 346,
    zeroToSixty: 3.2,
    topSpeed: 197,
    drivetrain: 'RWD · PDK',
    image:
      'https://images.unsplash.com/photo-1592853625601-bb9d23da12a3?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617654112328-2f7f98ec6633?auto=format&fit=crop&w=1400&q=80'
    ],
    price: '$184,550'
  },
  {
    slug: '911-gt3-rs',
    name: '911 GT3 RS',
    era: '992 Generation',
    tagline: 'Aero-first machine with race-derived downforce and explosive precision.',
    power: 518,
    torque: 343,
    zeroToSixty: 3.0,
    topSpeed: 184,
    drivetrain: 'RWD · PDK',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614204424926-196a80bf0be8?auto=format&fit=crop&w=1400&q=80'
    ],
    price: '$241,300'
  },
  {
    slug: '911-turbo-s',
    name: '911 Turbo S',
    era: '992 Generation',
    tagline: 'Everyday usability fused with brutal all-weather supercar pace.',
    power: 640,
    torque: 590,
    zeroToSixty: 2.6,
    topSpeed: 205,
    drivetrain: 'AWD · PDK',
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=80'
    ],
    price: '$230,400'
  },
  {
    slug: 'singer-restomod',
    name: 'Singer-style Restomod',
    era: '964 Reimagined',
    tagline: 'Hand-crafted analogue soul with modern composure and obsessive detail.',
    power: 450,
    torque: 420,
    zeroToSixty: 3.3,
    topSpeed: 180,
    drivetrain: 'RWD · 6MT',
    image:
      'https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=80'
    ],
    price: '$650,000+'
  },
  {
    slug: '964-classic',
    name: '911 Carrera 964 Classic',
    era: '1989-1994',
    tagline: 'An air-cooled legend delivering tactile steering and timeless lines.',
    power: 247,
    torque: 228,
    zeroToSixty: 5.5,
    topSpeed: 162,
    drivetrain: 'RWD · 5MT',
    image:
      'https://images.unsplash.com/photo-1626668893633-1dd50aa9d871?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80'
    ],
    price: '$170,000+'
  }
];

export const getModelBySlug = (slug: string) => models.find((model) => model.slug === slug);
