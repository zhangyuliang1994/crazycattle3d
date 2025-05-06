import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { content } from "@/config/content";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema, howToPlaySchema } from "@/app/schema";

export const metadata: Metadata = {
  title: `Crazy Cow 3D | Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Crazy Cow 3D - a free physics-based battle game right in your browser. No downloads required.",
  openGraph: {
    title: `Crazy Cow 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Crazy Cow 3D - a free physics-based battle game right in your browser. No downloads required.",
  }
};

// 自定义游戏内容配置
const gameContent = {
  ...content,
  gameSection: {
    ...content.gameSection,
    title: "Crazy Cow 3D",
    game: {
      url: '/crazy-cow-3d.embed',
      title: "crazycow3d",
      externalUrl: '/game/crazycow3d/index.html'
    }
  }
};

export default function CrazyCow3DPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <GameSection content={gameContent} />
        <OtherGames 
          games={getOtherGames()}
          onGameSelect={() => {}}
        />
        <Features />
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
              title: "Crazy Cow 3D",
              description: "Play Crazy Cow 3D - a free physics-based battle game right in your browser. No downloads required.",
              url: "/crazy-cow-3d"
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToPlaySchema),
        }}
      />
    </div>
  );
}
