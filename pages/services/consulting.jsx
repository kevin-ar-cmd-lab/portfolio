export default function Consulting() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">IT & Digital Consulting</h1>

      <p className="text-3xl mb-3">
        I provide strategic, data-driven advisory that helps businesses modernize their digital
        footprint, deploy scalable solutions, and reduce operational risk.
      </p>

      <Section title="Consulting Areas">
        <ul className="list-disc pl-5 space-y-2">
          <li>Website modernization</li>
          <li>Tech stack advisory</li>
          <li>Deployment strategy</li>
          <li>Business process automation</li>
          <li>Performance and SEO audits</li>
        </ul>
      </Section>

      <Section title="Engagement Model">
        <ul className="list-disc pl-5 space-y-2">
          <li>One-on-one sessions</li>
          <li>Project-based advisory</li>
          <li>Monthly retainers</li>
          <li>Implementation support</li>
        </ul>
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

function CTA() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Book a Consultation</h3>
      <a
        href="/contact"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Contact Me
      </a>
    </div>
  );
}
