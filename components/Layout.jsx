import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import SEOData from './SEOData';
import FitToScreenLayout from './FitToScreenLayout';

export default function Layout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevinjuma.netlify.app';
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Prevent hydration mismatch

  const currentRoute = router.pathname;
  const normalizedRoute = currentRoute.toLowerCase();

  const defaultSEO = {
    title: "Kevin's Digital Space",
    description: "Portfolio site for Kevin Juma, web developer and designer.",
    keywords: "kevin, portfolio, web developer, ui ux",
    image: "/logo.jpg",
    url: siteUrl,
  };

  const seoData = SEOData[normalizedRoute] || defaultSEO;

  if (process.env.NODE_ENV === 'development' && !SEOData[normalizedRoute]) {
    console.warn(`Warning: No SEO data found for route: "${normalizedRoute}"`);
  }

  const routeSchemaMap = {
    "/": "org",
    "/about": "org",
    "/contact": "org",
    "/blog": "blog",
    "/projects": "webpage",
    "/testimonials": "webpage",
  };

  const schemaType = routeSchemaMap[normalizedRoute] || "webpage";

  return (
    <>
      <SEOHead seo={seoData} schemaType={schemaType} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      <FitToScreenLayout
        header={<Navbar />}
        footer={<Footer />}
      >
        <main id="main-content" className="flex-grow">
          {children}
        </main>
      </FitToScreenLayout>
    </>
  );
}
