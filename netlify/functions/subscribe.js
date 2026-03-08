// netlify/functions/subscribe.js
//
// This Netlify function subscribes a user to a Brevo list.
// Expected POST body: { "email": "user@example.com" }
//
// Handles:
// - Invalid HTTP method
// - Invalid/malformed JSON
// - Missing or malformed email
// - Missing Brevo API key
// - Brevo success cases (201 = created, 204 = already exists)
// - Brevo error cases with safe fallback parsing

import fetch from 'node-fetch';

export async function handler(event) {
  // Allow only POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed. Use POST.' }),
    };
  }

  // Parse request body safely
  let email;
  try {
    const parsed = JSON.parse(event.body || '{}');
    email = parsed.email;
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON in request body.' }),
    };
  }

  // Basic email validation
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid or missing email address.' }),
    };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('Missing BREVO_API_KEY');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration error.' }),
    };
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
        listIds: [5], // Update this to match your list ID
        updateEnabled: true,
      }),
    });

    // Brevo returns 201 for created
    if (response.status === 201) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'You are now subscribed to our newsletter.',
          alreadyRegistered: false,
        }),
      };
    }

    // Brevo returns 204 if already subscribed
    if (response.status === 204) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Welcome back! This email is already registered to the newsletter.',
          alreadyRegistered: true,
        }),
      };
    }

    // Other responses — try to parse Brevo error
    let errorBody = {};
    try {
      errorBody = await response.json();
    } catch {
      errorBody = { message: 'Unknown error' };
    }

    return {
      statusCode: response.status,
      body: JSON.stringify({
        error: errorBody.message || 'Unknown error from Brevo',
      }),
    };
  } catch (err) {
    console.error('Brevo subscription error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server could not complete subscription.' }),
    };
  }
}
