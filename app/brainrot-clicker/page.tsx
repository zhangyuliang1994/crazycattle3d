import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { brainrotClickerContent } from "./content";

export const metadata: Metadata = {
  title: `Brainrot Clicker | Play Online Game | ${siteConfig.domain}`,
  description: "Play Brainrot Clicker unblocked online for free! Tap into meme madness in this addictive clicker game. No download, instant browser play. Click to victory!",
  openGraph: {
    title: `Brainrot Clicker Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Brainrot Clicker - a free addictive clicker game right in your browser. No downloads required.",
  },
  alternates: {
    canonical: `/brainrot-clicker`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Brainrot Clicker",
    description: "Play Brainrot Clicker - a free addictive clicker game right in your browser. No downloads required.",
    url: "/brainrot-clicker"
  },
  content: brainrotClickerContent
};

export default function BrainrotClickerPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
