'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  DocumentTextIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { useActivePath } from '../hooks/useActivePath';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { isExactActive, isSectionActive } = useActivePath();

  const links = [
    { href: '/', label: 'Home', icon: HomeIcon, type: 'exact' },
    { href: '/about', label: 'About', icon: UserIcon, type: 'exact' },
    { href: '/projects', label: 'Projects', icon: FolderIcon, type: 'section' },
    { href: '/cv', label: 'CV', icon: DocumentTextIcon, type: 'exact' },
    { href: '/contact', label: 'Contact', icon: PhoneIcon, type: 'exact' },
  ];

  const isActiveLink = (link) =>
    link.type === 'section' ? isSectionActive(link.href) : isExactActive(link.href);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full object-cover border-2 border-blue-500"
                priority
              />
              {/* FIXED: single consistent colour instead of multicolor gradient */}
              <span className="text-xl font-bold text-blue-500 dark:text-blue-400">
                Kevin&apos;s Digital Space
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center relative">
              {links.map((link) => {
                const { href, label, icon: Icon } = link;
                const isActive = isActiveLink(link);

                return (
                  <Link
                    key={href}
                    href={href}
                    className="relative flex items-center space-x-1 font-medium transition-colors duration-300"
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors duration-300 ${
                        isActive
                          ? 'text-blue-500 dark:text-blue-400'
                          : 'text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-300'
                      }`}
                    />
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? 'text-blue-500 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {label}
                    </span>

                    {/* Smooth underline */}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-500 dark:bg-blue-400 transition-all duration-300"
                      style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar - Mobile */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-around h-14 items-center">
            {links.map((link) => {
              const { href, label, icon: Icon } = link;
              const isActive = isActiveLink(link);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center text-xs font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className="h-5 w-5 mb-1" aria-hidden="true" />
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Global layout padding */}
      <style jsx global>{`
        body {
          padding-top: 4rem;
          padding-bottom: 3.5rem;
        }
        @media (min-width: 768px) {
          body {
            padding-bottom: 0;
          }
        }
      `}</style>
    </>
  );
}
