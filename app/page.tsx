"use client";
import { useState } from "react";
import { getCharacters } from "@/lib/getCharacters";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

export default function Home() {
  const characters = getCharacters();
  const [filter, setFilter] = useState<"all" | "light" | "dark">("all");
  const filteredCharacters =
  filter === "all"
    ? characters
    : characters.filter((character) => character.side === filter);
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
      <div className="flex gap-4 justify-center mb-8">

        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full border ${
            filter === "all"
              ? "bg-white text-black"
              : "border-white/20"
          }`}
        >
          Todos
        </button>

        <button
          onClick={() => setFilter("light")}
          className={`px-4 py-2 rounded-full border ${
            filter === "light"
              ? "bg-blue-500 text-white"
              : "border-white/20"
          }`}
        >
          Lado da Luz
        </button>

        <button
          onClick={() => setFilter("dark")}
          className={`px-4 py-2 rounded-full border ${
            filter === "dark"
              ? "bg-red-500 text-white"
              : "border-white/20"
          }`}
        >
          Lado Sombrio
        </button>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 backdrop-blur-xs">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.slug}
            character={character}
          />
        ))}
      </div>
    </main>
  );
}
