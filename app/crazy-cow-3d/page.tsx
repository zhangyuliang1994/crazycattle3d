import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyCowContent } from "./content";

export const metadata: Metadata = {
  title: `Crazy Cow 3D | Play Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Crazy Cow 3D unblocked online for free! Control a wild cow in this chaotic and fun 3D action game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Crazy Cow 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Crazy Cow 3D - a free physics-based battle game right in your browser. No downloads required.",
  },
  alternates: {
    canonical: `/crazy-cow-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Crazy Cow 3D",
    description: "Play Crazy Cow 3D - a free physics-based battle game right in your browser. No downloads required.",
    url: "/crazy-cow-3d"
  },
  content: crazyCowContent
};

export default function CrazyCow3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}


