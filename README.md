# Tesseract Kit

A modern, enterprise-grade React component library and development kit built with **Next.js 15**, **TypeScript**, and **Tailwind CSS v4**. This kit provides a comprehensive foundation for building scalable web applications with a focus on developer experience, testing, and maintainability.

## 📋 Table of Contents

- [🚀 Features](#-features)
  - [🎨 UI Component Library](#-ui-component-library)
  - [🧪 Testing & Quality Assurance](#-testing--quality-assurance)
  - [📖 Component Documentation](#-component-documentation)
  - [🔧 Developer Experience](#-developer-experience)
  - [⚡ Performance & Modern Stack](#-performance--modern-stack)
- [🏗️ Architecture](#️-architecture)
  - [Project Structure](#project-structure)
  - [Technology Stack](#technology-stack)
- [🛠️ Installation & Setup](#️-installation--setup)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Component Development](#-component-development)
- [🧪 Testing Strategy](#-testing-strategy)
- [🎨 Styling Guidelines](#-styling-guidelines)
- [🔧 Configuration Files](#-configuration-files)
- [🪝 Git Hooks & Quality Gates](#-git-hooks--quality-gates)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📁 VS Code Integration](#-vs-code-integration)
- [📈 Performance Features](#-performance-features)

## 🚀 Features

### 🎨 UI Component Library

- **Modern React Components**: Button, Input, and more with TypeScript support  
- **Tailwind CSS v4**: Latest Tailwind with custom color system and modern configuration  
- **Class Variance Authority (CVA)**: Type-safe component variants  
- **Responsive Design**: Mobile-first approach with Tailwind utilities  

### 🧪 Testing & Quality Assurance

- **Vitest**: Lightning-fast unit testing with full TypeScript support  
- **React Testing Library**: Component testing with accessibility focus  
- **Test Coverage**: Istanbul coverage reports with component-only filtering  
- **Accessibility Testing**: `vitest-axe` for automated a11y testing  
- **Snapshot Testing**: Component regression testing  

### 📖 Component Documentation

- **Storybook 9**: Interactive component documentation and development  
- **Accessibility Addon**: Built-in a11y testing in Storybook  
- **Multiple Addons**: Docs, onboarding, and Vitest integration  

### 🔧 Developer Experience

- **TypeScript 5**: Full type safety with strict configuration  
- **ESLint & Prettier**: Automated code quality and formatting  
- **Husky Git Hooks**: Pre-commit and pre-push quality gates  
- **Lint-staged**: Automatic linting and formatting on commit  
- **VS Code Integration**: Optimized workspace settings  
- **Path Aliases**: Clean imports with `@/` prefix  

### ⚡ Performance & Modern Stack

- **Next.js 15**: Latest Next.js with App Router  
- **React 19**: Cutting-edge React features  
- **Node.js 22 LTS**: Modern JavaScript runtime  
- **pnpm**: Fast, efficient package management  
- **Tailwind Merge**: Optimized class merging  

## 🏗️ Architecture

### Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── Button/
│       ├── Input/
│       └── index.ts
├── hooks/
│   ├── useEngines/
│   ├── useQueryParams/
│   └── index.ts
├── lib/
│   └── utils.ts
└── stories/
```

### Technology Stack

- **Framework**: Next.js 15.3.5, React 19, TypeScript 5  
- **Styling**: Tailwind CSS v4, tailwind-merge, clsx, PostCSS  
- **Components**: Radix UI, Lucide React, CVA  
- **Testing**: Vitest, RTL, Jest DOM, JSDOM, Istanbul  
- **Tooling**: Storybook, ESLint, Prettier, Husky  

## 🛠️ Installation & Setup

### Prerequisites

- Node.js `22.16.0` LTS (use `.nvmrc`)  
- pnpm (recommended)  

### Quick Start

```bash
git clone <repository-url>
cd iag-tesseract-kit
pnpm install
pnpm run dev       # Start server
pnpm run dev:open  # Open browser automatically
```

## 📜 Available Scripts

### Development

```bash
pnpm run dev
pnpm run dev:open
pnpm run build
pnpm run start
```

### Testing

```bash
pnpm run test
pnpm run test:coverage
pnpm run test:coverage:view
```

### Code Quality

```bash
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run check:format
pnpm run check
```

### Storybook

```bash
pnpm run storybook
pnpm run build-storybook
```

## 🎨 Component Development

1. Create folder in `src/components/ui/`  
2. Add `.tsx` file with component logic  
3. Add `.test.tsx` file with tests  
4. Add `.stories.tsx` file for Storybook  
5. Export from `index.ts`  

#### Example

```tsx
// Button.tsx
import { cn } from '@/lib/utils';

export const Button = ({ className, ...props }) => (
  <button className={cn('base-class', className)} {...props} />
);
```

## 🧪 Testing Strategy

- Unit tests (components, hooks, utils)  
- Snapshot testing  
- Accessibility testing with `vitest-axe`  
- Coverage enforcement via Istanbul  

## 🎨 Styling Guidelines

- Tailwind CSS v4 with CSS variables  
- Scoped styles in `globals.css`  
- Responsive utilities  
- Optional dark mode  

```css
--color-warning: #facc15;
--color-brand: #1e40af;
--color-brand-light: #60a5fa;
```

## 🔧 Configuration Files

- `tsconfig.json` — TypeScript + path aliases  
- `vitest.config.ts` — Component-only testing  
- `eslint.config.mjs` — ESLint rules  
- `tailwind.config.js` — Tailwind v4 settings  
- `next.config.ts` — App config  

## 🪝 Git Hooks & Quality Gates

### Pre-commit

- Runs `lint-staged`:
  - ESLint (with autofix)
  - Prettier (on staged files)

```json
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint",
    "eslint --fix",
    "prettier --write"
  ]
}
```

### Pre-push

- Runs `pnpm run lint`  
- Blocks push on errors  

### Benefits

- Consistent formatting  
- Early bug detection  
- Clean Git history  
- CI/CD-friendly  

## 🚀 Deployment

```bash
pnpm run build
pnpm run start
```

- Node.js 22 LTS  
- ES2017+ support  
- Modern browser compatibility  

## 🤝 Contributing

1. Create a feature branch  
2. Add code + tests + stories  
3. Run `pnpm run check`  
4. Push (hooks will run)  
5. Open PR  

### Quality Gates

- ESLint and Prettier pass  
- Tests + coverage OK  
- TS compiles  
- Storybook updated  

## 📁 VS Code Integration

### Recommended Extensions

- ESLint  
- Prettier  
- TypeScript Tools  
- Tailwind IntelliSense  
- Auto Rename Tag  

### Workspace Settings

- Format on save  
- ESLint integration  
- Strict TS mode  
- Tailwind sorting enabled  

## 📈 Performance Features

- Code splitting  
- Image optimization (Next.js)  
- CSS purging  
- Compile-time TS checks  
- ES2017+ features  .
