# Project: Landing Page - Software Company (Galaxia / SPLANA)

## Context
This project is a modern landing page for a software company that offers:
- Desktop accounting software
- Web-based order system
- Virtual store solutions

This is NOT an ecommerce frontend. It is a marketing + conversion landing page.

---

## Stack

- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- React Server Components (default)

---

## Core Rules

### Next.js
- Use App Router (`app/` directory)
- DO NOT use `pages/`
- Prefer Server Components
- Use `"use client"` only when strictly necessary
- `searchParams` is a Promise → must be awaited
- Use async components when fetching data

### Architecture
- Keep components modular and reusable
- Separate layout, sections, and UI components
- Avoid monolithic files
- No business logic inside UI components

---

## Folder Structure

/app → routing (pages, layouts)
/components/layout → Header, Footer, Container, Section
/components/sections → Hero, Services, Features, About, CTA, Contact
/components/ui → Button, Card, Input, Badge, etc.
/lib → utilities, constants
/types → shared types
/public → static assets

---

## UI / UX Guidelines

- Design must be modern, clean, and high-impact
- Mobile-first responsive design
- Use consistent spacing and typography
- Avoid cluttered layouts
- Prioritize readability and visual hierarchy

### Visual Style
- Strong hero section (headline + CTA)
- Clear sections with purpose
- Use cards, icons, and spacing
- Smooth hover effects (no over-animation)

---

## Performance

- Minimize client-side JavaScript
- Prefer server rendering
- Optimize images (use next/image when needed)
- Avoid unnecessary state and effects

---

## Reusability

- Create reusable components for:
  - Buttons
  - Sections
  - Containers
  - Cards

- Avoid duplicating styles

---

## Data Handling

- Static content should be centralized in `/lib/constants.ts`
- Avoid hardcoding repeated text across components

---

## Forms

- Validate inputs properly
- Provide user feedback (loading, success, error)
- Keep UX simple and fast

---

## Code Style

- Clean, readable, and minimal
- Use descriptive names
- Avoid unnecessary complexity
- Keep components small and focused

---

## DO NOT

- Do not use outdated Next.js patterns
- Do not mix pages router with app router
- Do not overuse client components
- Do not create deeply nested components without reason

---

## Goal

Build a high-converting landing page that:
- Looks professional
- Clearly communicates the product
- Is fast and responsive
- Is easy to scale in the future