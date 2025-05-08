# Crazy Cattle 3D 游戏网站

这是 Crazy Cattle 3D 游戏的官方网站项目，基于 Next.js 构建。该网站提供游戏嵌入、游戏信息展示以及针对搜索引擎和 AI 爬虫的优化。

## 项目概述

Crazy Cattle 3D 是一款基于物理引擎的 3D 动作游戏，可直接在浏览器中运行，无需下载安装。本项目是游戏的官方网站，提供游戏嵌入、游戏信息和相关资源。

### 主要功能

- 游戏嵌入与展示
- 游戏特性、玩法和 FAQ 介绍
- 针对搜索引擎优化 (SEO)
- 针对 AI 爬虫的特殊内容优化
- 响应式设计，支持各种设备

## 技术栈

- **框架**: Next.js
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **SEO**: next-sitemap

## 项目结构

```
/
├── app/                    # Next.js 应用目录
│   ├── crazy-cow-3d/       # Crazy Cow 3D 游戏页面
│   └── layout.tsx          # 全局布局
├── components/             # React 组件
├── config/                 # 配置文件
│   ├── content.ts          # 内容配置
│   ├── layout.ts           # 布局配置
│   └── site.ts             # 站点配置
├── public/                 # 静态资源
│   ├── assets/             # 图片和其他资源
│   ├── game/               # 游戏文件
│   ├── llms.txt            # AI 爬虫专用内容摘要
│   └── llms-full.txt       # AI 爬虫专用完整内容
└── next.config.js          # Next.js 配置
```

## 开发指南

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 本地开发

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看网站。

### 构建项目

```bash
npm run build
# 或
yarn build
```

### 生成 Sitemap

```bash
npm run sitemap
# 或
yarn sitemap
```

## 游戏嵌入指南

网站通过 iframe 嵌入游戏。详细的游戏本地化部署指南可参考 `IFRAME_DOWNLOAD_README.md`。

## AI 爬虫优化

本项目针对 AI 爬虫进行了特殊优化：

1. 提供了专用的 `llms.txt` 和 `llms-full.txt` 文件，包含结构化的游戏信息
2. 通过 `robots.txt` 配置，引导 AI 爬虫访问这些专用文件
3. 限制 AI 爬虫对网站其他部分的访问

详细配置可查看 `next-sitemap.config.js`。

## OG 图片生成

社交媒体预览图片生成指南可参考 `OG_IMAGE_README.md`。

## 部署

项目配置为通过 Vercel 自动部署。推送到主分支的更改将自动部署到生产环境。

## 许可证

© 2025 Crazy Cattle 3D. 保留所有权利。