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
      


<div className={`relative border border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm ${
  character.side==="dark"
  ? "hover:border-red-500"
  : "hover:border-blue-500"
} hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100`} >

<div
  className={`absolute top-0 left-0 w-full h-1 
  bg-gradient-to-r 
  ${
    character.side === "dark"
      ? "from-red-500"
      : "from-blue-500"
  } 
  to-transparent 
  rounded-t-xl`}
/>

     <div className="bg-gradient-to-b from-white to-gray-200 
rounded-xl p-4 mb-4 shadow-inner flex justify-center">
  
  <Image
    src={character.image}
    alt={character.name}
    width={300}
    height={400}
    className="object-contain"
  />

</div>

        <h2 className="text-xl font-bold tracking-wide">
          {character.name}
        </h2>

        <p className="text-sm opacity-60">
          {character.role}
        </p>

        <span
          className={`text-xs mt-2 inline-block ${
            character.side === "light"
              ? "text-blue-400"
              : "text-red-400"
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
