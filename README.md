# Surhires

Surhires is a premium, responsive recruitment landing page built with Next.js App Router and Tailwind CSS. The experience is tailored to a modern hiring platform that connects job seekers and employers through polished, high-trust interactions.

## Features

- Responsive premium home page
- Sticky navigation with mobile menu
- Hero section with clear job and hiring CTAs
- Trust/employer strip
- How-it-works section
- Featured jobs grid with reusable job cards
- Testimonials and FAQ accordion
- Final CTA and branded footer
- SEO metadata using the App Router metadata API
- Searchable jobs directory with location, employment, work arrangement, and experience filters
- Client-side sorting, paginated infinite scrolling, and a keyboard-accessible Load More fallback
- Frontend-only demo job listings and application disclosure

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the page.

## Jobs Directory

Visit `/jobs` to search the local demo listings by keyword, location, employment type,
work arrangement, or experience level. Results can be sorted by relevance, posting
date, or salary. The page displays nine matching jobs at a time and appends the next
batch as the list approaches the viewport; the accessible **Load more jobs** button
provides the same pagination action.

Filtering, sorting, and pagination run in
the browser.

## Production Build

```bash
npm run build
```
