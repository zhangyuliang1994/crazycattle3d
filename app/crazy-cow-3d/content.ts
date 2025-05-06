import { content as globalContent } from "@/config/content";

export const crazyCowContent = {
  // 基础内容继承自全局配置
  ...globalContent,
  
  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Crazy Cow 3D",
    game: {
      url: '/crazy-cow-3d.embed',
      title: "crazycow3d",
      externalUrl: '/game/crazycow3d/index.html'
    }
  },
  
  // 特性部分配置
  features: {
    title: "Crazy Cow 3D 游戏特性",
    items: [
      {
        title: "物理引擎",
        description: "Crazy Cow 3D 采用先进的物理引擎，让每一次碰撞都真实可感。牛的移动、跳跃和撞击都遵循真实物理规则，带来前所未有的游戏体验。"
      },
      {
        title: "多样环境",
        description: "在多种精心设计的3D环境中战斗，从草原到山地，每个场景都有独特的战略价值和挑战。"
      },
      {
        title: "技能系统",
        description: "解锁和升级各种特殊技能，让你的疯狂奶牛更具战斗力。从冲撞加速到空中翻转，掌握这些技能是成为顶尖玩家的关键。"
      },
      {
        title: "多人对战",
        description: "与来自世界各地的玩家一起竞技，在实时排行榜上争夺最高分。支持多达8名玩家的同场对战，带来紧张刺激的多人游戏体验。"
      }
    ]
  },
  
  // 什么是部分配置
  whatIs: {
    title: "什么是 Crazy Cow 3D?",
    description: "Crazy Cow 3D 是一款基于物理引擎的3D动作游戏，玩家控制一头疯狂的奶牛，在各种环境中与其他奶牛展开激烈的碰撞对决。\n\n" +
      "游戏采用简单易上手的控制方式，但要真正掌握需要策略和技巧。通过积累动能和精准的碰撞时机，将对手撞出竞技场获得胜利。\n\n" +
      "无需下载，直接在浏览器中即可畅玩这款充满乐趣的物理碰撞游戏。每一局比赛都充满变数，带来无尽的游戏乐趣。",
    logo: {
      src: "/assets/img/crazy-cow-logo.png",
      alt: "Crazy Cow 3D Logo"
    }
  },
  
  // 如何玩部分配置
  howToPlay: {
    title: "如何玩 Crazy Cow 3D",
    description: "使用WASD或方向键控制你的疯狂奶牛移动。按住空格键可以蓄力，释放后进行冲刺。鼠标控制视角，点击左键可以执行特殊动作。\n\n" +
      "游戏的核心是积累动能并利用地形优势。从高处冲下可以获得更大的冲击力，精准的碰撞角度可以将对手击飞更远。注意保持平衡，避免自己掉出场地。\n\n" +
      "收集场地中出现的道具可以获得临时能力加成，如速度提升、重量增加或特殊技能。合理利用这些道具是取胜的关键。",
    image: "/assets/crazy-cow-howto.jpg",
    imageAlt: "Crazy Cow 3D 游戏控制指南"
  },
  
  // FAQ部分配置
  faq: {
    title: "常见问题",
    items: [
      {
        value: "controls",
        question: "游戏控制方式是什么？",
        answer: "使用WASD或方向键控制移动，空格键蓄力冲刺，鼠标控制视角和特殊动作。游戏内有详细的教程指导。"
      },
      {
        value: "multiplayer",
        question: "如何与朋友一起玩？",
        answer: "点击游戏主菜单中的'多人模式'，然后创建房间或加入好友的房间。你也可以选择随机匹配，与全球玩家一起游戏。"
      },
      {
        value: "performance",
        question: "游戏在我的设备上运行缓慢，怎么办？",
        answer: "尝试在游戏设置中降低图形质量，关闭不必要的视觉效果。确保浏览器是最新版本，并关闭其他占用资源的标签页或应用。"
      },
      {
        value: "progress",
        question: "游戏进度会保存吗？",
        answer: "是的，游戏进度会自动保存在你的浏览器中。如果你创建账号并登录，你的进度将保存在云端，可以在不同设备间同步。"
      },
      {
        value: "updates",
        question: "游戏多久更新一次？",
        answer: "我们通常每月发布一次更新，包括新地图、角色或功能。关注我们的社交媒体或游戏内公告以获取最新更新信息。"
      }
    ]
  }
};