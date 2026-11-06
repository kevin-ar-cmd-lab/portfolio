import ServicePage from '../../components/ServicePage';

export default function Consulting() {
  return (
    <ServicePage
      title="IT & Digital Consulting"
      tagline="Strategy · Architecture · Automation"
      intro="I provide strategic, data-driven advisory that helps businesses modernize their digital footprint, deploy scalable solutions, and reduce operational risk."
      sections={[
        {
          title: 'Consulting Areas',
          items: [
            'Website modernization',
            'Tech stack advisory',
            'Deployment strategy',
            'Business process automation',
            'Performance and SEO audits',
          ],
        },
        {
          title: 'Engagement Model',
          items: [
            'One-on-one sessions',
            'Project-based advisory',
            'Monthly retainers',
            'Implementation support',
          ],
        },
      ]}
      cta={{
        title: 'Book a Consultation',
        text: "Let's talk about where your business is today and where technology can take it.",
        button: 'Contact Me',
      }}
    />
  );
}
