"use client";

import { useState } from "react";
import HomeTemplate from "./home/page";
import { getOtherGames } from "./games/game-data";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const game = getOtherGames().find(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (game) {
      const element = document.getElementById("other-games");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HomeTemplate 
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSearch={handleSearch}
      activeGame={activeGame}
      onGameSelect={setActiveGame}
    />
  );
}


