export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('Missing BREVO_API_KEY');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [5], // Replace with your valid list ID
        updateEnabled: true,
      }),
    });

    // Handle known status codes from Brevo
    if (response.status === 201) {
      return res.status(200).json({
        message: 'You are now subscribed to our newsletter.',
        alreadyRegistered: false,
      });
    }

    if (response.status === 204) {
      return res.status(200).json({
        message: 'Welcome back! This email is already registered to the newsletter.',
        alreadyRegistered: true,
      });
    }

    const errorBody = await response.json();
    return res.status(response.status).json({
      error: errorBody.message || 'Unknown error from Brevo',
    });

  } catch (err) {
    console.error('Brevo subscription error:', err);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
