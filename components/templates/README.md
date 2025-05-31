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

以下步骤说明如何快速添加一个新游戏页面。请将 `[GAME_SLUG]` (例如 `crazy-chicken-3d`)、`[GAME_NAME]` (例如 "Crazy Chicken 3D") 等占位符替换为实际游戏信息。

### 1. 创建游戏页面文件

#### 1.1 复制现有游戏目录
1. 在 `app/` 目录下找到任意一个现有游戏目录（如 `app/crazy-chicken-3d/`）
2. 复制整个目录并重命名为 `app/[GAME_SLUG]/`

#### 1.2 修改页面文件 (`page.tsx`)
打开 `app/[GAME_SLUG]/page.tsx`，替换以下内容：
- 导入语句中的内容变量名（改为驼峰式命名，如 `crazyChickenContent`）
- `metadata` 中的 `title` 和 `description`
- `gameConfig.metadata` 中的相关信息
- 组件函数名（如 `CrazyChicken3DPage`）

#### 1.3 修改内容配置文件 (`content.ts`)
打开 `app/[GAME_SLUG]/content.ts`，替换以下内容：
- 导出变量名（改为驼峰式命名，如 `crazyChickenContent`）
- `gameSection.title` 和 `game` 对象中的信息
- `features.title` 和 `items` 数组中的特性描述
- `whatIs` 部分的标题、描述和图片路径
- `howToPlay` 部分的标题、描述和图片路径
- `faq` 部分的标题和问答内容

### 2. 准备图片资源
1. 在 `public/assets/` 目录下创建 `[GAME_SLUG]/` 文件夹
2. 准备并放入以下图片：
   - 游戏logo图片
   - 主要游戏宣传图片
3. 确保图片文件名与 `content.ts` 中引用的路径一致

### 3. 更新网站配置

#### 3.1 添加到页脚游戏列表
编辑 `config/content.ts`：
- 在 `footer.games.links` 数组中添加新游戏链接

#### 3.2 添加到游戏数据源
编辑 `app/games/game-data.ts`：
- 在 `games` 对象中添加新游戏的条目

### 4. 配置URL重写规则
编辑 `next.config.js`：
- 在 `rewrites` 函数的返回数组中添加新的重写规则

### 5. 创建游戏嵌入文件

#### 5.1 复制现有游戏嵌入目录
1. 复制 `public/game/crazy-chicken-3d/` 目录
2. 重命名为 `public/game/[GAME_SLUG]/`

#### 5.2 修改嵌入HTML文件
打开 `public/game/[GAME_SLUG]/index.html`，替换以下内容：
- `<base href>` 中的路径
- `<title>` 标签内容
- 启动画面背景图片URL
- iframe的 `src` 属性（指向实际游戏URL）
- iframe的 `title` 属性

### 6. 更新索引文件（可选）

#### 6.1 更新 `public/llms.txt`
在 "Game Versions" 列表下添加新游戏条目

#### 6.2 更新 `public/llms-full.txt`
为新游戏添加详细的描述部分

### 7. 测试验证
启动开发服务器，检查以下项目：
- 游戏页面能否正常访问
- 游戏能否正确加载
- 所有文本内容显示正确
- 图片资源加载正常
- 页脚和其他游戏区域的链接正确

## 重要提醒

1. **文本内容**：所有面向用户的文本内容必须使用英文
2. **图片优化**：确保图片经过Web优化，控制文件大小
3. **命名规范**：
   - 文件夹和URL使用短横线分隔（如 `crazy-chicken-3d`）
   - 变量名使用驼峰式命名，可以适当简化（如 `crazyChickenContent` 或 `basketballBrosUnblockedContent`）
   - 组件函数名使用PascalCase（如 `CrazyChicken3DPage`）
4. **路径一致性**：确保所有文件路径引用正确且一致
5. **重启服务**：修改 `next.config.js` 后需要重启开发服务器

## 最佳实践

1. **保持一致性**：使用现有游戏作为模板，保持网站风格统一
2. **优化图片**：压缩图片以提高页面加载速度
3. **测试响应式**：在不同设备上测试显示效果
4. **SEO优化**：精心编写页面标题和描述
5. **内容质量**：提供有价值的游戏介绍和玩法说明

## 故障排除

如果游戏页面显示不正确，请检查：
1. 所有占位符是否已正确替换
2. 文件路径是否正确且文件存在
3. 游戏iframe URL是否有效
4. Next.js重写规则是否生效（可能需要重启服务器）
5. 图片资源是否存在于指定路径
