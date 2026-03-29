# Nitro + Vite + React

现代全栈应用模板，集成 [Nitro](https://nitro.build/)、[Vite](https://vite.dev/) 和 [React](https://react.dev/)。

## 特性

- ⚡ **Vite** - 极速的开发体验和构建性能
- 🚀 **Nitro** - 现代化的全栈框架，支持多种部署目标
- ⚛️ **React 19** - 最新的 React 版本
- 🎨 **Tailwind CSS v4** - 原子化 CSS 框架
- 📁 **文件系统路由** - 基于文件的路由自动生成
- 🔥 **HMR** - 模块热替换支持
- 📦 **TypeScript** - 类型安全

## 快速开始

### 使用 degit 创建项目

```bash
npx degit XiaoXianThis/nitro-react-template 项目名称
cd 项目名称
bun install
bun run dev
```

### 手动克隆

```bash
# 安装依赖
bun install

# 启动开发服务器
bun run dev
```

开发服务器默认运行在 `http://localhost:3000`

## 项目结构

```
├── app/                 # 前端应用
│   ├── pages/          # 页面组件
│   │   └── index.tsx   # 首页
│   ├── styles/         # 样式文件
│   │   └── main.css    # Tailwind 入口
│   └── main.tsx        # 应用入口
├── server/             # 服务端代码
│   ├── api/            # API 路由
│   │   └── hello.ts    # 示例接口
│   ├── routes/         # 服务端渲染路由
│   ├── middleware/     # 中间件
│   └── plugins/        # Nitro 插件
├── public/             # 静态资源
├── index.html          # HTML 入口
├── vite.config.ts      # Vite 配置
├── nitro.config.ts     # Nitro 配置
└── tsconfig.json       # TypeScript 配置
```

## 开发指南

### 前端开发

前端代码位于 `app/` 目录，使用 React + TypeScript + Tailwind CSS。

项目集成 `vite-plugin-pages`，支持基于文件系统的路由自动生成：

```
app/pages/
├── index.tsx          # 路由: /
├── about.tsx          # 路由: /about
├── blog/
│   ├── index.tsx      # 路由: /blog
│   └── [id].tsx       # 路由: /blog/:id (动态路由)
└── [...all].tsx       # 路由: /:all* (捕获所有)
```

路由组件示例：

```tsx
// app/pages/index.tsx
export default function HomePage() {
  return <div>Hello World</div>;
}

// app/pages/blog/[id].tsx - 动态路由
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();
  return <div>Post ID: {id}</div>;
}
```

### API 开发

服务端 API 位于 `server/api/` 目录，自动映射为 `/api/*` 路由。

```ts
// server/api/hello.ts
import { defineHandler } from "nitro";

export default defineHandler((event) => {
  return { message: "Hello from Nitro!" };
});
```

访问 `GET /api/hello` 即可获取响应。

### 服务端路由

页面级服务端路由位于 `server/routes/`，支持动态路由和文件系统路由约定：

- `[param].ts` - 动态路由参数
- `[...slug].ts` - 通配符路由

## 构建与部署

```bash
# 生产构建
bun run build

# 本地预览生产构建
bun run preview
```

构建产物位于 `.output/` 目录。

### 部署目标

Nitro 支持多种部署预设，包括：

- Node.js (默认)
- Deno
- Bun
- Vercel
- Netlify
- Cloudflare Workers
- AWS Lambda

在 `nitro.config.ts` 中配置 `preset`：

```ts
export default defineNitroConfig({
  preset: 'vercel'
});
```

查看 [Nitro 部署文档](https://nitro.build/deploy) 了解更多。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Nitro | v3 | 全栈框架 |
| Vite | v6 | 构建工具 |
| React | v19 | UI 框架 |
| React Router | v7 | 路由 |
| Tailwind CSS | v4 | 样式 |
| TypeScript | v5 | 类型系统 |

## 学习资源

- [Nitro 文档](https://nitro.build/)
- [Vite 文档](https://vite.dev/)
- [React 文档](https://react.dev/)
- [Tailwind CSS 文档](https://tailwindcss.com/)

## License

MIT
