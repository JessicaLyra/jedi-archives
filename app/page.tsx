import { getCharacters } from "@/lib/getCharacters";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

export default function Home() {
  const characters = getCharacters();

  return (
    
    <main className="p-6 min-h-screen bg-cover bg-center"
    style={{backgroundImage: "url('/images/bg.jpg')"}}>
       {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo.png"
          alt="Jedi Archives"
          width={200}
          height={80}
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-6">
        Jedi Archives
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 backdrop-blur-xs">
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
