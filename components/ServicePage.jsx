import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

// Shared layout for service pages — mirrors the About page's typography,
// section cards, accent dividers and buttons so every service page feels consistent.
export function useServiceStyles() {
  const { darkMode } = useTheme();
  return {
    darkMode,
    pageClass: `${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-12`,
    sectionClass: `${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-8 rounded-2xl shadow mb-10`,
    cardClass: `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} p-5 rounded-xl shadow hover:shadow-lg transition`,
    mutedText: darkMode ? 'text-gray-300' : 'text-gray-600',
  };
}

export function Divider({ className = 'mb-8' }) {
  return <div className={`w-16 h-1 bg-blue-500 mx-auto rounded-full ${className}`}></div>;
}

export default function ServicePage({ title, tagline, intro, sections, cta }) {
  const { pageClass, sectionClass, mutedText } = useServiceStyles();

  return (
    <div className={pageClass}>
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Intro */}
        <section className={`${sectionClass} text-center`}>
          <h1 className="text-3xl font-bold mb-1">{title}</h1>
          {tagline && (
            <span className="inline-block text-sm text-blue-500 font-medium bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
              {tagline}
            </span>
          )}
          <p className={`${mutedText} leading-relaxed`}>{intro}</p>
        </section>

        {sections.map(({ title: sectionTitle, items, ordered }) => (
          <section key={sectionTitle} className={sectionClass}>
            <h2 className="text-2xl font-bold text-center mb-2">{sectionTitle}</h2>
            <Divider />
            {ordered ? <Steps items={items} mutedText={mutedText} /> : <Checklist items={items} />}
          </section>
        ))}

        {/* CTA */}
        <section className={sectionClass}>
          <h2 className="text-2xl font-bold text-center mb-2">{cta.title}</h2>
          <Divider className="mb-6" />
          {cta.text && <p className={`text-center ${mutedText} mb-6`}>{cta.text}</p>}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
            >
              {cta.button}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

function Checklist({ items }) {
  const { cardClass } = useServiceStyles();
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className={`${cardClass} flex items-center gap-3`}>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0" />
          <span className="text-sm font-semibold">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Steps({ items, mutedText }) {
  return (
    <ol className="space-y-6">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
            {i < items.length - 1 && <div className="w-0.5 bg-blue-500/30 flex-1 mt-1" />}
          </div>
          <div className="pb-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">Step {i + 1}</span>
            <h3 className="font-semibold text-lg">{item}</h3>
          </div>
        </li>
      ))}
    </ol>
  );
}
