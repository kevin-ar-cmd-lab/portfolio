import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center relative overflow-hidden">

      {/* Subtle background gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500 opacity-10 blur-3xl pointer-events-none" />

      {/* Greeting */}
      <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3">
        Hi there, I'm
      </p>

      {/* Profile Photo */}
      <div className="relative mb-6">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
          <Image
            src="/kevinjuma.jpeg"
            alt="Kevin Juma - Web Developer"
            width={144}
            height={144}
            className="object-cover w-full h-full"
            priority={true}
          />
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-900 rounded-full" />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
        Kevin Juma
      </h1>

      {/* Title badge */}
      <span className="inline-block bg-blue-500/10 text-blue-500 text-sm font-medium px-4 py-1 rounded-full mb-5 border border-blue-500/20">
        Web Developer & UI/UX Designer
      </span>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-8">
        I build <span className="text-blue-500 font-semibold">fast</span>, beautiful, and user-friendly digital experiences — from landing pages to full-stack web apps.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-blue-500/40"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
        >
          Hire Me
        </Link>
      </div>

      {/* Social proof / stats */}
      <div className="mt-14 flex flex-wrap justify-center gap-8 text-center">
        {[
          { label: 'Projects Completed', value: '20+' },
          { label: 'Happy Clients', value: '10+' },
          { label: 'Years Experience', value: '3+' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p className="text-2xl font-bold text-blue-500">{value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
