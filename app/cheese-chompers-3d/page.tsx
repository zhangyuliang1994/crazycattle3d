import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { cheeseChompersContent } from "./content";

export const metadata: Metadata = {
  title: `Cheese Chompers 3D | Free Online Game | ${siteConfig.domain}`,
  description: "Play Cheese Chompers 3D unblocked online for free! Control a hungry mouse in this fun 3D action game. No download needed – start playing instantly in browser!",
  openGraph: {
    title: `Cheese Chompers 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Cheese Chompers 3D - a free physics-based action game right in your browser. No downloads required.",
  },
  alternates: {
    canonical: `/cheese-chompers-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Cheese Chompers 3D",
    description: "Play Cheese Chompers 3D - a free physics-based action game right in your browser. No downloads required.",
    url: "/cheese-chompers-3d"
  },
  content: cheeseChompersContent
};

export default function CheeseChompers3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}




