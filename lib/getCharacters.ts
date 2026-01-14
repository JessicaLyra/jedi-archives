import { characters } from "@/data/characters";

export function getCharacters() {
  return characters;
}

export function getCharacterBySlug(slug: string) {
  return characters.find(
    (character) => character.slug === slug
  );
}
