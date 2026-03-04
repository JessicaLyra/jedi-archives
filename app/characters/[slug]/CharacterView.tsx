"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

export default function CharacterView({ character }: any) {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
     <div className="flex justify-center mt-6">
        <Image
          src="/images/logo.png"
          alt="Jedi Archives"
          width={100}
          height={80}
          priority
        />
      </div>
      {/* HERO minimalista */}
      <div className="h-[220px] flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-white/90">
          {character.name}
        </h1>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <div className="rounded-3xl bg-neutral-900 border border-white/10 p-12">

          <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* HOLOGRAMA PROTAGONISTA */}
<div className="relative flex justify-center items-center">

  {/* Glow suave */}
  <div className="absolute w-[450px] h-[450px] bg-cyan-400/10 blur-[140px] rounded-full" />

  {/* Scan line animada */}
  <motion.div
    animate={{ y: [-200, 200] }}
    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
    className="absolute w-full h-[1px] bg-cyan-300/30"
  />

  {/* Container holograma */}
  <motion.div
    animate={{ rotateY: 360 }}
    transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
    style={{ transformStyle: "preserve-3d" }}
    className="relative"
  >
    <Image
      src={character.holograma || character.image}
      alt={character.name}
      width={420}
      height={520}
      className="brightness-125 contrast-125 drop-shadow-[0_0_60px_rgba(0,255,255,0.9)]"
    />

    {/* LINHAS HORIZONTAIS */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "repeating-linear-gradient(to bottom, rgba(0,255,255,0.08) 0px, rgba(0,255,255,0.08) 1px, transparent 1px, transparent 4px)",
        mixBlendMode: "screen",
      }}
    />
  </motion.div>
</div>

            {/* INFORMAÇÕES DISCRETAS */}
            <div className="space-y-10">

              <div>
                <p className="text-xs uppercase tracking-widest text-amber-400 mb-2">
                  Planeta
                </p>
                <p className="text-2xl font-semibold text-white/90">
                  {character.planet}
                </p>
              </div>

              <div>
                <p className="text-white/70 leading-relaxed text-lg">
                  {character.description}
                </p>
              </div>

              {/* POWER BAR CLEAN */}
              <div>
                <p className="mb-3 text-white/60 text-sm tracking-wide">
                  Nível de Poder: {character.power}
                </p>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${character.power}%` }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-cyan-400"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* BOTÃO DISCRETO */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pb-20 text-center">
        <TransitionLink
          href="/"
          className="px-8 py-3 rounded-full border border-white/20 hover:bg-cyan-400/10 transition"
        >
          ← Voltar
        </TransitionLink>
      </div>

    </div>
  );
}