import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock fetch and node-fetch
const mockFetch = vi.fn();
vi.mock('node-fetch', () => ({ default: mockFetch }));

// Import handler after mocks
const { handler } = await import('../netlify/functions/contact.js');

describe('Contact function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.BREVO_API_KEY = 'test-key';
    process.env.BREVO_SENDER_EMAIL = 'sender@test.com';
    process.env.BREVO_SENDER_NAME = 'Test Sender';
  });

  it('rejects non-POST requests', async () => {
    const result = await handler({ httpMethod: 'GET' });
    expect(result.statusCode).toBe(405);
  });

  it('rejects invalid JSON', async () => {
    const result = await handler({
      httpMethod: 'POST',
      body: 'not json',
    });
    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).error).toContain('Invalid JSON');
  });

  it('rejects missing fields', async () => {
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ name: 'Test' }),
    });
    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).error).toContain('Missing');
  });

  it('rejects invalid email', async () => {
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'invalid', message: 'Hello' }),
    });
    expect(result.statusCode).toBe(400);
    expect(JSON.parse(result.body).error).toContain('Invalid email');
  });

  it('returns 500 if BREVO_API_KEY is missing', async () => {
    delete process.env.BREVO_API_KEY;
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Hello' }),
    });
    expect(result.statusCode).toBe(500);
  });

  it('sends email successfully', async () => {
    mockFetch.mockResolvedValue({ ok: true });
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Hello' }),
    });
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).success).toBe(true);
    expect(mockFetch).toHaveBeenCalledOnce();
  });

  it('handles Brevo API error', async () => {
    mockFetch.mockResolvedValue({ ok: false, status: 401, text: () => Promise.resolve('Unauthorized') });
    const result = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Hello' }),
    });
    expect(result.statusCode).toBe(401);
  });
});
