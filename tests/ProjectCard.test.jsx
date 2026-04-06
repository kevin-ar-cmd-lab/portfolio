import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock ThemeContext
vi.mock('../context/ThemeContext', () => ({
  useTheme: () => ({ darkMode: false }),
}));

import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

const mockProject = {
  title: 'Test Project',
  description: 'A test project description',
  img: '/test.jpg',
  tech: 'React',
  live: 'https://example.com',
  github: 'https://github.com/test/test',
};

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('renders tech badge', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders Live and Code links', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const liveLink = screen.getByText('Live').closest('a');
    const codeLink = screen.getByText('Code').closest('a');
    expect(liveLink).toHaveAttribute('href', 'https://example.com');
    expect(codeLink).toHaveAttribute('href', 'https://github.com/test/test');
  });

  it('opens links in new tabs', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const liveLink = screen.getByText('Live').closest('a');
    const codeLink = screen.getByText('Code').closest('a');
    expect(liveLink).toHaveAttribute('target', '_blank');
    expect(codeLink).toHaveAttribute('target', '_blank');
    expect(liveLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(codeLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders project image with correct alt', () => {
    render(<ProjectCard project={mockProject} index={0} />);
    const img = screen.getByAltText('Test Project');
    expect(img).toHaveAttribute('src', '/test.jpg');
  });
});
