import { describe, it, expect, vi } from 'vitest';

// Test useActivePath hook logic directly
const normalizePath = (path) => {
  if (!path || path === '/') return '/';
  return path.replace(/\/+$/, '').split('?')[0].split('#')[0];
};

const isExactActive = (currentPath, href) =>
  normalizePath(currentPath) === normalizePath(href);

const isSectionActive = (currentPath, href) => {
  const current = normalizePath(currentPath);
  const normalizedHref = normalizePath(href);
  if (normalizedHref === '/') return current === '/';
  return current === normalizedHref || current.startsWith(normalizedHref + '/');
};

describe('useActivePath logic', () => {
  describe('normalizePath', () => {
    it('handles empty/null', () => {
      expect(normalizePath(null)).toBe('/');
      expect(normalizePath('')).toBe('/');
    });

    it('handles root', () => {
      expect(normalizePath('/')).toBe('/');
    });

    it('strips trailing slashes', () => {
      expect(normalizePath('/about/')).toBe('/about');
      expect(normalizePath('/about///')).toBe('/about');
    });

    it('strips query params', () => {
      expect(normalizePath('/about?foo=bar')).toBe('/about');
    });

    it('strips hash', () => {
      expect(normalizePath('/about#section')).toBe('/about');
    });
  });

  describe('isExactActive', () => {
    it('matches exact paths', () => {
      expect(isExactActive('/', '/')).toBe(true);
      expect(isExactActive('/about', '/about')).toBe(true);
    });

    it('does not match different paths', () => {
      expect(isExactActive('/about', '/contact')).toBe(false);
    });

    it('matches with trailing slash', () => {
      expect(isExactActive('/about/', '/about')).toBe(true);
    });
  });

  describe('isSectionActive', () => {
    it('matches exact section', () => {
      expect(isSectionActive('/projects', '/projects')).toBe(true);
    });

    it('matches nested paths', () => {
      expect(isSectionActive('/services/web-development', '/services')).toBe(true);
    });

    it('root only matches root exactly', () => {
      expect(isSectionActive('/about', '/')).toBe(false);
      expect(isSectionActive('/', '/')).toBe(true);
    });

    it('does not match partial path names', () => {
      expect(isSectionActive('/services-extra', '/services')).toBe(false);
    });
  });
});
