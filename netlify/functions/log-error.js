// netlify/functions/log-error.js
//
// Receives client-side error reports and logs them server-side.
// In a production setup, this could forward to a logging service
// (e.g., Datadog, Sentry, Logtail). For now, it logs to stdout
// which is captured by Netlify's function logs.

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const errorData = JSON.parse(event.body || '{}');

    // Log to stdout — visible in Netlify function logs
    console.error('[CLIENT_ERROR]', JSON.stringify({
      message: errorData.message,
      stack: errorData.stack,
      url: errorData.url,
      type: errorData.type,
      timestamp: errorData.timestamp,
      userAgent: errorData.userAgent,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid payload' }),
    };
  }
}
