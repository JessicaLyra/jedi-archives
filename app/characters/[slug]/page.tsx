import { characters } from "@/data/characters";
import Image from "next/image";
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;

  const character = characters.find(
    (c) => c.slug === slug
  );

  if (!character) {
    return <h1>Personagem não encontrado</h1>;
  }

  return (
    <div >
    <main className="p-6 min-h-screen bg-cover bg-center" style={{ padding: 20 }} style={{backgroundImage: "url('/images/bg.jpg')"}}>
      <Image 
      src={character.image}
      alt={character.name}
      width={300}
      height={400}className="object-contain"
      />
      <h1>{character.name}</h1>
      <p>Planeta: {character.planet}</p>
      <p>Lado: {character.side}</p>
      <p>Poder: {character.power}</p>
      
    </main>
    </div>
  );
}
