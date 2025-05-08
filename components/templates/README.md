# 游戏页面模板组件

本目录包含网站的游戏页面模板组件，用于创建统一风格的游戏内页。这些模板组件封装了游戏页面的通用结构和布局，使添加新游戏变得简单高效。

## 主要组件

### GamePageTemplate

`GamePageTemplate.tsx` 是主要的游戏页面模板组件，它提供了一个完整的游戏页面结构，包括：

- 页面头部 (Header)
- 游戏嵌入区域 (GameSection)
- 游戏特性展示 (Features)
- 游戏介绍 (WhatIs)
- 游戏玩法说明 (HowToPlay)
- 常见问题解答 (FAQ)
- 其他游戏推荐 (OtherGames)
- 页面底部 (Footer)
- 结构化数据 (JSON-LD)

## 组件接口

```typescript
interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;       // 游戏标题
      description: string; // 游戏描述
      url: string;         // 游戏页面URL路径
    };
    content: any;          // 游戏内容配置
  };
}
```

## 如何添加新游戏页面

添加新游戏页面需要完成以下步骤：

### 1. 创建游戏配置文件

在 `app/games` 目录下创建新游戏的配置文件，例如 `new-game-config.ts`：

```typescript
export const newGameConfig = {
  metadata: {
    title: "新游戏名称",
    description: "新游戏的简短描述，用于SEO和社交分享",
    url: "/games/new-game",
  },
  content: {
    // 游戏区域配置
    gameSection: {
      title: "新游戏名称",
      game: {
        url: '/new-game.embed',  // 这里使用 rewrite 规则中定义的路径
        title: "新游戏名称",
        externalUrl: '/game/new-game/index.html'  // 指向本地 iframe 包装页
      }
    },
    
    // 特性区域配置
    features: {
      title: "游戏特性",
      items: [
        {
          title: "特性1",
          description: "特性1的详细描述",
          icon: "icon-name", // 使用的图标名称
        },
        // 添加更多特性...
      ],
    },
    
    // 游戏介绍区域配置
    whatIs: {
      title: "什么是新游戏？",
      description: "详细介绍游戏的背景、故事和概念",
      image: "/assets/games/new-game/intro.jpg",
    },
    
    // 游戏玩法区域配置
    howToPlay: {
      title: "如何玩新游戏",
      description: "详细的游戏玩法说明",
      image: "/assets/games/new-game/gameplay.jpg",
      steps: [
        {
          title: "步骤1",
          description: "步骤1的详细说明",
        },
        // 添加更多步骤...
      ],
    },
    
    // 常见问题区域配置
    faq: {
      title: "常见问题",
      items: [
        {
          question: "问题1？",
          answer: "问题1的回答",
        },
        // 添加更多问题...
      ],
    },
  },
};
```

### 2. 更新游戏数据索引

在 `app/games/game-data.ts` 文件中导入并添加新游戏配置：

```typescript
import { newGameConfig } from './new-game-config';

// 添加到 allGames 数组
export const allGames = [
  // 现有游戏...
  {
    id: "new-game",
    title: newGameConfig.metadata.title,
    description: newGameConfig.metadata.description,
    url: newGameConfig.metadata.url,
    image: "/assets/games/new-game/thumbnail.jpg",
  },
];

// 更新 getOtherGames 函数以包含新游戏
```

### 3. 创建游戏页面

在 `app/games/new-game` 目录下创建 `page.tsx` 文件：

```typescript
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { newGameConfig } from "@/app/games/new-game-config";
import { Metadata } from "next";

// 导出元数据用于SEO
export const metadata: Metadata = {
  title: newGameConfig.metadata.title,
  description: newGameConfig.metadata.description,
  openGraph: {
    title: newGameConfig.metadata.title,
    description: newGameConfig.metadata.description,
    url: `https://crazy-cattle.net${newGameConfig.metadata.url}`,
    images: [
      {
        url: "https://crazy-cattle.net/assets/games/new-game/og-image.jpg",
        width: 1200,
        height: 630,
        alt: newGameConfig.metadata.title,
      },
    ],
  },
};

export default function NewGamePage() {
  return <GamePageTemplate gameConfig={newGameConfig} />;
}
```

### 4. 准备游戏资源

#### 4.1 引用外部游戏（iframe 方式）

如果您只是引用其他站点的游戏，而不是托管游戏文件，请按照以下步骤操作：

1. **创建 iframe 包装页**：
   
   在 `public/game/new-game/` 目录下创建 `index.html` 文件：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <base href="/game/new-game/">
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
       <title>新游戏名称</title>
       <meta name="robots" content="noindex">
       <style>
           html, body {
               margin: 0;
               padding: 0;
               border: 0;
               width: 100%;
               height: 100%;
               overflow: hidden;
           }
           
           iframe {
               width: 100%;
               height: 100%;
               border: none;
               display: block;
           }
       </style>
   </head>
   <body>
       <iframe 
           id="game-frame" 
           src="https://example.com/games/game-path/"
           allowfullscreen="true"
           allow="autoplay; fullscreen; gamepad; keyboard-map; xr-spatial-tracking"
           title="新游戏名称">
       </iframe>
   </body>
   </html>
   ```

   注意替换 `https://example.com/games/game-path/` 为实际的游戏 URL。

2. **添加 Next.js 重写规则**：

   在 `next.config.js` 文件中添加重写规则：

   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // 其他配置...
     async rewrites() {
       return [
         // 现有重写规则...
         {
           source: '/new-game.embed',
           destination: '/game/new-game/index.html',
         },
       ]
     }
   };

   module.exports = nextConfig;
   ```

3. **准备游戏页面图片资源**：

   在 `public/assets/games/new-game/` 目录下放置以下图片：
   - `thumbnail.jpg` - 游戏缩略图 (建议尺寸: 300x200px)
   - `og-image.jpg` - 社交分享图片 (建议尺寸: 1200x630px)
   - `intro.jpg` - 游戏介绍图片 (建议尺寸: 600x400px)
   - `gameplay.jpg` - 游戏玩法图片 (建议尺寸: 600x400px)

#### 4.2 托管完整游戏文件（可选）

如果您需要托管完整的游戏文件（例如从第三方游戏站点下载），请参考 `IFRAME_DOWNLOAD_README.md` 文件中的详细指南。这通常包括：

1. 使用浏览器开发者工具或 wget 下载游戏文件
2. 保持原始目录结构放置在 `public/game/new-game/` 目录下
3. 修改游戏文件中的路径引用，确保资源正确加载

### 5. 更新导航菜单（可选）

如果需要在导航菜单中添加新游戏链接，更新 `components/layout/Header.tsx` 文件。

### 6. 更新 AI 爬虫文件（可选）

在 `public/llms.txt` 和 `public/llms-full.txt` 文件中添加新游戏的信息。

## 自定义游戏页面

如果需要为特定游戏创建自定义布局，可以：

1. 创建新的模板组件，例如 `SpecialGameTemplate.tsx`
2. 在游戏页面中使用新模板而不是通用模板

## 最佳实践

1. **保持一致性**：尽量使用通用模板，保持网站风格一致
2. **优化图片**：确保所有图片都经过压缩，以提高页面加载速度
3. **测试响应式**：在不同设备上测试游戏页面的显示效果
4. **SEO优化**：为每个游戏页面提供完整的元数据
5. **结构化数据**：确保 JSON-LD 结构化数据正确配置，以提高搜索引擎可见性

## 故障排除

如果游戏页面显示不正确，请检查：

1. 游戏配置文件是否正确格式化
2. 所有引用的资源文件是否存在
3. iframe URL 是否正确指向游戏文件
4. 页面路由是否与配置中的 URL 一致
5. Next.js 重写规则是否正确配置

## 示例

查看 `app/games/crazy-cow-3d` 目录下的文件，了解完整的游戏页面实现示例。
