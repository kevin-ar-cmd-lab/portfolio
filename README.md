# Kevin's Digital Space

![Portfolio Screenshot](public/screenshot-image.jpg)

A modern portfolio website for Kevin Juma, built with Next.js and deployed on Netlify. The project highlights services, projects, testimonials, contact channels, and a downloadable CV in a clean, responsive experience.

## Live Experience

- Personal branding and professional profile
- Project showcase and service pages
- Testimonials and contact options
- Newsletter subscription flow
- Responsive design with dark mode support

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Netlify Functions
- Brevo API (contact and newsletter)

## Project Structure

- `pages/` - Application routes and page-level UI
- `components/` - Reusable UI components
- `context/` - Theme and shared client state
- `hooks/` - Navigation and active path helpers
- `netlify/functions/` - Serverless handlers for contact and subscribe
- `public/` - Static assets (images, icons, CV, SEO files)

## Local Development

### Prerequisites

- Node.js 22+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

### Run with Netlify emulation

```bash
netlify dev
```

This runs the site with Netlify features (Functions and redirects) at `http://localhost:8888`.

## Environment Variables

Set these variables for contact and newsletter features:

- `BREVO_API_KEY`
- `BREVO_SENDER_EMAIL`
- `BREVO_SENDER_NAME`
- `BREVO_LIST_ID`

## Build and Production

```bash
npm run build
npm run start
```

Netlify configuration lives in `netlify.toml`.

## Author

Kevin Juma  
Web Developer and UI/UX Designer
