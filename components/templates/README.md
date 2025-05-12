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

## 如何添加新游戏页面 (基于实际操作流程更新)

以下步骤详细说明了如何向网站添加一个新游戏，以确保所有相关部分都得到正确配置。请将 `[GAME_SLUG]` (例如 `basketball-bros-unblocked`)、`[GAME_NAME]` (例如 "Basketball Bros Unblocked") 等占位符替换为实际游戏的信息。所有面向用户的文本内容应为英文。

### 1. 创建游戏页面和内容文件

#### 1.1 创建游戏目录
在 `app/` 目录下为新游戏创建一个单独的文件夹：
`app/[GAME_SLUG]/`

#### 1.2 创建页面文件 (`page.tsx`)
在 `app/[GAME_SLUG]/` 目录下创建 `page.tsx` 文件，内容结构如下：

```typescript
import { Metadata } from "next";
import { siteConfig } from "@/config/site"; // 假设域名等配置在此
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { [gameSlug]Content } from "./content"; // gameSlug 应为驼峰式，如 basketballBrosUnblockedContent

export const metadata: Metadata = {
  title: `[GAME_NAME] | Play Free Game | ${siteConfig.domain}`, // 示例标题
  description: "Short description of [GAME_NAME]. Play online for free!", // 示例描述
  openGraph: {
    title: `[GAME_NAME] Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Slightly longer description for [GAME_NAME].",
    // images: [{ url: `https://[YOUR_SITE_DOMAIN]/assets/[GAME_SLUG]/[OG_IMAGE_NAME].png` }] // 示例OG图片
  },
  alternates: {
    canonical: `/[GAME_SLUG]`,
  }
};

const gameConfig = {
  metadata: {
    title: "[GAME_NAME]",
    description: "Description for [GAME_NAME] used within the game template.",
    url: "/[GAME_SLUG]"
  },
  content: [gameSlug]Content // 使用导入的内容对象
};

export default function GameSlugPage() { // 例如 BasketballBrosUnblockedPage
  return <GamePageTemplate gameConfig={gameConfig} />;
}
```
**注意**: 替换 `[gameSlug]Content` 和 `GameSlugPage` 中的 `[gameSlug]` 为驼峰式命名 (e.g., `basketballBrosUnblockedContent`, `BasketballBrosUnblockedPage`)。

#### 1.3 创建内容配置文件 (`content.ts`)
在 `app/[GAME_SLUG]/` 目录下创建 `content.ts` 文件。此文件定义了游戏页面的所有文本和特定于游戏的数据。

```typescript
import { content as globalContent } from "@/config/content"; // 全局内容配置

export const [gameSlug]Content = { // gameSlug 应为驼峰式
  ...globalContent, // 继承全局配置

  gameSection: {
    ...globalContent.gameSection,
    title: "[GAME_NAME]",
    game: {
      url: '/[GAME_SLUG].embed', // 用于嵌入游戏的路径 (配合rewrite规则)
      title: "[GAME_NAME]",      // 或 [GAME_SLUG]
      externalUrl: '[GAME_EXTERNAL_URL]', // 游戏实际的外部 iframe 链接
    }
  },

  features: {
    title: "[GAME_NAME]: Game Features - Play Free!",
    items: [
      { title: "Feature 1 Title", description: "Feature 1 description (English)." },
      { title: "Feature 2 Title", description: "Feature 2 description (English)." },
      // ...更多特性
    ]
  },
  
  whatIs: {
    title: "What is [GAME_NAME]? Online Game Explained",
    description: "Detailed explanation of [GAME_NAME] (English).\n\nMore details...",
    logo: {
      src: "/assets/[GAME_SLUG]/[LOGO_IMAGE_NAME.png]", // 指向logo图片
      alt: "[GAME_NAME] - Free Online Game Logo"
    }
  },
  
  howToPlay: {
    title: "How to Play [GAME_NAME] Online Free: Guide",
    description: "How to play instructions for [GAME_NAME] (English).\n\nMore details...",
    image: "/assets/[GAME_SLUG]/[MAIN_GAME_IMAGE.png]", // 指向主要游戏图片
    imageAlt: "[GAME_NAME] Online Game Guide"
  },
  
  faq: {
    title: "[GAME_NAME]: FAQ (Free Online Game)",
    items: [
      { value: "q1", question: "Question 1 about [GAME_NAME]?", answer: "Answer 1 (English)." },
      { value: "q2", question: "Question 2 about [GAME_NAME]?", answer: "Answer 2 (English)." },
      // ...更多FAQ
    ]
  }
};
```
**注意**: 确保所有面向用户的文本（`title`, `description`, `question`, `answer` 等）都是英文。

### 2. 准备图片资源
1.  在 `public/assets/` 目录下为新游戏创建一个文件夹：`public/assets/[GAME_SLUG]/`
2.  将游戏的相关图片（例如 `[LOGO_IMAGE_NAME.png]`, `[MAIN_GAME_IMAGE.png]`）放入此文件夹。
3.  确保在 `app/[GAME_SLUG]/content.ts` 中正确引用这些图片的路径。

### 3. 更新网站配置和数据列表

#### 3.1 添加到页脚游戏列表
编辑 `config/content.ts` 文件，在 `footer.games.links` 数组中添加新游戏：
```typescript
// ...
games: {
  title: "Games",
  links: [
    // ...现有游戏
    { text: "[GAME_NAME]", href: "/[GAME_SLUG]" },
  ]
},
// ...
```

#### 3.2 添加到“其他游戏”数据源
编辑 `app/games/game-data.ts` 文件，在 `games` 对象中添加新游戏的条目：
```typescript
// ...
export const games: Record<string, Game> = {
  // ...现有游戏
  "[GAME_SLUG]": {
    id: "[GAME_SLUG]",
    title: "[GAME_NAME]",
    description: "Short game description for lists (English).", // 确保是英文
    image: "/assets/[GAME_SLUG]/[MAIN_GAME_IMAGE.png]", // 列表卡片使用的图片
    url: "/[GAME_SLUG]",
  },
};
// ...
```

### 4. 添加 URL Rewrite 规则
编辑 `next.config.js` 文件，在 `rewrites` 函数返回的数组中为游戏的嵌入路径添加一条新规则：
```javascript
// ...
async rewrites() {
  return [
    // ...现有规则
    {
      source: '/[GAME_SLUG].embed',
      destination: '/game/[GAME_SLUG]/index.html',
    },
  ]
}
// ...
```
这条规则使得 `/app/[GAME_SLUG]/content.ts` 中定义的 `game.url` (`/[GAME_SLUG].embed`) 能够正确加载对应的 HTML 文件。

### 5. 创建游戏嵌入 HTML 文件
这是实际加载游戏 iframe 的 HTML 文件。
1.  在 `public/game/` 目录下为新游戏创建一个文件夹：`public/game/[GAME_SLUG]/`
2.  在该文件夹下创建 `index.html` 文件。可以复制现有游戏的 `index.html` (例如 `public/game/brainrot-clicker/index.html`) 作为模板，并修改以下部分：
    *   `<base href="/game/[GAME_SLUG]/">`
    *   `<title>[GAME_NAME]</title>`
    *   启动画面的背景图片 URL (`.gamePlayerBgImage` 的 `background-image`样式) 应指向 `/assets/[GAME_SLUG]/[MAIN_GAME_IMAGE.png]`。
    *   `<iframe id="game-iframe" ...>` 的 `src` 属性应指向 `[GAME_EXTERNAL_URL]` (即游戏实际的 iframe 来源)。
    *   iframe 的 `title` 属性应为 `[GAME_NAME]`。

### 6. 更新 LLM / 索引文件 (可选，但推荐)
为了更好地被搜索引擎或其他工具索引，更新以下文件：

#### 6.1 更新 `public/llms.txt`
在 "Game Versions" 列表下添加一行：
```markdown
- [[GAME_NAME]](https://[YOUR_SITE_DOMAIN]/[GAME_SLUG]) - Short game description (English).
```

#### 6.2 更新 `public/llms-full.txt`
在 "Game Versions" 部分，仿照其他游戏的格式，为新游戏添加一个详细的 H3 (# # #) 部分：
```markdown
### [GAME_NAME]
Full game description (English), possibly using details from `app/[GAME_SLUG]/content.ts`.
This version includes:
- Feature 1 title: Feature 1 description.
- Feature 2 title: Feature 2 description.
// ... 更多特性，从 content.ts 中的 features.items 提取
URL: https://[YOUR_SITE_DOMAIN]/[GAME_SLUG]
```

### 7. 测试
完成以上所有步骤后，启动开发服务器并彻底测试新游戏页面：
-   页面是否能正确访问 (`/[GAME_SLUG]`)。
-   游戏是否能通过启动画面正确加载。
-   所有文本内容是否正确显示且为英文。
-   图片是否正确加载。
-   链接（页脚、其他游戏区域）是否指向正确页面。
-   在不同设备和浏览器上检查显示效果。

### 重要注意事项 (Manual Steps & Considerations)

虽然以上步骤提供了添加新游戏的技术框架，但以下关键部分需要您手动创建和精心策划，以确保最佳的用户体验和SEO效果：

1.  **图片资源 (`public/assets/[GAME_SLUG]/`)**:
    *   您需要自行准备或获取高质量的游戏logo (例如 `[GAME_SLUG]-logo.png`) 和主要游戏宣传图片 (例如 `[GAME_SLUG].png`)。
    *   确保图片针对Web进行优化（文件大小、格式），并准确放置在 `public/assets/[GAME_SLUG]/` 目录下。步骤 1.3 和 3.2 中引用的图片路径必须与您实际放置的图片文件名一致。

2.  **内容撰写 (Content Creation)**:
    *   **`app/[GAME_SLUG]/content.ts`**: 此文件中的所有描述性文本（例如 `features.items.description`, `whatIs.description`, `howToPlay.description`, `faq.items.answer` 等）都需要用流畅、准确且吸引人的英文撰写。这些内容直接影响用户对游戏的理解和第一印象。
    *   **`app/[GAME_SLUG]/page.tsx` (元数据)**: `metadata` 对象中的 `title` 和 `description` 对SEO至关重要。请精心撰写，确保它们准确反映游戏内容，并包含相关的关键词，以吸引搜索引擎的注意和用户的点击。
    *   **用户体验 (UX) 与 SEO**: 在撰写所有面向用户的文本时，不仅要考虑信息的准确性，还要考虑其对用户体验的积极影响以及对搜索引擎排名的优化。清晰、有价值的内容能提升用户停留时间并有助于SEO。
    *   **`public/llms.txt` 和 `public/llms-full.txt`**: 这些文件中的游戏描述也需要用英文精心撰写，以提供准确的游戏信息。

## 最佳实践

1. **保持一致性**：尽量使用通用模板，保持网站风格一致。
2. **优化图片**：确保所有图片都经过压缩，以提高页面加载速度。
3. **测试响应式**：在不同设备上测试游戏页面的显示效果。
4. **SEO优化**：为每个游戏页面提供完整的元数据。
5. **结构化数据**：确保 JSON-LD 结构化数据正确配置，以提高搜索引擎可见性。

## 故障排除

如果游戏页面显示不正确，请检查：
1. 所有文件路径和占位符是否已正确替换。
2. `content.ts` 和 `game-data.ts` 中的文本是否为英文。
3. 图片资源是否存在于指定路径。
4. iframe URL (`externalUrl`) 是否有效。
5. Next.js 重写规则是否正确配置并生效（可能需要重启开发服务器）。
