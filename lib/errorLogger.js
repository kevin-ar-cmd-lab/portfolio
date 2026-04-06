/**
 * Lightweight error logging utility.
 *
 * In production, errors are sent to a Netlify Function endpoint.
 * In development, they are logged to the console.
 */

const IS_BROWSER = typeof window !== 'undefined';
const IS_PROD = process.env.NODE_ENV === 'production';

function formatError(error, context = {}) {
  return {
    message: error?.message || String(error),
    stack: error?.stack,
    url: IS_BROWSER ? window.location.href : undefined,
    userAgent: IS_BROWSER ? navigator.userAgent : undefined,
    timestamp: new Date().toISOString(),
    ...context,
  };
}

/**
 * Log an error. In production, sends to the logging endpoint.
 * In development, logs to console.
 */
export function logError(error, context = {}) {
  const payload = formatError(error, context);

  if (!IS_PROD) {
    console.error('[ErrorLogger]', payload);
    return;
  }

  // Fire-and-forget POST to the logging function
  if (IS_BROWSER) {
    fetch('/.netlify/functions/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Silently fail — we don't want logging to break the app
    });
  }
}

/**
 * Global unhandled error and rejection listeners.
 * Call once in _app.js to capture uncaught errors.
 */
export function initErrorListeners() {
  if (!IS_BROWSER) return;

  window.addEventListener('error', (event) => {
    logError(event.error || event.message, { type: 'unhandled_error' });
  });

  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, { type: 'unhandled_rejection' });
  });
}
