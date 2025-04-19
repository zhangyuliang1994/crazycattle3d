'use client';

import { useState, useRef } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
import { content } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";

export function GameSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title,
          theme.gameSection.spacing.title
        )}>
          {content.gameSection.title}
        </h2>
      )}
      <div
        ref={containerRef}
        className={cn(
          theme.gameSection.layout.container,
          theme.gameSection.colors.container,
          theme.gameSection.spacing.container
        )}
      >
        <iframe
          src={content.gameSection.game.url}
          className={theme.gameSection.layout.iframe}
          allow="fullscreen"
          title={content.gameSection.game.title}
          loading="lazy"
        />
        <button
          onClick={toggleFullscreen}
          className={cn(
            theme.gameSection.layout.fullscreenButton,
            theme.gameSection.colors.fullscreenButton
          )}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          {isFullscreen ? (
            <Minimize2 className="w-5 h-5" />
          ) : (
            <Maximize2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </section>
  );
}




