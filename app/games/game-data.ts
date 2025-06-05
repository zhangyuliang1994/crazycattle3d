export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "super-farm-adventure": {
    id: "super-farm-adventure",
    title: "Super Farm Adventure",
    description: "终极免费在线3D农场模拟游戏，拥有创新的农场管理系统。管理您的虚拟农场，体验农业乐趣！",
    image: "/assets/crazycattle3d-howto.jpg",
    url: "/",
  },
  "farm-story-3d": {
    id: "farm-story-3d",
    title: "农场物语3D",
    description: "体验令人难以置信的农场乐趣与农场物语3D的管理引擎！种植作物并发现有趣的农场互动。",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/farm-story-3d",
  },
  "happy-ranch": {
    id: "happy-ranch",
    title: "快乐牧场",
    description: "一款有趣的免费在线牧场管理游戏！管理可爱的动物，在混乱的牧场中战斗，成为最后的牧场王！",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/happy-ranch",
  },
  "countryside-life": {
    id: "countryside-life",
    title: "田园生活",
    description: "深入田园生活！在这款令人上瘾的在线模拟游戏中体验乡村疯狂。即时游玩，无需下载！",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/countryside-life",
  },
  "agriculture-tycoon": {
    id: "agriculture-tycoon",
    title: "农业大亨",
    description: "体验令人兴奋的农业经营，拥有独特的经营模式。免费在线游玩，无需下载！",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/agriculture-tycoon",
  },
  "eco-farm": {
    id: "eco-farm",
    title: "生态农场",
    description: "游玩这款增强的生态农场模拟器，拥有新功能、作物品种和具有挑战性的游戏玩法。",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/eco-farm",
  },
  "future-farming": {
    id: "future-farming",
    title: "未来农业",
    description: "体验未来农业的物理引擎带来的难以预测的乐趣！在这款搞笑的科技农场游戏中控制高科技农场。",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/future-farming",
  },
  "magic-farm": {
    id: "magic-farm",
    title: "魔法农场",
    description: "与可爱的角色一起在这款有趣的互动魔法游戏中创造神奇的农场体验。拖放来创造魔法！",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/magic-farm",
  },
  "virtual-garden": {
    id: "virtual-garden",
    title: "虚拟花园",
    description: "经典虚拟花园游戏！控制可爱的植物角色作为园丁，在这个有趣且令人上瘾的园艺体验中测试您的种植技能。",
    image: "/assets/img/android-chrome-512x512.png",
    url: "/virtual-garden",
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



