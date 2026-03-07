import Link from 'next/link';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const skills = [
  { icon: FaReact, label: 'React', color: 'text-blue-500' },
  { icon: FaNodeJs, label: 'Node.js', color: 'text-green-500' },
  { icon: FaHtml5, label: 'HTML5', color: 'text-orange-500' },
  { icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-400' },
  { icon: FaGitAlt, label: 'Git', color: 'text-red-500' },
  { icon: FaDatabase, label: 'Database', color: 'text-teal-500' },
  { icon: FaMobileAlt, label: 'Mobile Dev', color: 'text-indigo-500' },
  { icon: FaCloud, label: 'Cloud', color: 'text-gray-400' },
];

const experience = [
  {
    role: 'Freelance Web Developer',
    period: '2022 – Present',
    desc: 'Built responsive web apps for clients across e-commerce, healthcare, and education sectors.',
  },
  {
    role: 'UI/UX Designer',
    period: '2021 – 2022',
    desc: 'Designed user-friendly interfaces and prototypes, improving user engagement for multiple projects.',
  },
  {
    role: 'Junior Developer',
    period: '2020 – 2021',
    desc: 'Contributed to frontend development using React and collaborated with backend teams on REST APIs.',
  },
];

export default function About() {
  const { darkMode } = useTheme();

  const sectionClass = `${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-8 rounded-2xl shadow mb-10`;
  const cardClass = `${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center`;

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-12`}>
      <div className="container mx-auto px-6 max-w-4xl">

        {/* About Me */}
        <section className={sectionClass}>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                  src="/kevinjuma.jpeg"
                  alt="Kevin Juma"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-1">Kevin Juma</h2>
              <span className="inline-block text-sm text-blue-500 font-medium bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
                Web Developer & UI/UX Designer
              </span>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in creating modern web applications with a strong focus on user experience,
                clean code, and performance. Passionate about both frontend and backend technologies,
                I build responsive, scalable, and secure applications.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className={sectionClass} id="skills">
          <h2 className="text-2xl font-bold text-center mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map(({ icon: Icon, label, color }) => (
              <div key={label} className={cardClass}>
                <Icon className={`text-3xl ${color} mb-2`} />
                <span className="text-sm font-semibold text-center">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className={sectionClass}>
          <h2 className="text-2xl font-bold text-center mb-2">My Experience</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <div className="space-y-6">
            {experience.map(({ role, period, desc }) => (
              <div key={role} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                  <div className="w-0.5 bg-blue-500/30 flex-1 mt-1" />
                </div>
                <div className="pb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{role}</h3>
                    <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/testimonials#testimonials"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
              View Client Testimonials
            </Link>
          </div>
        </section>

        {/* Let's Connect */}
        <section className={sectionClass}>
          <h2 className="text-2xl font-bold text-center mb-2">Work With Me</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities and collaborating on exciting projects. Feel free to reach out!
          </p>
          <div className="text-center">
            <a href="mailto:otienokevino100090@gmail.com"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition">
              Send an Email
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
