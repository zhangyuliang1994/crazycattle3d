import { content as globalContent } from "@/config/content";

export const crazyCowContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Crazy Cow 3D",
    game: {
      url: '/crazy-cow-3d.embed',
      title: "crazycow3d",
      externalUrl: '/game/crazycow3d/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Features of Crazy Cattle 3D Online Game",
    items: [
      {
        title: "Advanced Physics Engine",
        description: "Crazy Cow 3D introduces a groundbreaking physics engine specifically designed for authentic cattle movement. Every animal responds realistically to environmental factors, creating dynamic and unpredictable gameplay moments. The physics system in Crazy Cow 3D ensures precise collision detection, allowing players to execute tactical maneuvers like momentum-based attacks and strategic dodges. Whether you're performing a calculated aerial assault or narrowly escaping elimination, our physics engine delivers consistently engaging combat scenarios."
      },
      {
        title: "Global Battle Environments",
        description: "Explore Crazy Cow 3D's three meticulously crafted battle arenas: Ireland's rolling hills perfect for building momentum and executing aerial strikes, Iceland's treacherous volcanic terrain offering tactical hazard zones, and New Zealand's mountainous landscape enabling vertical combat strategies. Each environment in Crazy Cow 3D features carefully balanced power-up locations and strategic choke points. The diverse landscapes of Crazy Cow 3D fundamentally change how you approach combat and survival, ensuring every match brings fresh tactical challenges."
      },
      {
        title: "Pure Skill-Based Combat",
        description: "Crazy Cow 3D sets itself apart with a pure skill-based progression system - no paid advantages, just pure tactical gameplay. Master the physics-based combat where perfectly timed collisions send opponents flying off the map. Our carefully tuned difficulty curve ensures new players can learn the basics while veterans discover advanced techniques. The competitive spirit of Crazy Cow 3D shines through as top players showcase incredible movement mastery and strategic thinking."
      },
      {
        title: "Battle Royale Innovation",
        description: "Experience Crazy Cow 3D's unique take on the battle royale format, where physics-based combat meets strategic gameplay. Each 30-minute match features a dynamically shrinking arena that forces tactical confrontations. The streamlined gameplay loop makes Crazy Cow 3D easy to understand but challenging to master, delivering consistent excitement from start to finish. Rise through the ranks based purely on your skill and strategic prowess."
      }
    ]
  },

  // What Is section configuration
  whatIs: {
    title: "Everything about Crazy Cow 3D",
    description: "Crazy Cow 3D is an independently developed battle royale game where players control explosive cows across varied terrain. Unlike traditional battle royales, we focus on physics-based gameplay with momentum and collision mechanics rather than weapon collection.\n\n" +
      "Master the art of cow locomotion across three distinct environments: the rolling hills of Ireland, volcanic Iceland, and mountainous New Zealand. Each map offers unique strategic opportunities, creating a chaotic yet strategic 30-minute battle experience.\n\n" +
      "While the game's high difficulty level may challenge newcomers, mastering our unique physics system delivers a deeply satisfying experience. Play directly in your browser - no downloads needed, just pure explosive cow action that keeps you coming back for more.",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Crazy Cow 3D Logo"
    }
  },

  // How To Play section configuration
  howToPlay: {
    title: "How to Play Crazy Cow 3D - Game Controls & Guide",
    description: "Playing Crazy Cow 3D online is easy: Use WASD keys for movement and mouse for precise cow steering in this free browser game. The space bar triggers your special collision ability in Crazy Cow 3D - master the timing for devastating impacts. Perfect your control over the cow's momentum as you navigate through the 3D battle arena.\n\n" +
      "Success in Crazy Cow 3D multiplayer battles depends on mastering the physics-based momentum system. Strategically build speed by moving downhill in the 3D arena, then unleash powerful attacks or execute quick escapes. Crazy Cow 3D's unique collision mechanics reward skillful timing - precisely angled hits send opponents flying off the map, while mistimed attacks leave your cow exposed.\n\n" +
      "Win more Crazy Cow 3D matches by starting defensively - focus on survival and strategic positioning in the 3D battlefield. Study each arena's layout to discover prime attack positions and danger zones. After defeats in Crazy Cow 3D, spectate top players to learn pro techniques - analyze their movement patterns and collision strategies. Keep practicing this free online physics game, and you'll soon master the art of cow combat!",
    image: "/assets/crazy-cow-3d/crazy-cow-3d.png",
    imageAlt: "Crazy Cow 3D Game Guide - Controls, Physics, and Strategy Tutorial"
  },

  // FAQ section configuration
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        value: "new-player",
        question: "How difficult is Crazy Cow 3D for new players?",
        answer: "Crazy Cow 3D is designed with an intuitive physics-based control system that's easy to grasp but challenging to master. The game starts with basic movement mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques. Our tutorial mode helps you understand momentum-based gameplay, and the forgiving respawn system encourages experimentation without frustration."
      },
      {
        value: "technical-requirements",
        question: "What are the technical requirements for smooth Crazy Cow 3D gameplay?",
        answer: "For the best Crazy Cow 3D experience, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game's physics engine is optimized to run smoothly on most devices, but for best performance, ensure your device has at least 4GB RAM and updated graphics drivers. If you experience any slowdown, try adjusting the quality settings in the game menu."
      },
      {
        value: "game-modes",
        question: "What game modes are available in Crazy Cow 3D?",
        answer: "Crazy Cow 3D currently features an exciting single-player arena mode where you compete against intelligent AI opponents. Each match offers a unique experience thanks to our dynamic physics system and varied arena layouts. Practice mode lets you perfect your skills without pressure, while Challenge mode puts your abilities to the test with increasingly difficult scenarios and objectives."
      },
      {
        value: "comfort-settings",
        question: "How can I adjust Crazy Cow 3D for a more comfortable gaming experience?",
        answer: "Crazy Cow 3D includes several comfort options to enhance your gaming experience. You can adjust camera sensitivity, enable smooth camera transitions, and customize control responsiveness. We recommend starting with default settings and gradually adjusting them to match your play style. The game also features visual indicators for better spatial awareness during intense physics-based battles."
      },
      {
        value: "winning-tactics",
        question: "What tactics help secure victories in Crazy Cow 3D?",
        answer: "Mastering Crazy Cow 3D requires understanding of momentum and timing. Start by learning the arena layouts and identifying high-ground advantages. Use the environment to build speed, and practice the signature 'bounce boost' technique for quick escapes. Advanced players can master the 'precision impact' strategy, where carefully timed collisions can send opponents off balance. Remember, strategic positioning often matters more than aggressive charging."
      }
    ]
  }
};
