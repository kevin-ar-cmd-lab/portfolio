import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SEOHead from '../components/SEOHead';

describe('SEOHead', () => {
  it('renders with default props', () => {
    render(<SEOHead />);
    // The Head mock just renders children inline
    const title = document.querySelector('title');
    expect(title).toHaveTextContent("Kevin's Digital Space");
  });

  it('renders custom title and description', () => {
    render(
      <SEOHead seo={{ title: 'About Me', description: 'Learn about Kevin' }} />
    );
    const title = document.querySelector('title');
    expect(title).toHaveTextContent('About Me');
  });

  it('renders structured data as JSON-LD script', () => {
    render(<SEOHead seo={{ title: 'Test Page' }} />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeTruthy();
    const data = JSON.parse(script.innerHTML);
    expect(data['@type']).toBe('WebPage');
    expect(data.name).toBe('Test Page');
  });

  it('renders blog schema when schemaType is blog', () => {
    render(<SEOHead seo={{ title: 'Blog Post' }} schemaType="blog" />);
    const script = document.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script.innerHTML);
    expect(data['@type']).toBe('BlogPosting');
    expect(data.headline).toBe('Blog Post');
    expect(data.author.name).toBe('Kevin Otieno');
  });

  it('renders org schema when schemaType is org', () => {
    render(<SEOHead seo={{}} schemaType="org" />);
    const script = document.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script.innerHTML);
    expect(data['@type']).toBe('Organization');
    expect(data.name).toBe('Kevin Digital Space');
  });
});
