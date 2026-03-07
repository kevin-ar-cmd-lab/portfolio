import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Brand + Tagline */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <span className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">
            Kevin&apos;s Digital Space
          </span>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between gap-8">

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '/about#skills', label: 'Skills' },
                { href: '/blog', label: 'Blog' },
                { href: '/testimonials', label: 'Testimonials' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { href: '/services/web-development', label: 'Web Development' },
                { href: '/services/mobile-development', label: 'Mobile Development' },
                { href: '/services/ui-ux-design', label: 'UI/UX Design' },
                { href: '/services/consulting', label: 'Consulting' },
                { href: '/services', label: 'All Services' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <div className="max-w-sm">
              <NewsletterForm variant="compact" />
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/kevin-ar-cmd-lab" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.behance.net/kevinjuma1" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.16-1.3.24-2.004.24H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.096-.166 1.486-.5.39-.333.58-.79.58-1.37 0-.36-.067-.655-.21-.895-.138-.24-.327-.43-.566-.58-.24-.147-.51-.25-.84-.3-.32-.05-.67-.077-1.03-.077H3.375v3.72h3.17zm.18 5.56c.408 0 .786-.04 1.14-.135.35-.09.66-.24.91-.43.26-.2.46-.44.6-.75.14-.31.21-.68.21-1.1 0-.87-.24-1.52-.73-1.93-.49-.41-1.14-.61-1.98-.61H3.375v4.96h3.348l.002-.005zM21.577 6.1H15.1v1.56h6.477V6.1zM22.31 14.87c-.378.61-.945 1.04-1.71 1.29.35.18.65.4.9.66.25.27.44.57.58.92.14.34.22.72.25 1.13.03.39.05.82.05 1.28 0 .21.01.47.02.76.02.29.05.56.1.8.07.28.14.48.22.6h-2.8c-.07-.15-.12-.34-.15-.58-.03-.24-.06-.48-.07-.73-.01-.25-.02-.49-.03-.73-.01-.24-.03-.45-.05-.63-.07-.59-.2-1.06-.39-1.41-.19-.35-.42-.62-.7-.81-.28-.19-.6-.32-.97-.38-.37-.06-.77-.09-1.2-.09h-3.49v5.37H10.2V4.51h7.97c.76 0 1.45.09 2.07.27.62.18 1.15.45 1.59.81.44.36.78.8 1.01 1.33.23.53.35 1.13.35 1.8 0 .88-.2 1.63-.59 2.24-.39.61-.96 1.06-1.71 1.34v.05c.81.16 1.43.54 1.87 1.14.44.6.7 1.35.77 2.25h-.02c.01.2.02.39.02.55 0 .16-.01.3-.01.42h.01c-.01.09-.02.18-.03.27zm-3.67-5.22c0-.35-.06-.66-.17-.93-.12-.27-.29-.5-.51-.69-.22-.19-.49-.33-.81-.43-.32-.1-.69-.15-1.1-.15h-4.94v4.52h4.78c.45 0 .84-.06 1.18-.17.34-.11.62-.27.86-.48.23-.21.41-.46.53-.76.13-.3.19-.63.19-1.01v.06z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/share/1BDSGfQWjX/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2026 Kevin Juma. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
