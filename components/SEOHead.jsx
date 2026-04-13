import Head from 'next/head';

export default function SEOHead({ seo = {}, schemaType = 'webpage' }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kevinjuma.netlify.app';
  const {
    title = "Kevin's Digital Space",
    description = 'Portfolio site for Kevin Juma, web developer and designer.',
    keywords = 'kevin, portfolio, web developer, ui ux',
    image = '/logo.jpg',
    url = siteUrl,
    datePublished,
    dateModified,
  } = seo;

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
  };

  if (schemaType === "blog") {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      image,
      author: {
        "@type": "Person",
        name: "Kevin Otieno",
      },
      publisher: {
        "@type": "Organization",
        name: "Kevin Digital Space",
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.jpg`
        }
      },
      datePublished: datePublished || new Date().toISOString().split('T')[0],
      dateModified: dateModified || new Date().toISOString().split('T')[0],
      url,
    };
  } else if (schemaType === "org") {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Kevin Digital Space",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpg`,
      sameAs: [
        "https://www.facebook.com/nomia.otieno",
        "https://github.com/kevin-ar-cmd-lab"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+254113094610",
        contactType: "Customer Support"
      }
    };
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content={schemaType === 'blog' ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
