export interface Area {
  slug: string;
  name: string;
  intro: string;
  highlights: string[];
}

export const areas: Area[] = [
  {
    slug: 'mooresville',
    name: 'Mooresville',
    intro: 'We provide furnace repair, heat pump service, and heating system maintenance throughout Mooresville. From established neighborhoods to newer communities near Lake Norman, we help homeowners stay warm when temperatures drop.',
    highlights: [
      'Local service across Mooresville neighborhoods',
      'Familiarity with common regional heating systems',
      'Responsive scheduling for both planned and urgent heating needs',
    ],
  },
  {
    slug: 'lake-norman',
    name: 'Lake Norman',
    intro: 'Lake Norman homes rely on dependable heating through the cooler months. We service furnaces, heat pumps, and dual-fuel systems for properties around the lake with clear communication and careful work.',
    highlights: [
      'Coverage for waterfront and near-lake properties',
      'Experience with heat pumps common in the area',
      'Priority attention for no-heat situations in cold weather',
    ],
  },
  {
    slug: 'davidson',
    name: 'Davidson',
    intro: 'Davidson residents count on us for furnace and heat pump repair, maintenance, and system replacements. We provide straightforward assessments and reliable service for homes throughout the area.',
    highlights: [
      'Service throughout the Davidson area',
      'Support for both older and newer heating equipment',
      'Clear estimates before work begins',
    ],
  },
  {
    slug: 'cornelius',
    name: 'Cornelius',
    intro: 'Cornelius sits along Lake Norman and features a mix of residential heating systems. We provide furnace repair, heat pump service, and seasonal maintenance tailored to local homes.',
    highlights: [
      'Coverage across Cornelius neighborhoods',
      'Experience with gas furnaces and heat pumps',
      'Practical advice on repair versus replacement',
    ],
  },
  {
    slug: 'huntersville',
    name: 'Huntersville',
    intro: 'Huntersville continues to grow, and many homes need dependable heating service. We offer repair, maintenance, and installation support for Huntersville properties.',
    highlights: [
      'Service for a wide range of Huntersville communities',
      'Programs for furnaces, heat pumps, and dual-fuel systems',
      'Flexible scheduling options',
    ],
  },
  {
    slug: 'troutman',
    name: 'Troutman',
    intro: 'Troutman and the areas north of Mooresville are part of our regular service territory. We help homeowners with heating repair, tune-ups, and system evaluations.',
    highlights: [
      'Convenient access for Troutman residents',
      'Experience with a variety of heating equipment ages and brands',
      'Honest assessments of repair and replacement options',
    ],
  },
  {
    slug: 'statesville',
    name: 'Statesville',
    intro: 'We extend service into Statesville for residential heating repair and related HVAC needs. Homeowners looking for accountable local service can count on clear communication.',
    highlights: [
      'Service reach into Statesville and nearby areas',
      'Support for furnaces, heat pumps, and related controls',
      'Transparent pricing after diagnosis',
    ],
  },
  {
    slug: 'denver-nc',
    name: 'Denver, NC',
    intro: 'Denver, NC, on the western side of Lake Norman, is within our service area. We provide heating repair, maintenance, and installation support for homes that enjoy the lake lifestyle.',
    highlights: [
      'Coverage for Denver and surrounding lake communities',
      'Attention to both primary and secondary heating systems',
      'Reliable service for planned and urgent work',
    ],
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
