import { Metadata } from 'next';
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "../games/game-data";

interface HomeTemplateProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
  activeGame: string | null;
  onGameSelect: (game: string) => void;
}

export default function HomeTemplate({
  searchQuery,
  onSearchChange,
  onSearch,
  activeGame,
  onGameSelect
}: HomeTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onSearch={onSearch}
      />

      <main className="container mx-auto px-4 py-8">
        <GameSection />
        <OtherGames
          games={getOtherGames()}
          onGameSelect={onGameSelect}
        />
        <Features />
        <WhatIs />
        <HowToPlay />
        <FAQ />
        <section className="mb-16" id="rating">
          <Rating />
        </section>
      </main>

      <Footer />
    </div>
  );
}

