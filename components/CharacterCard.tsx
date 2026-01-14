import Link from "next/link";

type Character = {
  slug: string;
  name: string;
  role: string;
  side: string;
};

export default function CharacterCard({
  character,
}: {
  character: Character;
}) {
  return (
    <Link href={`/characters/${character.slug}`}>
      <div className="border border-white/10 rounded-xl p-4 hover:bg-white/5 transition cursor-pointer">
        <h2 className="text-xl font-semibold">
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
