export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "crazy-cattle-3d": {
    id: "crazy-cattle-3d",
    title: "Crazy Cattle 3D",
    description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
    image: "/assets/crazycattle3d-howto.jpg",
    url: "/",
  },
  "crazy-cow-3d": {
    id: "crazy-cow-3d",
    title: "Crazy Cow 3D",
    description: "Experience unpredictable fun with Crazy Cow 3D's physics engine! Send objects flying and discover comical interactions.",
    image: "/assets/crazy-cow-3d/crazy-cow-3d.png",
    url: "/crazy-cow-3d",
  },
  "cheese-chompers-3d": {
    id: "cheese-chompers-3d",
    title: "Cheese Chompers 3D",
    description: "A hilarious free online knockout game! Control a goofy rat and battle it out in a chaotic arena to be the last rat standing.",
    image: "/assets/cheese-chompers-3d/cheese-chompers-3d.png",
    url: "/cheese-chompers-3d",
  },
  "brainrot-clicker": {
    id: "brainrot-clicker",
    title: "Italian Brainrot Clicker",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/brainrot-clicker/brainrot-clicker.jpg",
    url: "/brainrot-clicker",
  },
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}
