# Agent Instructions for randys-portfolio

## Commands
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Dev server**: `npm run dev`
- **Preview**: `npm run preview`
- **Deploy**: `npm run deploy`

## Code Style Guidelines

### File Structure
- React components use `.jsx` extension
- Components in `src/components/`, sections in `src/components/sections/`

### Naming Conventions
- Components: PascalCase (e.g., `Home`, `About`)
- Files: PascalCase matching component name
- Props: camelCase

### Imports
- React imports first: `import { useState } from "react"`
- Local components: named imports with destructuring
- Relative paths with `./` for local imports

### React Patterns
- Functional components with arrow functions
- Props destructuring in component parameters
- No semicolons at statement ends
- JSX attributes use camelCase (e.g., `className`, `onClick`)

### Styling
- TailwindCSS utility classes
- Template literals for dynamic className strings
- Responsive prefixes: `md:`, `lg:`

### Linting
- ESLint with React recommended rules
- No unused disable directives allowed
- Max warnings: 0

### Error Handling
- No specific patterns observed; use standard React error boundaries if needed