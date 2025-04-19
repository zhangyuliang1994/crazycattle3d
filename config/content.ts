export const content = {
  header: {
    title: "Blossom Games",
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Home", href: "/" },
        // 可以轻松添加更多导航链接
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: "Play Crazy Cattle 3D - a free physics-based battle game right in your browser. No downloads required.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Blue Prince Guide", href: "https://blue-prince.net" },
        { text: "AI Image Generator", href: "https://aiimage.pics" },
      ]
    },
    social: {
      title: "Share",  // 改为 Share 而不是 Follow Us
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent('Crazy Cattle 3D')}&u=${encodeURIComponent('https://crazycattle.cc')}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent('Crazy Cattle 3D')}&url=${encodeURIComponent('https://crazycattle.cc')}&hashtags=BlossomGame,PuzzleGames`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Blossom Games. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate CrazyCattle3D",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 146
  },
  howToPlay: {
    title: "How to Play Crazy Cattle 3D - Game Controls & Guide",
    description: "Playing Crazy Cattle 3D online is easy: Use WASD keys for movement and mouse for precise sheep steering in this free browser game. The space bar triggers your special collision ability in Crazy Cattle 3D - master the timing for devastating impacts. Perfect your control over the sheep's momentum as you navigate through the 3D battle arena.\n\n" +
      "Success in Crazy Cattle 3D multiplayer battles depends on mastering the physics-based momentum system. Strategically build speed by moving downhill in the 3D arena, then unleash powerful attacks or execute quick escapes. Crazy Cattle 3D's unique collision mechanics reward skillful timing - precisely angled hits send opponents flying off the map, while mistimed attacks leave your sheep exposed.\n\n" +
      "Win more Crazy Cattle 3D matches by starting defensively - focus on survival and strategic positioning in the 3D battlefield. Study each arena's layout to discover prime attack positions and danger zones. After defeats in Crazy Cattle 3D, spectate top players to learn pro techniques - analyze their movement patterns and collision strategies. Keep practicing this free online physics game, and you'll soon master the art of sheep combat!",
    image: "/assets/crazycattle3d-howto.jpg",
    imageAlt: "Crazy Cattle 3D Game Guide - Controls, Physics, and Strategy Tutorial"
  },
  whatIs: {
    title: "Crazy Cattle 3D: Free Online Battle Game",
    description: "Crazy Cattle 3D is an exciting physics-based battle game you can play right in your browser. Control your character through dynamic environments, master momentum-based movement, and compete to be the last one standing. No downloads needed - just pure entertainment with simple controls but challenging gameplay. Perfect for quick gaming sessions on any device with a modern browser.",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Blossom Games"
    },
    links: [
      {
        text: "How to Play",
        href: "#how-to-play",
        icon: "GamepadIcon"
      },
      {
        text: "FAQ",
        href: "#faq",
        icon: "HelpCircleIcon"
      },
      {
        text: "About",
        href: "#footer-about",
        icon: "InfoIcon"
      }
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        value: "new-player",
        question: "How difficult is Crazy Cattle 3D for new players?",
        answer: "Crazy Cattle 3D is designed with an intuitive physics-based control system that's easy to grasp but challenging to master. The game starts with basic movement mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques. Our tutorial mode helps you understand momentum-based gameplay, and the forgiving respawn system encourages experimentation without frustration."
      },
      {
        value: "technical-requirements",
        question: "What are the technical requirements for smooth Crazy Cattle 3D gameplay?",
        answer: "For the best Crazy Cattle 3D experience, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game's physics engine is optimized to run smoothly on most devices, but for best performance, ensure your device has at least 4GB RAM and updated graphics drivers. If you experience any slowdown, try adjusting the quality settings in the game menu."
      },
      {
        value: "game-modes",
        question: "What game modes are available in Crazy Cattle 3D?",
        answer: "Crazy Cattle 3D currently features an exciting single-player arena mode where you compete against intelligent AI opponents. Each match offers a unique experience thanks to our dynamic physics system and varied arena layouts. Practice mode lets you perfect your skills without pressure, while Challenge mode puts your abilities to the test with increasingly difficult scenarios and objectives."
      },
      {
        value: "comfort-settings",
        question: "How can I adjust Crazy Cattle 3D for a more comfortable gaming experience?",
        answer: "Crazy Cattle 3D includes several comfort options to enhance your gaming experience. You can adjust camera sensitivity, enable smooth camera transitions, and customize control responsiveness. We recommend starting with default settings and gradually adjusting them to match your play style. The game also features visual indicators for better spatial awareness during intense physics-based battles."
      },
      {
        value: "winning-tactics",
        question: "What tactics help secure victories in Crazy Cattle 3D?",
        answer: "Mastering Crazy Cattle 3D requires understanding of momentum and timing. Start by learning the arena layouts and identifying high-ground advantages. Use the environment to build speed, and practice the signature 'bounce boost' technique for quick escapes. Advanced players can master the 'precision impact' strategy, where carefully timed collisions can send opponents off balance. Remember, strategic positioning often matters more than aggressive charging."
      }
    ]
  },
  gameSection: {
    title: "Crazy Cattle 3D",
    game: {
      url: "https://crazycattle3d.io/crazy-cattle-3d.embed",
      title: "crazycattle3d"
    }
  },
  otherGames: {
    title: "Play Other Games",
    cardLabels: {
      playButton: "Play Now",
      imageAlt: (title: string) => `${title} game preview`
    }
  }
} as const;








