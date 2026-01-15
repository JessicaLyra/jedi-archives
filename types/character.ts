export interface BaseCharacter {
  slug: string;
  name: string;
  side: "light" | "dark";
  planet: string;
  role: string;
  power: number;
}

export interface Character extends BaseCharacter {
  image?: string;
  affiliation?: "Jedi" | "Sith" | "Rebel" | "Empire";
  description?: string;
}
