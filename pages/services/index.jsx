import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      href: '/services/web-development',
      description: 'Modern, responsive websites tailored to your goals.',
    },
    {
      title: 'Mobile Development',
      href: '/services/mobile-development',
      description: 'Cross-platform mobile apps for Android and iOS.',
    },
    {
      title: 'UI/UX Design',
      href: '/services/ui-ux-design',
      description: 'Intuitive and engaging user interface and experience design.',
    },
    {
      title: 'Consulting',
      href: '/services/consulting',
      description: 'Strategic digital consulting and architecture planning.',
    },
  ];

  return (
    <>
      <Head>
        <title>My Services</title>
      </Head>
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map(({ title, href, description }) => (
            <Link
              key={href}
              href={href}
              className="block p-6 border border-gray-300 dark:border-gray-700 rounded-xl shadow hover:shadow-lg transition duration-200 bg-white dark:bg-gray-900"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
