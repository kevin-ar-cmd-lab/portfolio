import ServicePage from '../../components/ServicePage';

export default function MobileDevelopment() {
  return (
    <ServicePage
      title="Mobile App Development"
      tagline="React Native · Android & iOS"
      intro="I build cross-platform mobile applications using React Native—delivering high-performance, scalable apps for Android and iOS with modern UI/UX and business-driven features."
      sections={[
        {
          title: 'Deliverables',
          items: [
            'Cross-platform Android/iOS builds',
            'User-centric interface & navigation',
            'Real-time features and API integration',
            'App Store & Play Store readiness',
            'Maintenance & continuous updates',
          ],
        },
        {
          title: 'Development Pipeline',
          ordered: true,
          items: [
            'Requirements & Prototyping',
            'UI/UX Wireframing',
            'Component Development',
            'API Integration',
            'Store Publishing',
          ],
        },
      ]}
      cta={{
        title: "Let's Build Your App",
        text: 'Have an app idea? I can help you take it from concept to the app stores.',
        button: 'Get in Touch',
      }}
    />
  );
}
