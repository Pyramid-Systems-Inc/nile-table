import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // MVP: Hardcoded credentials
    const HARDCODED_EMAIL = 'admin@example.com';
    const HARDCODED_PASSWORD = 'password123';

    if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}