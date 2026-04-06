import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials';

const mockTestimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO at TestCo',
    img: '/jane.jpg',
    quote: 'Great work!',
    rating: 5,
  },
  {
    name: 'John Smith',
    title: 'Designer',
    img: '/john.jpg',
    quote: 'Excellent developer.',
    rating: 3.5,
  },
];

describe('Testimonials', () => {
  it('renders all testimonials', () => {
    render(<Testimonials testimonials={mockTestimonials} darkMode={false} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();
  });

  it('renders testimonial quotes', () => {
    render(<Testimonials testimonials={mockTestimonials} darkMode={false} />);
    expect(screen.getByText('"Great work!"')).toBeInTheDocument();
    expect(screen.getByText('"Excellent developer."')).toBeInTheDocument();
  });

  it('renders testimonial titles', () => {
    render(<Testimonials testimonials={mockTestimonials} darkMode={false} />);
    expect(screen.getByText('CEO at TestCo')).toBeInTheDocument();
    expect(screen.getByText('Designer')).toBeInTheDocument();
  });

  it('renders images with correct alt text', () => {
    render(<Testimonials testimonials={mockTestimonials} darkMode={false} />);
    expect(screen.getByAltText('Jane Doe')).toHaveAttribute('src', '/jane.jpg');
    expect(screen.getByAltText('John Smith')).toHaveAttribute('src', '/john.jpg');
  });

  it('renders 5 stars per testimonial', () => {
    render(<Testimonials testimonials={mockTestimonials} darkMode={false} />);
    const stars = document.querySelectorAll('i');
    expect(stars.length).toBe(10); // 5 per testimonial
  });
});
