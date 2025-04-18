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
      description: "Your premier destination for free online gaming entertainment. Play instantly, anywhere, anytime.",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Love Tester", href: "/games/love-tester" },
        { text: "Bubble Shooter", href: "/games/bubble-shooter" },
        { text: "Candy Match", href: "/games/candy-match" }
      ]
    },
    social: {
      title: "Share",  // 改为 Share 而不是 Follow Us
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent('Blossom Game - Free Online Puzzle Adventure')}&u=${encodeURIComponent('https://blossom-game.com')}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent('🌸 Playing Blossom - the most beautiful puzzle game online! No downloads needed, just pure entertainment. Join me at')}&url=${encodeURIComponent('https://blossom-game.com')}&hashtags=BlossomGame,PuzzleGames`
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
    title: "Rate Blossom Games",
    votes: "votes",
    initialRating: 4.8,
    initialVotes: 15545
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
    title: "FAQ",
    items: [
      {
        value: "item-1",
        question: "Are all games really free to play?",
        answer: "Yes! All games on Blossom Games are 100% free to play. We believe in providing entertainment without any cost to our players."
      },
      {
        value: "item-2",
        question: "Do I need to create an account?",
        answer: "No account is needed! Just visit our website and start playing instantly. We keep it simple and hassle-free."
      },
      {
        value: "item-3",
        question: "Which devices are supported?",
        answer: "Our games work on all modern devices including smartphones, tablets, laptops, and desktop computers. Just make sure you have an updated browser."
      },
      {
        value: "item-4",
        question: "How often are new games added?",
        answer: "We regularly update our collection with new games. Check back often to discover fresh entertainment!"
      },
      {
        value: "item-5",
        question: "What if a game isn't loading?",
        answer: "Try refreshing your browser, clearing cache, or using a different browser. If issues persist, contact us through our social media channels."
      }
    ]
  },
  gameSection: {
    title: "Crazy Cattle 3D",
    game: {
      url: "https://crazy-cattle3d.org/game/crazycattle3d/",
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






