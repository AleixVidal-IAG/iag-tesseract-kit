# IAG Tesseract Kit

A modern, enterprise-grade React component library and development kit built with Next.js 15, TypeScript, and Tailwind CSS v4. This kit provides a comprehensive foundation for building scalable web applications with a focus on developer experience, testing, and maintainability.

## � Table of Contents

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
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
- [📜 Available Scripts](#-available-scripts)
  - [Development](#development)
  - [Testing](#testing)
  - [Code Quality](#code-quality)
  - [Storybook](#storybook)
- [🎨 Component Development](#-component-development)
  - [Creating New Components](#creating-new-components)
  - [Component Structure Example](#component-structure-example)
- [🧪 Testing Strategy](#-testing-strategy)
  - [Unit Tests](#unit-tests)
  - [Coverage Requirements](#coverage-requirements)
  - [Accessibility Testing](#accessibility-testing)
- [🎨 Styling Guidelines](#-styling-guidelines)
  - [Tailwind CSS v4 Configuration](#tailwind-css-v4-configuration)
  - [Custom Colors](#custom-colors)
- [🔧 Configuration Files](#-configuration-files)
  - [Key Configuration](#key-configuration)
- [🪝 Git Hooks & Quality Gates](#-git-hooks--quality-gates)
  - [Pre-commit Hook](#pre-commit-hook)
  - [Pre-push Hook](#pre-push-hook)
  - [Lint-staged Configuration](#lint-staged-configuration)
  - [Quality Gate Benefits](#quality-gate-benefits)
- [🚀 Deployment](#-deployment)
  - [Build Process](#build-process)
  - [Environment Requirements](#environment-requirements)
- [🤝 Contributing](#-contributing)
  - [Development Workflow](#development-workflow)
  - [Quality Gates](#quality-gates)
- [📁 VS Code Integration](#-vs-code-integration)
  - [Recommended Extensions](#recommended-extensions)
  - [Workspace Settings](#workspace-settings)
- [📈 Performance Features](#-performance-features)

## �🚀 Features

### 🎨 **UI Component Library**

- **Modern React Components**: Button, Input, and more with TypeScript support
- **Tailwind CSS v4**: Latest Tailwind with custom color system and modern configuration
- **Class Variance Authority (CVA)**: Type-safe component variants
- **Responsive Design**: Mobile-first approach with Tailwind utilities

### 🧪 **Testing & Quality Assurance**

- **Vitest**: Lightning-fast unit testing with full TypeScript support
- **React Testing Library**: Component testing with accessibility focus
- **Test Coverage**: Istanbul coverage reports with component-only filtering
- **Accessibility Testing**: `vitest-axe` for automated a11y testing
- **Snapshot Testing**: Component regression testing

### 📖 **Component Documentation**

- **Storybook 9**: Interactive component documentation and development
- **Accessibility Addon**: Built-in a11y testing in Storybook
- **Multiple Addons**: Docs, onboarding, and Vitest integration

### 🔧 **Developer Experience**

- **TypeScript 5**: Full type safety with strict configuration
- **ESLint & Prettier**: Automated code quality and formatting
- **Husky Git Hooks**: Pre-commit and pre-push quality gates
- **Lint-staged**: Automatic linting and formatting on commit
- **VS Code Integration**: Optimized workspace settings
- **Path Aliases**: Clean imports with `@/` prefix

### ⚡ **Performance & Modern Stack**

- **Next.js 15**: Latest Next.js with App Router
- **React 19**: Cutting-edge React features
- **Node.js 22 LTS**: Modern JavaScript runtime
- **pnpm**: Fast, efficient package management
- **Tailwind Merge**: Optimized class merging

## 🏗️ Architecture

### **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind configuration
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/
│   └── ui/                # Reusable UI components
│       ├── Button/        # Button component with tests & stories
│       ├── Input/         # Input component with tests & stories
│       └── index.ts       # Component exports
├── hooks/                 # Custom React hooks
│   ├── useEngines/        # Engine data fetching hook
│   ├── useQueryParams/    # URL query parameter utilities
│   └── index.ts           # Hook exports
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
└── stories/               # Storybook documentation
```

### **Technology Stack**

#### **Core Framework**

- **Next.js 15.3.5**: React framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript 5**: Static type checking

#### **Styling**

- **Tailwind CSS v4**: Utility-first CSS framework
- **tailwind-merge**: Intelligent class merging
- **clsx**: Conditional className utility
- **PostCSS**: CSS processing with Tailwind plugin

#### **UI Components**

- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library
- **Class Variance Authority**: Type-safe component variants

#### **Testing**

- **Vitest 3.2.4**: Fast unit testing framework
- **React Testing Library**: Component testing utilities
- **Jest DOM**: Custom DOM matchers
- **JSDOM**: DOM environment for tests
- **Istanbul**: Code coverage reporting

#### **Development Tools**

- **Storybook 9**: Component development environment
- **ESLint 9**: Code linting and quality rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates
- **TypeScript ESLint**: TypeScript-specific linting

## 🛠️ Installation & Setup

### **Prerequisites**

- **Node.js 22.16.0 LTS** (see `.nvmrc`)
- **pnpm** (recommended package manager)

### **Quick Start**

```bash
# Clone the repository
git clone <repository-url>
cd iag-tesseract-kit

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open browser automatically
pnpm run dev:open
```

## 📜 Available Scripts

### **Development**

```bash
pnpm run dev              # Start Next.js development server
pnpm run dev:open         # Start dev server and open browser
pnpm run build            # Build for production
pnpm run start            # Start production server
```

### **Testing**

```bash
pnpm run test             # Run tests in watch mode
pnpm run test:coverage    # Run tests with coverage (components only)
pnpm run test:coverage:view # Open coverage report in browser
```

### **Code Quality**

```bash
pnpm run lint             # Run ESLint
pnpm run lint:fix         # Fix ESLint errors automatically
pnpm run format           # Format code with Prettier
pnpm run check:format     # Check if code is formatted
pnpm run check            # Run all quality checks
```

### **Storybook**

```bash
pnpm run storybook        # Start Storybook development server
pnpm run build-storybook  # Build static Storybook site
```

## 🎨 Component Development

### **Creating New Components**

1. Create component directory in `src/components/ui/`
2. Add TypeScript component with proper types
3. Create test file with `.test.tsx` extension
4. Add Storybook stories with `.stories.tsx` extension
5. Export from `index.ts` files

### **Component Structure Example**

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  // ... other props
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'base-button-classes',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
};
```

## 🧪 Testing Strategy

### **Unit Tests**

- Component behavior testing
- Hook functionality testing
- Utility function testing
- Snapshot testing for UI consistency

### **Coverage Requirements**

- Focus on component testing
- Automated coverage reports
- Istanbul coverage provider
- HTML and LCOV report formats

### **Accessibility Testing**

- Automated a11y testing with `vitest-axe`
- Screen reader compatibility
- Keyboard navigation testing
- ARIA compliance validation

## 🎨 Styling Guidelines

### **Tailwind CSS v4 Configuration**

- Custom color system with CSS variables
- Component-scoped styles in `globals.css`
- Responsive design utilities
- Dark mode support (configurable)

### **Custom Colors**

```css
--color-warning: #facc15;
--color-brand: #1e40af;
--color-brand-light: #60a5fa;
```

## 🔧 Configuration Files

### **Key Configuration**

- `tsconfig.json` - TypeScript configuration with path aliases
- `vitest.config.ts` - Test configuration with component coverage
- `eslint.config.mjs` - Linting rules and integrations
- `tailwind.config.js` - Tailwind CSS v4 configuration
- `next.config.ts` - Next.js framework configuration

## 🪝 Git Hooks & Quality Gates

### **Pre-commit Hook**

Automatically runs before each commit to ensure code quality:

```bash
# Runs lint-staged which includes:
- ESLint checks and auto-fixes
- Prettier formatting
- Only on staged files for performance
```

### **Pre-push Hook**

Runs a comprehensive check before pushing to remote:

```bash
# Full ESLint check on entire codebase
pnpm run lint

# Blocks push if any linting errors are found
# Ensures main branch always has clean code
```

### **Lint-staged Configuration**

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint",
      "eslint --fix", 
      "prettier --write"
    ]
  }
}
```

### **Quality Gate Benefits**

- **Consistent Code Style**: Prettier ensures uniform formatting
- **Error Prevention**: ESLint catches potential bugs before commit
- **Clean History**: Only quality code reaches the repository
- **Team Alignment**: Everyone follows the same standards
- **CI/CD Ready**: Reduces pipeline failures

## 🚀 Deployment

### **Build Process**

```bash
pnpm run build    # Creates optimized production build
pnpm run start    # Serves production build locally
```

### **Environment Requirements**

- Node.js 22.16.0 LTS
- Support for ES2017+ JavaScript features
- Modern browser compatibility

## 🤝 Contributing

### **Development Workflow**

1. Create feature branch
2. Develop with tests and stories
3. Commit changes (triggers pre-commit hooks)
4. Run quality checks (`pnpm run check`)
5. Push to remote (triggers pre-push hooks)
6. Ensure test coverage
7. Submit pull request

### **Quality Gates**

- **Pre-commit**: Lint-staged runs ESLint and Prettier on staged files
- **Pre-push**: Full ESLint check blocks push if errors exist
- All tests must pass
- Code coverage requirements met
- TypeScript compilation successful
- Storybook stories for new components

## 📁 VS Code Integration

### **Recommended Extensions**

- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- Auto Rename Tag

### **Workspace Settings**

- Auto-format on save
- ESLint integration
- TypeScript strict mode
- Tailwind CSS class sorting

## 📈 Performance Features

- **Bundle Optimization**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component
- **CSS Optimization**: Tailwind CSS purging
- **TypeScript**: Compile-time optimizations
- **Modern JavaScript**: ES2017+ target for better performance

---

Built with ❤️ using modern web technologies for scalable, maintainable, and accessible applications.
