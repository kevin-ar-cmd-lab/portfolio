'use client';

import { useState, useEffect } from 'react';

let confetti;
if (typeof window !== 'undefined') {
  confetti = require('canvas-confetti').default;
}

export default function NewsletterForm({ variant = 'card' }) {
  const isCompact = variant === 'compact';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  const validateEmail = (email) => {
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(trimmed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus({ type: 'error', message: 'Please enter your email.' });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setStatus({ type: 'error', message: 'Invalid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        const alreadyRegistered = Boolean(data.alreadyRegistered);
        setIsAlreadyRegistered(alreadyRegistered);
        setStatus({
          type: 'success',
          message:
            data.message ||
            (alreadyRegistered
              ? 'Welcome back! This email is already registered to the newsletter.'
              : 'You are now subscribed to our newsletter.'),
        });
        setEmail('');
        setShowModal(true);

        if (!alreadyRegistered && confetti) {
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 },
          });
        }
      } else {
        setStatus({ type: 'error', message: data.error || 'Subscription failed.' });
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className={
          isCompact
            ? 'w-full text-left'
            : 'bg-slate-800/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full text-center text-white'
        }
      >
        <h2
          className={
            isCompact
              ? 'text-lg font-semibold text-gray-900 dark:text-gray-100'
              : 'text-2xl font-bold mb-2 text-indigo-400'
          }
        >
          Stay Updated
        </h2>
        <p
          className={
            isCompact
              ? 'mb-4 text-sm text-gray-600 dark:text-gray-400'
              : 'mb-6 text-sm text-gray-300'
          }
        >
          Subscribe to our newsletter for the latest updates.
        </p>

        <form
          onSubmit={handleSubmit}
          className={isCompact ? 'flex flex-col gap-3' : 'flex flex-col space-y-4'}
          aria-busy={isSubmitting}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status) setStatus(null);
            }}
            disabled={isSubmitting}
            className={
              isCompact
                ? 'px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
                : 'px-4 py-2 rounded-md bg-slate-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed'
            }
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              isCompact
                ? 'bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed'
            }
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>

        <div className="mt-3 text-sm" role="status" aria-live="polite">
          {status?.type === 'error' && (
            <p className={isCompact ? 'text-red-600 dark:text-red-400' : 'text-red-400'}>
              {status.message}
            </p>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center relative">
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {isAlreadyRegistered ? 'Welcome back!' : '🎉 Thank You!'}
            </h3>
            <p className="text-gray-700">
              {isAlreadyRegistered
                ? 'This email is already registered to our newsletter.'
                : "You're now subscribed to our newsletter."}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
