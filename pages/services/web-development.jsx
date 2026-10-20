export default function WebDevelopment() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Web Development</h1>

      <p className="list-disc pl-5 space-y-5">
        I architect and deploy high-performance, scalable websites built on modern stacks such as
        Next.js, Tailwind CSS, and Node.js—optimized for SEO, responsiveness, and conversion.
      </p>

      <Section title="What You Get">
        <ul className="space-y-2 list-disc pl-5">
          <li>Fully responsive design</li>
          <li>Custom UI components</li>
          <li>SEO-optimized architecture</li>
          <li>Fast load times and clean code</li>
          <li>Deployment to Netlify, Vercel, or custom hosting</li>
        </ul>
      </Section>

      <Section title="Process Workflow">
        <Workflow />
      </Section>

      <CTA />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Workflow() {
  return (
    <ol className="list-disc pl-5 space-y-5">
      <li>Discovery & Requirements</li>
      <li>UI/UX Wireframes</li>
      <li>Frontend Development</li>
      <li>Backend Integration</li>
      <li>Testing & Deployment</li>
    </ol>
  );
}

function CTA() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
      <a
        href="/contact"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Contact Me
      </a>
    </div>
  );
}
