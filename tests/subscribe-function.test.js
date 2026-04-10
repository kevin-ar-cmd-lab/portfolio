import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock global fetch
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

const { handler } = await import('../netlify/functions/subscribe.js');

describe('Subscribe function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.BREVO_API_KEY = 'test-key';
    process.env.BREVO_LIST_ID = '5';
  });

  it('rejects non-POST requests', async () => {
    const result = await handler({ httpMethod: 'GET' });
    expect(result.statusCode).toBe(405);
  });

  it('rejects invalid JSON', async () => {
    const result = await handler({ httpMethod: 'POST', body: '{bad' });
    expect(result.statusCode).toBe(400);
  });

  it('rejects missing email', async () => {
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({}),
    });
    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).error).toContain('Invalid or missing email');
  });

  it('rejects invalid email format', async () => {
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'notanemail' }),
    });
    expect(result.statusCode).toBe(400);
  });

  it('returns 500 if BREVO_API_KEY is missing', async () => {
    delete process.env.BREVO_API_KEY;
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'test@test.com' }),
    });
    expect(result.statusCode).toBe(500);
  });

  it('handles new subscription (201)', async () => {
    mockFetch.mockResolvedValue({ status: 201 });
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'test@test.com' }),
    });
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).alreadyRegistered).toBe(false);
  });

  it('handles existing subscription (204)', async () => {
    mockFetch.mockResolvedValue({ status: 204 });
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'test@test.com' }),
    });
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).alreadyRegistered).toBe(true);
  });

  it('handles Brevo error response', async () => {
    mockFetch.mockResolvedValue({
      status: 400,
      json: () => Promise.resolve({ message: 'Bad request' }),
    });
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ email: 'test@test.com' }),
    });
    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).error).toBe('Bad request');
  });
});
