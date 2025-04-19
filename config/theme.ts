export const theme = {
  header: {
    colors: {
      // 更新背景样式，添加渐变和磨砂玻璃效果
      background: "bg-gradient-to-b from-background/98 to-background/90",
      // 更新边框使其更微妙
      border: "border-b border-border/40",
      text: "text-foreground",
      hover: "hover:text-primary",
    },
    layout: {
      height: "h-16",
      position: "sticky top-0",
      zIndex: "z-50",
      // 增强磨砂玻璃效果，添加阴影
      blur: "backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm",
      logo: {
        wrapper: "flex items-center gap-4",
        image: "object-contain",
      },
      nav: {
        wrapper: "flex items-center gap-6 mr-4",
        list: "hidden md:flex items-center space-x-8",
      }
    },
    spacing: {
      container: "container",
      nav: "space-x-4 lg:space-x-6",
      search: "space-x-2",
    },
  },
  footer: {
    colors: {
      background: "bg-muted",
      border: "border-t",
      text: "text-foreground",
      mutedText: "text-muted-foreground",
      hover: "hover:text-primary",
    },
    layout: {
      padding: "py-8",
      container: "container mx-auto px-4",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    },
    spacing: {
      sectionTitle: "mb-4",
      linkList: "space-y-2",
    },
  },
  layout: {
    section: {
      spacing: "mb-24" // 使用更大的间距 mb-24 (6rem) 替代原来的 mb-16 (4rem)
    }
  },
  howToPlay: {
    colors: {
      title: "text-foreground",
      description: "text-muted-foreground"
    },
    layout: {
      container: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
      content: "prose prose-neutral dark:prose-invert max-w-none",
      imageContainer: "rounded-lg overflow-hidden"
    },
    spacing: {
      section: "py-12",
      title: "mb-8"
    }
  },
  whatIs: {
    colors: {
      card: "bg-card",
      title: "text-foreground",
      description: "text-muted-foreground",
      link: "text-primary hover:underline"
    },
    layout: {
      container: "container",
      card: "rounded-lg shadow-lg",
      logo: "object-contain",
      logoWrapper: "flex justify-center"
    },
    spacing: {
      section: "mb-16",
      card: "p-8",
      title: "mb-4",
      description: "mb-6",
      links: "gap-6"
    },
    typography: {
      title: "text-3xl font-bold",
      description: "text-lg",
      link: "font-semibold"
    }
  },
  faq: {
    spacing: {
      section: "mb-16",
      title: "mb-8"
    },
    typography: {
      title: "text-3xl font-bold text-center"
    },
    layout: {
      accordion: "w-full"
    }
  },
  gameSection: {
    colors: {
      container: "bg-card",
      fullscreenButton: "bg-black/20 hover:bg-black/40 text-white"
    },
    layout: {
      section: "text-center",
      container: "aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl relative",
      iframe: "w-full h-full border-0",
      fullscreenButton: "absolute top-2 right-2 p-2 rounded-lg transition-colors"
    },
    spacing: {
      section: "mb-16",
      title: "mb-8",
      container: "mb-16"
    },
    typography: {
      title: "text-4xl font-bold"
    }
  },
  otherGames: {
    layout: {
      section: "mb-16",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      card: "overflow-hidden hover:shadow-lg transition-shadow",
      image: "w-full h-48 object-cover"
    },
    spacing: {
      title: "mb-8",
      cardTitle: "mb-2",
      cardDescription: "mb-4"
    },
    typography: {
      title: "text-3xl font-bold text-center",
      cardTitle: "text-xl"
    }
  }
} as const;







