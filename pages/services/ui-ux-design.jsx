import ServicePage from '../../components/ServicePage';

export default function UiUxDesign() {
  return (
    <ServicePage
      title="UI/UX Design"
      tagline="Research · Wireframes · Prototypes"
      intro="I design intuitive, conversion-focused user experiences built around customer psychology and modern interface standards. Every layout is crafted to boost engagement and business value."
      sections={[
        {
          title: 'Core Deliverables',
          items: [
            'Wireframes and prototypes',
            'Responsive layout systems',
            'Design systems & style guides',
            'Interactive UI elements',
            'User journey mapping',
          ],
        },
        {
          title: 'Design Lifecycle',
          ordered: true,
          items: [
            'Research & Requirement Analysis',
            'Wireframing',
            'Visual Design',
            'Interactive Prototyping',
            'Handoff to Development',
          ],
        },
      ]}
      cta={{
        title: 'Need a Modern UI?',
        text: "Let's design an experience your users will love.",
        button: 'Contact Me',
      }}
    />
  );
}
