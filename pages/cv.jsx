// pages/cv.jsx
import Head from 'next/head';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Head>
        <title>Kevin Juma | CV</title>
      </Head>

      <header className="bg-white dark:bg-gray-800 shadow p-6 text-center rounded-b-md">
        <h1 className="text-3xl font-bold">Kevin Juma</h1>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          Web Developer | Designer | Problem Solver
        </p>

        <div className="flex justify-center gap-4 mt-4 text-blue-600 dark:text-blue-400">
          <a href="mailto:kevin@example.com" className="hover:underline">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/kevinjuma" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kevinjuma" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>

        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="inline-block mt-6 px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-12">
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 border-gray-300 dark:border-gray-600">Profile</h2>
          <p>
            Experienced web developer with a strong background in building scalable, responsive web applications.
            Passionate about UI/UX design, modern JavaScript frameworks, and solving real-world problems through clean code.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 border-gray-300 dark:border-gray-600">Skills</h2>
          <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React, Next.js, Tailwind CSS</li>
            <li>Node.js, Express</li>
            <li>Figma, Adobe XD</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 border-gray-300 dark:border-gray-600">Experience</h2>
          <div>
            <h3 className="font-bold">Frontend Developer – Freelance</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">2022 – Present</span>
            <p className="mt-1 text-sm">
              Built responsive web applications for clients in e-commerce, education, and SaaS. Delivered fast, accessible UI interfaces and worked closely with backend teams.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 border-gray-300 dark:border-gray-600">Education</h2>
          <div>
            <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">XYZ University, 2018 – 2022</span>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4 border-gray-300 dark:border-gray-600">Projects</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Portfolio Website:</strong> Personal portfolio using Next.js + Tailwind.</li>
            <li><strong>2D Area Calculator:</strong> Web-based tool using Python backend + JS frontend.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
