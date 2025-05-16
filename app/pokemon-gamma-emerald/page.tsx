import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { pokemonGammaEmeraldContent } from "./content";

export const metadata: Metadata = {
  title: `Pokemon Gamma Emerald | Play Free Game | ${siteConfig.domain}`,
  description: "PPlay Pokémon Gamma Emerald, an enhanced Emerald rom hack, online for free! Discover new Pokémon, updated graphics & a challenging adventure. Play now!",
  openGraph: {
    title: `Pokemon Gamma Emerald Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play the enhanced Pokemon Gamma Emerald version online for free.",
    // images: [{ url: `https://${siteConfig.domain}/assets/pokemon-gamma-emerald/pokemon-gamma-emerald.png` }]
  },
  alternates: {
    canonical: `/pokemon-gamma-emerald`,
  }
};

const gameConfig = {
  metadata: {
    title: "Pokemon Gamma Emerald",
    description: "Enhanced version of Pokemon Emerald with new features and content.",
    url: "/pokemon-gamma-emerald"
  },
  content: pokemonGammaEmeraldContent
};

export default function PokemonGammaEmeraldPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
