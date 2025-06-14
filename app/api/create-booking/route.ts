// app/api/create-booking/route.ts
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const bookingData = await req.json();

    // Basic validation
    if (!bookingData.booking_date || !bookingData.party_size || !bookingData.booking_time || !bookingData.user_name || !bookingData.user_email || !bookingData.user_phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    // Ensure party_size is a number
    const partySize = parseInt(bookingData.party_size, 10);
    if (isNaN(partySize) || partySize <= 0) {
        return NextResponse.json({ error: 'Invalid party size' }, { status: 400 });
    }

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          user_name: bookingData.user_name,
          user_email: bookingData.user_email,
          user_phone: bookingData.user_phone,
          booking_date: bookingData.booking_date,
          booking_time: bookingData.booking_time,
          party_size: partySize,
          special_requests: bookingData.special_requests,
          // table_id will be null for now
          // status defaults to 'pending' in the DB
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Booking created successfully', data }, { status: 201 });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message || 'An unexpected error occurred' }, { status: 500 });
  }
}