export default function MobileDevelopment() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Mobile App Development</h1>

      <p className="text-3xl font-bold mb-6">
        I build cross-platform mobile applications using React Native— delivering high-performance,
        scalable apps for Android and iOS with modern UI/UX and business-driven features.
      </p>

      <Section title="Deliverables">
        <ul className="list-disc pl-5 space-y-2">
          <li>Cross-platform Android/iOS builds</li>
          <li>User-centric interface & navigation</li>
          <li>Real-time features and API integration</li>
          <li>App Store & Play Store readiness</li>
          <li>Maintenance & continuous updates</li>
        </ul>
      </Section>

      <Section title="Development Pipeline">
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
    <ol className="list-decimal pl-5 space-y-2 text-gray-300">
      <li>Requirements & Prototyping</li>
      <li>UI/UX Wireframing</li>
      <li>Component Development</li>
      <li>API Integration</li>
      <li>Store Publishing</li>
    </ol>
  );
}

function CTA() {
  return (
    <div className="mt-12 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Let's Build Your App</h3>
      <a
        href="/contact"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Get in Touch
      </a>
    </div>
  );
}
