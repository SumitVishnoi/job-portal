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
- Dedicated Employers page with hiring hero, pricing, FAQ, and interactive job preview form

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

## Employers Page

The `/employers` route now includes a polished employer-focused experience with:

- a shared Navbar with the "For Employers" nav item highlighted
- a conversion-driven hero tailored to hiring teams
- benefits cards explaining the workflow for posting and discovering talent
- a three-step hiring process section
- illustrative pricing cards, including a selected-plan connection to the job form
- an accessible job posting form with controlled state and validation
- a local job preview that clearly states the submission is not published
- an FAQ built with the reusable accordion component
- a closing CTA and shared Footer

The page is intentionally frontend-only: it simulates a local job preview, does not create logins, and does not publish or store real company or candidate data.

## Four-Layer Architecture

The employer form follows a clear separation of concerns:

- Services: `src/services/employerService.js`
  - normalizes form values
  - validates required fields and email patterns
  - prepares a preview payload without making a network request
  - returns predictable success or failure results
- Hooks: `src/hooks/useEmployerForm.js`
  - manages form state, validation, submission status, selected plan, preview visibility, and reset/edit actions
  - prevents duplicate submissions while the local preview is being generated
- State: React state inside the custom hook
  - tracks values, validation errors, status, preview data, selected plan, and visibility state
- UI: `src/components/employers/`
  - keeps presentation separate from business logic
  - includes pricing cards, the job form, preview, FAQ, and CTA sections

## Form Validation and Preview Behavior

The form validates all required fields before a preview can be generated:

- company name
- work email (must match a valid email pattern)
- job title
- location
- job description

Whitespace is trimmed before checking values, and invalid submissions preserve user-entered data while surfacing field-level errors. Each invalid field is associated with its own validation message and `aria-invalid` state. The submit button is disabled during the local submission simulation to prevent duplicate presses.

On a valid submit, the page displays a success message and a job preview card labeled “Preview — not published.” The preview uses the actual submitted values and clearly indicates that no backend call has been made, no information has been sent to a server, and nothing has been published or saved to persistent storage. Users can edit their form or start over to reset the demo experience.

## Production Build

```bash
npm run build
```

## Linting

```bash
npm run lint
```
