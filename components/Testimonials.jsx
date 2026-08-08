import React from 'react';
import Image from 'next/image';

const Testimonials = ({ testimonials, darkMode }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return [...Array(5)].map((_, i) => {
      if (i < fullStars)
        return (
          <i
            key={i}
            className={`fas fa-star ${
              darkMode ? 'text-yellow-300' : 'text-yellow-400'
            }`}
            aria-hidden="true"
          ></i>
        );
      if (i === fullStars && hasHalfStar)
        return (
          <i
            key={i}
            className={`fas fa-star-half-alt ${
              darkMode ? 'text-yellow-300' : 'text-yellow-400'
            }`}
            aria-hidden="true"
          ></i>
        );
      return (
        <i
          key={i}
          className={`far fa-star ${
            darkMode ? 'text-gray-600' : 'text-gray-300'
          }`}
          aria-hidden="true"
        ></i>
      );
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${
            darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex items-center mb-4">
            <Image
              src={t.img}
              alt={t.name}
              width={48}
              height={48}
              className="rounded-full mr-4 object-cover"
            />
            <div>
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.title}
              </p>
            </div>
          </div>

          {/* ✅ FIXED QUOTE CLARITY */}
          <p className="mb-3 text-gray-600 dark:text-gray-300">
            {`"${t.quote}"`}
          </p>

          <div className="flex" role="img" aria-label={`Rating: ${t.rating} out of 5 stars`}>{renderStars(t.rating)}</div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
