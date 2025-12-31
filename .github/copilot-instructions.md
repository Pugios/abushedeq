# AI Coding Agent Instructions for Nathmi Abushedeq Portfolio

## Project Overview
This is a React TypeScript portfolio website built with Vite, featuring internationalization (German, English, Arabic) and a single-page application structure using React Router. The site showcases Nathmi Abushedeq's businesses and contact information.

## Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM for navigation (Home, About, Press pages)
- **Animations**: Framer Motion for smooth transitions
- **Internationalization**: Custom context-based i18n with translations in `src/data/translations.ts`
- **Data Structure**: Static business data in `src/data/businesses.ts` with image assets

## Key Components Structure
- `src/components/sections/`: Page sections (HeroSection, BusinessSection, etc.)
- `src/components/ui/`: Reusable UI components (shadcn/ui based)
- `src/components/layout/`: Navigation and Footer
- `src/components/navigation/`: Desktop/Mobile navigation components

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (outputs to `build/` directory)
- **Install Dependencies**: `npm i`
- **No Tests**: Project currently has no test suite

## Coding Patterns
- **Component Props**: Pass translation object `t` and callbacks like `scrollToSection` to sections
- **Language Handling**: Use `useLanguage()` hook for current language, access translations via `t = translations[language]`
- **Styling**: Tailwind classes with responsive prefixes (`sm:`, `lg:`), backdrop-blur effects, gradients
- **Animations**: Motion components with `initial`, `animate`, `whileHover` props
- **Asset Imports**: Images in `src/assets/`, icons via `src/assets/icons/svg-vymn29r931.ts`
- **Business Data**: Array of objects with id, title, description (from translations), images, social links

## Data Flow
1. `LanguageProvider` wraps app, provides language state
2. Components receive `t` (translations) as props
3. Business data combines static assets with translated content
4. Sections handle their own scroll-to functionality via `scrollToSection` callback

## Conventions
- **File Naming**: PascalCase for components (e.g., `HeroSection.tsx`), camelCase for utilities
- **Imports**: Group React imports first, then third-party, then local
- **Props Interface**: Define at top of component files
- **Color Scheme**: Dark theme (`bg-[#0A0B14]`) with white text, accent colors per business
- **Responsive**: Mobile-first with Tailwind breakpoints

## Common Tasks
- **Add New Business**: Update `src/data/businesses.ts` with assets and `src/data/translations.ts` with descriptions
- **Add Language**: Extend `Language` type in `LanguageContext.tsx` and add to translations
- **Modify Sections**: Edit in `src/components/sections/`, ensure `t` prop usage
- **Update UI**: Use existing shadcn components from `src/components/ui/` or add new ones following the pattern

## Deployment
- **Platform**: Vercel
- **Analytics**: @vercel/analytics integrated
- **Build Output**: `build/` directory served statically