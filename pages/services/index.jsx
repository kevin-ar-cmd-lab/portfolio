import Head from 'next/head';
import Link from 'next/link';
import { FaCode, FaMobileAlt, FaPalette, FaLightbulb } from 'react-icons/fa';
import { useServiceStyles, Divider } from '../../components/ServicePage';

const services = [
  {
    title: 'Web Development',
    href: '/services/web-development',
    description: 'Modern, responsive websites tailored to your goals.',
    icon: FaCode,
    color: 'text-blue-500',
  },
  {
    title: 'Mobile Development',
    href: '/services/mobile-development',
    description: 'Cross-platform mobile apps for Android and iOS.',
    icon: FaMobileAlt,
    color: 'text-indigo-500',
  },
  {
    title: 'UI/UX Design',
    href: '/services/ui-ux-design',
    description: 'Intuitive and engaging user interface and experience design.',
    icon: FaPalette,
    color: 'text-pink-500',
  },
  {
    title: 'Consulting',
    href: '/services/consulting',
    description: 'Strategic digital consulting and architecture planning.',
    icon: FaLightbulb,
    color: 'text-yellow-500',
  },
];

export default function Services() {
  const { pageClass, sectionClass, cardClass, mutedText } = useServiceStyles();

  return (
    <>
      <Head>
        <title>My Services</title>
      </Head>
      <div className={pageClass}>
        <div className="container mx-auto px-6 max-w-4xl">
          <section className={sectionClass}>
            <h1 className="text-2xl font-bold text-center mb-2">My Services</h1>
            <Divider />
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map(({ title, href, description, icon: Icon, color }) => (
                <Link key={href} href={href} className={`${cardClass} flex flex-col items-center text-center`}>
                  <Icon className={`text-3xl ${color} mb-2`} />
                  <h2 className="font-semibold text-lg mb-1">{title}</h2>
                  <p className={`${mutedText} text-sm leading-relaxed`}>{description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
