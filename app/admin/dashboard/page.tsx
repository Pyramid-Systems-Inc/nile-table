// app/admin/dashboard/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define a type for your booking data for better type safety
interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  user_name: string;
  user_email: string;
  party_size: number;
  status: string;
  special_requests?: string;
  created_at: string;
  // Add other fields as necessary
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Basic MVP check - NOT SECURE FOR PRODUCTION
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
      if (isLoggedIn !== 'true') {
        router.push('/admin/login');
        return; // Stop further execution if not logged in
      }
    }

    async function fetchBookings() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/admin/get-bookings');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBookings(data.bookings || []);
        setError(null);
      } catch (err: any) {
        console.error("Failed to fetch bookings:", err);
        setError(err.message || "Failed to load bookings.");
        setBookings([]);
      } finally {
        setIsLoading(false);
      }
    }

    if (typeof window !== 'undefined' && localStorage.getItem('isAdminLoggedIn') === 'true') {
        fetchBookings();
    }
  }, [router]);

  if (typeof window !== 'undefined' && localStorage.getItem('isAdminLoggedIn') !== 'true') {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Bookings List</h2>
      {isLoading && <p>Loading bookings...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!isLoading && !error && bookings.length === 0 && <p>No bookings found.</p>}
      {!isLoading && !error && bookings.length > 0 && (
        <table border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name</th>
              <th>Email</th>
              <th>Party Size</th>
              <th>Status</th>
              <th>Special Requests</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{new Date(booking.booking_date).toLocaleDateString()}</td>
                <td>{booking.booking_time}</td>
                <td>{booking.user_name}</td>
                <td>{booking.user_email}</td>
                <td>{booking.party_size}</td>
                <td>{booking.status}</td>
                <td>{booking.special_requests || 'N/A'}</td>
                <td>{new Date(booking.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}