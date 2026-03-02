import Head from 'next/head';
import { useTheme } from '../context/ThemeContext';

export default function Blog() {
  const { darkMode } = useTheme();
  const blogPosts = [
    {
      title: 'The Future of Web Development',
      image: 'https://via.placeholder.com/800x400',
      description: 'Explore the latest trends in web development, including JAMstack, serverless, and more.',
      link: '#',
    },
    {
      title: 'Understanding Tailwind CSS',
      image: 'https://via.placeholder.com/800x400',
      description: 'A comprehensive guide to Tailwind CSS and how it can simplify your styling workflow.',
      link: '#',
    },
    {
      title: 'Next.js: The React Framework for Production',
      image: 'https://via.placeholder.com/800x400',
      description: 'Why Next.js is the perfect choice for building modern, scalable web applications.',
      link: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog | Kevin's Digital Space</title>
      </Head>
      <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}>
        <main className="max-w-6xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">My Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className={darkMode ? 'text-gray-300 mt-2' : 'text-gray-600 mt-2'}>
                    {post.description}
                  </p>
                  <a
                    href={post.link}
                    className={darkMode
                      ? 'text-indigo-400 hover:text-indigo-300 mt-4 inline-block font-medium'
                      : 'text-indigo-600 hover:text-indigo-800 mt-4 inline-block font-medium'
                    }
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
