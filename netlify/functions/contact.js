
// netlify/functions/contact.js
//
// This Netlify function processes contact form submissions and
// sends an email using Brevo's SMTP Email API.
//
// Expected POST JSON:
// {
//   "name": "John Doe",
//   "email": "john@example.com",
//   "message": "Hello world"
// }

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function handler(event) {
  // Only allow POST.
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' }),
    };
  }

  let name, email, message;

  // Parse JSON safely
  try {
    const parsed = JSON.parse(event.body || '{}');
    ({ name, email, message } = parsed);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body.' }),
    };
  }

  // Validate required fields
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing name, email, or message.' }),
    };
  }

  // Validate email
  if (typeof email !== 'string' || !isValidEmail(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid email format.' }),
    };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME;

  // Ensure environment variables exist
  if (!apiKey || !senderEmail) {
    console.error('Missing Brevo environment variables:', {
      apiKey: !!apiKey,
      senderEmail: !!senderEmail,
      senderName: !!senderName,
    });

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email service configuration error.' }),
    };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        to: [{ email: senderEmail }],
        replyTo: { email },
        subject: 'New Portfolio Contact Message',
        htmlContent: `<p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p>${escapeHtml(message)}</p>`,
      }),
    });

    if (!response.ok) {
      let details = '';
      try {
        details = await response.text();
      } catch {}
      console.error('Brevo returned an error:', details);

      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Email sending failed.',
          details,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Brevo contact error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unexpected server error while sending email.' }),
    };
  }
}
