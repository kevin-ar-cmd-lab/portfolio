export default function UiUxDesign() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">UI/UX Design</h1>

      <p className="text-3xl font-bold mb-3">
        I design intuitive, conversion-focused user experiences built around customer psychology and
        modern interface standards. Every layout is crafted to boost engagement and business value.
      </p>

      <Section title="Core Deliverables">
        <ul className="list-disc pl-5 space-y-2">
          <li>Wireframes and prototypes</li>
          <li>Responsive layout systems</li>
          <li>Design systems & style guides</li>
          <li>Interactive UI elements</li>
          <li>User journey mapping</li>
        </ul>
      </Section>

      <Section title="Design Lifecycle">
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
    <ol className="list-decimal pl-5 space-y-2">
      <li>Research & Requirement Analysis</li>
      <li>Wireframing</li>
      <li>Visual Design</li>
      <li>Interactive Prototyping</li>
      <li>Handoff to Development</li>
    </ol>
  );
}

function CTA() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Need a Modern UI?</h3>
      <a
        href="/contact"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Contact Me
      </a>
    </div>
  );
}
