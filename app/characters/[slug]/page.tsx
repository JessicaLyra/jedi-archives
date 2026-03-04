import { characters } from "@/data/characters";
import CharacterView from "./CharacterView";

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
    return <div>Personagem não encontrado</div>;
  }

  return <CharacterView character={character} />;
}