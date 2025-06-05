import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite farm game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Game", href: "#game-section" },
        { text: "Hot Games", href: "#other-games" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Experience ${siteConfig.name} - a free farming simulation game right in your browser. No downloads required.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Game Help", href: "#help" },
        { text: "Community", href: "#community" },
        { text: "Tutorials", href: "#tutorial" },
        { text: "Achievements", href: "#achievements" },
        { text: "Leaderboard", href: "#leaderboard" },
        { text: "Updates", href: "#updates" },
        { text: "Dev Blog", href: "#blog" },
        { text: "Partners", href: "#partners" },
        { text: "Media", href: "#media" },
      ]
    },
    games: {
      title: "Related Games",
      links: [
        { text: "Super Farm Adventure", href: "/" },
        { text: "Farm Story 3D", href: "/farm-story-3d" },
        { text: "Happy Ranch", href: "/happy-ranch" },
        { text: "Countryside Life", href: "/countryside-life" },
        { text: "Agriculture Tycoon", href: "/agriculture-tycoon" },
        { text: "Eco Farm", href: "/eco-farm" },
        { text: "Future Farming", href: "/future-farming" },
        { text: "Magic Farm", href: "/magic-farm" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `#share-facebook`
        },
        {
          icon: "Twitter",
          href: `#share-twitter`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Super Farm Adventure. All rights reserved.",
      subText: "All games on this platform are free to play and do not require downloads."
    }
  },
  rating: {
    title: "Rate Super Farm Adventure",
    votes: "votes",
    initialRating: 4.9,
    initialVotes: 234
  },
  gameSection: {
    title: "Super Farm Adventure",
    game: {
      url: '/game/crazycattle3d/index.html',
      title: "superfarmadventure",
      externalUrl: '/game/crazycattle3d/index.html'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Super Farm Adventure Online Free - Game Controls & Guide",
    description: "Playing Super Farm Adventure online is easy: Use WASD keys for movement and mouse for precise farm management. The space bar triggers special actions to help improve your farm efficiency. Master farming techniques to become a top farmer in this 3D farming world.\n\n" +
      "Success in Super Farm Adventure multiplayer mode requires mastering the resource management system. Strategically plan your crop planting and use effective resource allocation to maximize profits. The game's unique management mechanics reward skillful decision-making - properly timing planting and harvesting strategies to optimize your farm layout.\n\n" +
      "Win more in Super Farm Adventure by starting defensively - focus on stable development and strategic positioning. Study each farm area's characteristics to discover prime planting locations. After setbacks, observe top players to learn professional techniques. Keep practicing this free online farming game, and you'll soon master the art of farm management!",
    image: "/assets/crazycattle3d-howto.jpg",
    imageAlt: "Super Farm Adventure Game Guide - Play Online Free, Controls, Management and Strategy Tutorial"
  },
  whatIs: {
    title: "About Super Farm Adventure - Free Online Farming Game",
    description: "Super Farm Adventure is an independently developed free online farming simulation game where players manage virtual farms in diverse environments. You can play this game online anytime. Unlike traditional farming games, we focus on innovative farm management mechanics and strategic resource allocation.\n\n" +
      "Master the art of farm management across three distinct environments in this exciting online game: rolling green pastures, high-tech greenhouse zones, and mountain farming areas. Each map offers unique strategic opportunities, creating a challenging yet strategic farming experience.\n\n" +
      "While the game's high difficulty level may challenge newcomers, mastering our unique farming system delivers a deeply satisfying experience. Play this free online game directly in your browser - no downloads needed, just pure farming fun that keeps you coming back for more.",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Super Farm Adventure - Free Online Farming Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Super Farm Adventure Online Game",
    items: [
      {
        value: "where-to-play-original",
        question: "Where can I find and play the original Super Farm Adventure online?",
        answer: "You can find the original Super Farm Adventure game on our official website. The game supports direct browser play on Windows, Mac, Linux, and other web-supported environments."
      },
      {
        value: "play-on-mobile",
        question: "Can I play Super Farm Adventure online on my mobile device?",
        answer: "Yes, since Super Farm Adventure is web-based, you can typically play this free online game on mobile devices (phones and tablets) that support modern web browsers."
      },
      {
        value: "creator-info",
        question: "Who is the creator of Super Farm Adventure?",
        answer: "Super Farm Adventure is crafted by our independent development team. We focus on creating fun and challenging farming simulation experiences. Many players enjoy playing this free online game, appreciating its unique farming mechanics and fun!"
      },
      {
        value: "game-rating",
        question: "What is the rating for Super Farm Adventure online game?",
        answer: "Super Farm Adventure is widely regarded as a fun, challenging, and engaging free online farming game. You can find player opinions and community feedback on the sites where you play the game."
      },
      {
        value: "new-player-difficulty",
        question: "How difficult is Super Farm Adventure online game for new players?",
        answer: "Super Farm Adventure is designed with an intuitive farm management control system that's easy to grasp but requires skill to master. The game starts with basic farming mechanics, allowing new players to enjoy immediate action while gradually discovering advanced techniques."
      },
      {
        value: "technical-requirements-online",
        question: "What are the technical requirements to play Super Farm Adventure online smoothly?",
        answer: "For the best Super Farm Adventure free online gaming experience, we recommend using a modern browser (Chrome, Firefox, or Edge) and a stable internet connection. The game's farming engine is optimized to run smoothly on most devices."
      },
      {
        value: "available-game-modes",
        question: "What game modes are available when playing Super Farm Adventure online?",
        answer: "Super Farm Adventure currently features an exciting single-player farm mode where you can compete with AI farms. Practice mode lets you perfect your skills without pressure, while Challenge mode tests your abilities with increasingly difficult scenarios and objectives."
      },
      {
        value: "comfort-settings-online-game",
        question: "How can I adjust Super Farm Adventure for a more comfortable online gaming experience?",
        answer: "Super Farm Adventure includes several comfort options to enhance your free online game experience. You can adjust camera sensitivity, enable smooth camera transitions, and customize control responsiveness. We recommend starting with default settings and gradually adjusting to match your playstyle."
      },
      {
        value: "winning-tactics-game",
        question: "What tactics help secure success when I play Super Farm Adventure?",
        answer: "Mastering Super Farm Adventure online requires understanding resource management and timing. Start by learning farm layouts and identifying optimal planting locations. Use the environment to optimize crop yields and practice the signature 'quick harvest' technique. Remember, strategic planning often matters more than aggressive expansion in this free game."
      }
    ]
  },
  features: {
    title: "Revolutionary Features of Super Farm Adventure - Free Online Farming Game",
    items: [
      {
        title: "Advanced Farming Engine",
        description: "Super Farm Adventure introduces a breakthrough farming engine specifically designed for realistic farm management. Every crop responds realistically to environmental factors, creating dynamic and unpredictable gameplay moments when you play this free game. Super Farm Adventure's farming system ensures precise resource detection, allowing players to execute tactical operations like strategy-based planting and strategic harvesting."
      },
      {
        title: "Global Farm Environments",
        description: "Explore Super Farm Adventure's meticulously crafted three farming zones: rolling green pastures perfect for establishing momentum and executing planting strategies; greenhouse zones with high-tech agricultural terrain offering tactical growing areas; and mountain farming landscapes enabling vertical agriculture strategies. Each environment in this online game features carefully balanced resource locations and strategic points."
      },
      {
        title: "Pure Skill-Based Farm Management",
        description: "Super Farm Adventure stands out with a pure skill-based progression system - no paid advantages, just pure tactical gameplay when you play Super Farm Adventure online free. Master farm-based management where perfect timing can double your farm's yield. Our carefully tuned difficulty curve ensures new players can learn the basics while veterans discover advanced techniques."
      },
      {
        title: "Innovative Farming System",
        description: "Experience Super Farm Adventure's unique take on farming simulation, where resource management meets strategic gameplay. Each 30-minute session features a dynamically changing farm environment requiring tactical resource allocation. The streamlined gameplay loop makes Super Farm Adventure easy to understand but challenging to master, delivering consistent excitement from start to finish in this free online game. Rise through the ranks based purely on your skill and strategic prowess."
      }
    ]
  }
} as const;


