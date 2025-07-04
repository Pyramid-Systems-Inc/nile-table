-- The Nile's Table Database Schema
-- Run this in your Supabase SQL Editor to ensure all required tables exist

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Bookings table (should already exist from Phase 1)
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  party_size INTEGER NOT NULL,
  table_id UUID REFERENCES tables(id),
  special_requests TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tables table (restaurant seating configuration)
CREATE TABLE IF NOT EXISTS tables (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  capacity INTEGER NOT NULL,
  location TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin users table (should already exist from Phase 1)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Menu items table (for Phase 2)
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  allergen_icons JSONB DEFAULT '[]'::jsonb,
  available BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Restaurant settings table (for Phase 2/3)
CREATE TABLE IF NOT EXISTS restaurant_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sample data if tables are empty

-- Sample tables
INSERT INTO tables (name, capacity, location) 
SELECT * FROM (VALUES 
  ('Table 1', 2, 'Window'),
  ('Table 2', 2, 'Window'),
  ('Table 3', 4, 'Main Dining'),
  ('Table 4', 4, 'Main Dining'),
  ('Table 5', 6, 'Main Dining'),
  ('Table 6', 8, 'Private Section'),
  ('Bar Seat 1', 1, 'Bar'),
  ('Bar Seat 2', 1, 'Bar')
) AS v(name, capacity, location)
WHERE NOT EXISTS (SELECT 1 FROM tables);

-- Sample menu items (Egyptian cuisine)
INSERT INTO menu_items (name, description, price, category, allergen_icons) 
SELECT * FROM (VALUES 
  ('Hummus Royale', 'Traditional hummus topped with spiced lamb and pine nuts', 18.00, 'Appetizers', '["nuts"]'::jsonb),
  ('Baba Ganoush', 'Smoky roasted eggplant dip with tahini and pomegranate', 16.00, 'Appetizers', '["sesame"]'::jsonb),
  ('Pharaoh''s Mezze', 'Selection of traditional dips with warm pita bread', 28.00, 'Appetizers', '["gluten", "sesame"]'::jsonb),
  ('Grilled Nile Perch', 'Fresh fish with herbs, served with saffron rice', 42.00, 'Main Courses', '["fish"]'::jsonb),
  ('Lamb Kofta', 'Spiced ground lamb with yogurt sauce and flatbread', 38.00, 'Main Courses', '["gluten", "dairy"]'::jsonb),
  ('Vegetarian Moussaka', 'Layers of eggplant, lentils, and béchamel sauce', 32.00, 'Main Courses', '["dairy", "gluten"]'::jsonb),
  ('Baklava Trio', 'Three varieties of honey-soaked pastry with pistachios', 14.00, 'Desserts', '["nuts", "gluten", "dairy"]'::jsonb),
  ('Egyptian Coffee', 'Traditional cardamom-spiced coffee', 8.00, 'Beverages', '[]'::jsonb),
  ('Hibiscus Tea', 'Refreshing herbal tea served hot or iced', 6.00, 'Beverages', '[]'::jsonb)
) AS v(name, description, price, category, allergen_icons)
WHERE NOT EXISTS (SELECT 1 FROM menu_items);

-- Default restaurant settings
INSERT INTO restaurant_settings (setting_key, setting_value)
SELECT * FROM (VALUES 
  ('opening_hours', '{"monday": {"open": "17:00", "close": "23:00"}, "tuesday": {"open": "17:00", "close": "23:00"}, "wednesday": {"open": "17:00", "close": "23:00"}, "thursday": {"open": "17:00", "close": "23:00"}, "friday": {"open": "17:00", "close": "24:00"}, "saturday": {"open": "16:00", "close": "24:00"}, "sunday": {"open": "16:00", "close": "22:00"}}'::jsonb),
  ('booking_duration', '120'::jsonb),
  ('max_party_size', '8'::jsonb),
  ('advance_booking_days', '30'::jsonb)
) AS v(setting_key, setting_value)
WHERE NOT EXISTS (SELECT 1 FROM restaurant_settings WHERE setting_key = v.setting_key);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date_time ON bookings(booking_date, booking_time);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category);
CREATE INDEX IF NOT EXISTS idx_menu_items_available ON menu_items(available);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to menu items
CREATE POLICY IF NOT EXISTS "Menu items are viewable by everyone" ON menu_items
  FOR SELECT USING (available = true);

-- Create policies for bookings (customers can create, admins can manage)
CREATE POLICY IF NOT EXISTS "Anyone can create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Bookings are viewable by everyone" ON bookings
  FOR SELECT USING (true);

-- Note: Admin policies will be enhanced in Phase 3 with proper authentication
