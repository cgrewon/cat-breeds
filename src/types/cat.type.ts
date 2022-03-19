export interface Weight {
  imperial: string;
  metric: string;
}

export interface CatImage {
  id: string;
  width: number;
  height: number;
  url: string;
}

export interface Cat {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  image: CatImage;
}

export interface CatRowData {
  id: string;
  image?: string;
  name: string;
  description: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  weight_imperial: string;
  weight_metric: string;
  temperament: string;
  country_code: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export function getRowData(cat: Cat): CatRowData {
  return {
    id: cat.id,
    image: cat.image ? cat.image.url : undefined,
    name: cat.name,
    description: cat.description,
    cfa_url: cat.cfa_url,
    vetstreet_url: cat.vetstreet_url,
    vcahospitals_url: cat.vcahospitals_url,
    weight_imperial: cat.weight ? cat.weight.imperial : '',
    weight_metric: cat.weight ? cat.weight.metric : '',
    temperament: cat.temperament,
    country_code: cat.country_code,
    life_span: cat.life_span,
    indoor: cat.indoor,
    lap: cat.lap,
    alt_names: cat.alt_names,
    adaptability: cat.adaptability,
    affection_level: cat.affection_level,
    child_friendly: cat.child_friendly,
    dog_friendly: cat.dog_friendly,
    energy_level: cat.energy_level,
    grooming: cat.grooming,
    health_issues: cat.health_issues,
    intelligence: cat.intelligence,
    shedding_level: cat.shedding_level,
    social_needs: cat.social_needs,
    stranger_friendly: cat.stranger_friendly,
    vocalisation: cat.vocalisation,
    experimental: cat.experimental,
    hairless: cat.hairless,
    natural: cat.natural,
    rare: cat.rare,
    rex: cat.rex,
    suppressed_tail: cat.suppressed_tail,
    short_legs: cat.short_legs,
    wikipedia_url: cat.wikipedia_url,
    hypoallergenic: cat.hypoallergenic,
    reference_image_id: cat.reference_image_id,
  };
}
