import { getCharacters } from "@/lib/getCharacters";
import CharacterCard from "@/components/CharacterCard";

export default function Home() {
  const characters = getCharacters();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Jedi Archives
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard
            key={character.slug}
            character={character}
          />
        ))}
      </div>
    </main>
  );
}
