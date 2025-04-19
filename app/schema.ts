export const generateGameSchema = (game: {
  title: string;
  description: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.description,
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game",
    "gamePlatform": ["Web Browser"],
    "url": `https://crazy-cattle.net${game.url}`,
    "inLanguage": "en",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Crazy Cattle 3D",
  "description": "Free online games to play instantly without download.",
  "url": "https://crazy-cattle.net",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://crazy-cattle.net/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

import { content } from "@/config/content";

export const howToPlaySchema = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": content.howToPlay.title,
  "url": "https://crazy-cattle.net",
  "inLanguage": "en",
  "image": {
    "@type": "ImageObject",
    "url": content.howToPlay.image
  },
  "step": [{
    "@type": "HowToStep",
    "position": "1",
    "name": content.howToPlay.title,
    "text": content.howToPlay.description,
    "image": content.howToPlay.image
  }]
};

export const generateRatingSchema = (rating: number, votes: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Crazy Cattle 3D",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "ratingCount": votes,
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
};


