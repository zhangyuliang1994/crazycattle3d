'use client';

import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";

// 游戏页面模板的属性接口
interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;
      description: string;
      url: string;
    };
    content: any;
  };
}

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
        <OtherGames
          games={getOtherGames()}
          onGameSelect={() => {}}
        />
        <Features content={gameConfig.content} />
        <WhatIs />
        <HowToPlay />
        <FAQ />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateGameSchema({
              title: gameConfig.metadata.title,
              description: gameConfig.metadata.description,
              url: gameConfig.metadata.url
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "HowTo",
            "name": gameConfig.content.howToPlay.title,
            "url": `https://crazy-cattle.net${gameConfig.metadata.url}`,
            "inLanguage": "en",
            "image": {
              "@type": "ImageObject",
              "url": gameConfig.content.howToPlay.image
            },
            "step": [{
              "@type": "HowToStep",
              "position": "1",
              "name": gameConfig.content.howToPlay.title,
              "text": gameConfig.content.howToPlay.description,
              "image": gameConfig.content.howToPlay.image
            }]
          }),
        }}
      />
    </div>
  );
}

