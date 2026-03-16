# Kevin's Digital Space

A modern, responsive personal portfolio website built with **Next.js** and **Tailwind CSS**. This portfolio serves as a professional digital presence to showcase projects, skills, services, and experience.

**Live site:** [kevinjuma.netlify.app](https://kevinjuma.netlify.app)

---

## Features

- **Responsive Design** -- Mobile-first layout that adapts to all screen sizes, with a bottom navigation bar on mobile and a fixed sidebar on desktop
- **Dark / Light Mode** -- Theme toggle with system preference detection and localStorage persistence
- **Project Showcase** -- Animated project cards displaying tech stacks, descriptions, and links to live demos and source code
- **Service Pages** -- Dedicated detail pages for Web Development, Mobile Development, UI/UX Design, and Consulting
- **CV / Resume** -- A complete curriculum vitae page with profile, skills, experience, education, and projects
- **Contact Integration** -- Six contact methods including WhatsApp, phone, email, GitHub, Facebook, and blog
- **Newsletter Subscription** -- Email subscription powered by Brevo with a confetti celebration on sign-up
- **SEO Optimization** -- Route-specific metadata, Open Graph tags, and structured schema markup
- **Smooth Animations** -- Page transitions and staggered reveals powered by Framer Motion
- **Performance Monitoring** -- Integrated Vercel Speed Insights

---

## Tech Stack

| Category           | Technology                                      |
| ------------------ | ----------------------------------------------- |
| **Framework**      | Next.js 16 (Page Router)                        |
| **UI Library**     | React 18                                        |
| **Styling**        | Tailwind CSS 3                                  |
| **Animations**     | Framer Motion, Canvas Confetti                  |
| **Icons**          | Heroicons, React Icons, Font Awesome            |
| **Email Service**  | Brevo API                                       |
| **State**          | React Context (theme)                           |
| **Deployment**     | Netlify                                         |

---

## Project Structure

```
.
├── pages/                   # Next.js pages
│   ├── api/                 # API routes (contact form, newsletter)
│   ├── services/            # Individual service detail pages
│   ├── index.jsx            # Home
│   ├── about.jsx            # About & skills
│   ├── projects.jsx         # Project showcase
│   ├── services.jsx         # Services overview
│   ├── cv.jsx               # Resume / CV
│   ├── contact.jsx          # Contact methods
│   ├── blog.jsx             # Blog listing
│   ├── testimonials.jsx     # Client testimonials
│   ├── Newsletter.jsx       # Newsletter subscription
│   └── 404.jsx              # Custom error page
├── components/              # Reusable React components
│   ├── Layout.jsx           # Page layout with SEO
│   ├── Navbar.jsx           # Navigation bar
│   ├── Footer.jsx           # Site footer
│   ├── ProjectCard.jsx      # Animated project card
│   ├── NewsletterForm.jsx   # Subscription form
│   ├── Testimonials.jsx     # Testimonials display
│   ├── SEOHead.jsx          # SEO meta tags
│   └── ...
├── context/                 # React Context providers
│   └── ThemeContext.jsx     # Dark/light mode context
├── hooks/                   # Custom React hooks
│   └── useActivePath.js     # Active navigation detection
├── styles/                  # Global styles
│   └── globals.css          # Tailwind directives & custom CSS
├── utils/                   # Utility helpers
├── public/                  # Static assets (images, favicon)
├── netlify/                 # Netlify configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/kevins-digital-space.git
cd kevins-digital-space

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_sender_email
BREVO_SENDER_NAME=your_sender_name
BREVO_LIST_ID=your_brevo_list_id
```

### Development

```bash
# Start the development server on http://localhost:3000
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Start the production server
npm start
```

---

## Deployment

This project is configured for deployment on **Netlify**. Pushes to the main branch trigger an automatic build and deploy.

To deploy manually with the Netlify CLI:

```bash
netlify deploy --prod
```

---

## Function Endpoints

| Endpoint             | Method | Description                        |
| -------------------- | ------ | ---------------------------------- |
| `/.netlify/functions/contact`   | POST   | Handles contact form submissions   |
| `/.netlify/functions/subscribe` | POST   | Handles newsletter subscriptions   |

Both endpoints are direct Netlify Function URLs and use the Brevo API.

---

## License

This project is proprietary. All rights reserved.
