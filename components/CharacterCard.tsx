import Image from "next/image";
import Link from "next/link";

type Character = {
  slug: string;
  name: string;
  role: string;
  side: string;
  power: number;
  image: string; // novo campo
};

export default function CharacterCard({
  character,
}: {
  character: Character;
}) {
  return (
    <Link href={`/characters/${character.slug}`}>
      


<div
  className={`relative border group border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm
  transition-all duration-300 ease-in-out hover:-translate-y-1

  ${
    character.side === "dark"
      ? " hover:shadow-[0_0_50px_rgba(239,68,68,0.7)]"
      : " hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]"
  }
`}
>

<div
  className={`absolute top-0 left-0 w-full h-1 
  bg-gradient-to-r
  ${
    character.side === "dark"
      ? "group-hover:from-red-500 "
      : "group-hover:from-blue-500"
  } 
  to-transparent 
  rounded-t-xl`}
/>

     <div className="bg-gradient-to-b from-white to-gray-200 
rounded-xl p-4 mb-4 shadow-inner flex justify-center" >
  
  <Image
    src={character.image}
    alt={character.name}
    width={300}
    height={400}
    className="object-contain saturate-2 
               group-hover:saturate-200 
               transition-all 
               duration-500"
    
  />
  
</div>

        <h2 className="text-xl font-bold tracking-wide text-amber-400">
          {character.name}
        </h2>

        <p className="text-sm opacity-60">
          {character.role}
        </p>

        <span
          className={`text-xs mt-2 inline-block ${
            character.side === "light"
              ? "text-gray-400 group-hover:text-blue-400"
              : "text-gray-400 group-hover:text-red-400"
          }`}
        >
          {character.side === "light"
            ? "Lado da Luz"
            : "Lado Sombrio"}
        </span>
  
      </div>
    </Link>
  );
}
