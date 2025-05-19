import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { crazyChickenContent } from "./content";

export const metadata: Metadata = {
  title: `Crazy Chicken 3D | Play Unblocked Game | ${siteConfig.domain}`,
  description: "Play Crazy Chicken 3D unblocked online for free! Control a wild chicken in this fun 3D action game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Crazy Chicken 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Crazy Chicken 3D - a free physics-based action game right in your browser. No downloads required.",
  },
  alternates: {
    canonical: `/crazy-chicken-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Crazy Chicken 3D",
    description: "Play Crazy Chicken 3D - a free physics-based action game right in your browser. No downloads required.",
    url: "/crazy-chicken-3d"
  },
  content: crazyChickenContent
};

export default function CrazyChicken3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}



