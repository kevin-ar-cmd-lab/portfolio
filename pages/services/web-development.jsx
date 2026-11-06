import ServicePage from '../../components/ServicePage';

export default function WebDevelopment() {
  return (
    <ServicePage
      title="Web Development"
      tagline="Next.js · Tailwind CSS · Node.js"
      intro="I architect and deploy high-performance, scalable websites built on modern stacks such as Next.js, Tailwind CSS, and Node.js—optimized for SEO, responsiveness, and conversion."
      sections={[
        {
          title: 'What You Get',
          items: [
            'Fully responsive design',
            'Custom UI components',
            'SEO-optimized architecture',
            'Fast load times and clean code',
            'Deployment to Netlify, Vercel, or custom hosting',
          ],
        },
        {
          title: 'Process Workflow',
          ordered: true,
          items: [
            'Discovery & Requirements',
            'UI/UX Wireframes',
            'Frontend Development',
            'Backend Integration',
            'Testing & Deployment',
          ],
        },
      ]}
      cta={{
        title: 'Ready to Start?',
        text: "Let's turn your idea into a fast, modern website that works for your business.",
        button: 'Contact Me',
      }}
    />
  );
}
