// app/book/page.tsx
'use client'; // This is a client component

import { FormEvent, useState } from 'react';

export default function BookPage() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookingData = Object.fromEntries(formData.entries());

    // Basic validation example
    if (!bookingData.booking_date || !bookingData.party_size || !bookingData.booking_time || !bookingData.user_name || !bookingData.user_email || !bookingData.user_phone) {
      setMessage('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('/api/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Booking successful! ' + (result.message || ''));
        (event.target as HTMLFormElement).reset(); // Reset form
      } else {
        setMessage('Booking failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setMessage('Booking failed: An unexpected error occurred.');
    }
  }

  return (
    <div>
      <h1>Book a Table</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="booking_date">Date:</label>
          <input type="date" id="booking_date" name="booking_date" required />
        </div>
        <div>
          <label htmlFor="party_size">Party Size:</label>
          <input type="number" id="party_size" name="party_size" min="1" required />
        </div>
        <div>
          <label htmlFor="booking_time">Time:</label>
          <input type="time" id="booking_time" name="booking_time" required />
        </div>
        <div>
          <label htmlFor="user_name">Name:</label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div>
          <label htmlFor="user_email">Email:</label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div>
          <label htmlFor="user_phone">Phone:</label>
          <input type="tel" id="user_phone" name="user_phone" required />
        </div>
        <div>
          <label htmlFor="special_requests">Special Requests (Optional):</label>
          <textarea id="special_requests" name="special_requests"></textarea>
        </div>
        <button type="submit">Submit Booking</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}