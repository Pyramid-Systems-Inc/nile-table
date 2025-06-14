# 1. Detailed Feature Breakdown by Module

*   **Module 1: The Public-Facing Website**
    *   **Homepage:**
        *   Task: Hero section with a captivating video background (e.g., slow-motion food prep).
        *   Task: Headline: "An Ancient Tradition of Flavor, Reimagined."
        *   Task: Clear "Book a Table" call-to-action button.
    *   **Interactive Menu Page:**
        *   Task: Not a PDF. A filterable grid of dishes (e.g., "Appetizers," "Main Courses," "Desserts").
        *   Task: Clicking a dish opens a modal window with a large, beautiful photo, a detailed description, price, and key allergen icons (gluten-free, vegan, etc.).
    *   **About Us Page:**
        *   Task: Tells the "story" of the restaurant. Photos of the fictional chef and the space.
    *   **Gallery Page:**
        *   Task: A masonry grid of high-quality photos of food, drinks, and the restaurant's ambiance.
    *   **Contact Page:**
        *   Task: Address, embedded Google Map, phone number, email, and opening hours.

*   **Module 2: The Booking Engine (User Flow)**
    1.  **Initiation:** User clicks "Book a Table."
    2.  **Selection:** A simple form asks for:
        *   Date (calendar picker).
        *   Party Size (e.g., 1-8 people).
        *   Time (shows a list of available time slots based on the date and party size).
    3.  **Slot Logic:** The backend calculates available slots based on rules set in the Admin Dashboard (opening hours, table capacity, booking duration).
    4.  **Details:** User fills in their name, email, and phone number. Optional field for "Special Requests."
    5.  **Confirmation:** A summary page shows the booking details. On confirmation, the booking is saved to the database.
    6.  **Notification:** The user immediately receives a professional-looking confirmation email.

*   **Module 3: The Admin Dashboard (The Client's Tool)**
    *   **Secure Login:**
        *   Task: A private, password-protected route (e.g., `your-site.com/admin`).
    *   **Dashboard View:** A main page showing an at-a-glance summary:
        *   Task: Number of bookings for today.
        *   Task: A timeline view of today's reservations.
        *   Task: Quick stats (e.g., busiest day of the week).
    *   **Bookings Management Tab:**
        *   Task: View all upcoming bookings in a table.
        *   Task: Filter by date.
        *   Task: Manually confirm or cancel a booking (triggering a notification email to the customer).
        *   Task: Ability to add a booking manually (for phone reservations).
    *   **Availability Management Tab (The Most Important Feature):**
        *   **Opening Hours:**
            *   Task: Set default opening/closing times for each day of the week.
        *   **Table Configuration:**
            *   Task: Define the restaurant's tables (e.g., 5x "4-person tables", 10x "2-person tables"). This is used by the engine to calculate capacity.
        *   **Special Dates:**
            *   Task: Block out dates for holidays or private events.
    *   **Menu Management Tab:**
        *   Task: A simple interface to Add, Edit, and Delete menu items and categories without needing a developer.

# 2. Project Roadmap (Phased Development)
*   This phased approach allows you to build and show progress efficiently.

*   **Phase 1: The Foundation (Weeks 1-2)**
    *   **Goal:** Get the core structure and MVP running.
    *   **Detailed Tasks:**
        *   **Next.js Project Setup:**
            *   Task: Initialize a new Next.js project using `create-next-app`.
            *   Task: Install core dependencies: Tailwind CSS, Framer Motion.
            *   Task: Configure Tailwind CSS in `tailwind.config.js` and `globals.css`.
        *   **Supabase Integration:**
            *   Task: Create a new project on Supabase.
            *   Task: Store Supabase URL and anon key as environment variables in `.env.local` for the Next.js project.
            *   Task: Install Supabase client library (`@supabase/supabase-js`).
            *   Task: Create a utility file (e.g., `lib/supabaseClient.js`) to initialize and export the Supabase client.
        *   **Basic Page Structure (Frontend):**
            *   Task: Create page files: `pages/index.js` (Homepage), `pages/contact.js`.
            *   Task: Implement basic Navbar and Footer components with placeholder links and content.
            *   Task: Add placeholder text and structure to Homepage and Contact page.
        *   **Database Schema (Supabase SQL Editor or UI):**
            *   Task: Define and create the `tables` table (columns: `id` (UUID, primary key), `name` (TEXT), `capacity` (INTEGER), `created_at` (TIMESTAMPTZ, default now())).
            *   Task: Define and create the `bookings` table (columns: `id` (UUID, primary key), `user_name` (TEXT), `user_email` (TEXT), `user_phone` (TEXT), `booking_date` (DATE), `booking_time` (TIME), `party_size` (INTEGER), `table_id` (UUID, foreign key referencing `tables.id`), `special_requests` (TEXT, nullable), `status` (TEXT, default 'pending'), `created_at` (TIMESTAMPTZ, default now())).
            *   Task: Define and create the `admin_users` table (columns: `id` (UUID, primary key), `email` (TEXT, unique), `password_hash` (TEXT), `created_at` (TIMESTAMPTZ, default now())).
        *   **Simple Booking Form (Frontend & Backend Logic - Unstyled):**
            *   Task: Create a new page `pages/book.js`.
            *   Task: Implement a basic HTML form on `pages/book.js` for Date, Party Size, Time (text input initially), Name, Email, Phone.
            *   Task: Write a client-side JavaScript function to handle form submission, gathering form data.
            *   Task: Create a Next.js API route `pages/api/create-booking.js`.
            *   Task: Implement backend logic in `pages/api/create-booking.js` to receive form data, perform basic validation, and insert data into the `bookings` table using the Supabase client.
        *   **Admin Area Setup (Basic):**
            *   Task: Create directory `pages/admin/`.
            *   Task: Create a basic login page `pages/admin/login.js` with email/password fields.
            *   Task: Create an API route `pages/api/admin/auth/login.js` to handle admin login (initially, can compare against a hardcoded credential or a single entry in `admin_users`).
            *   Task: Implement basic session/token management upon successful login (e.g., using cookies or NextAuth.js later, for MVP a simple client-side flag might suffice but is not secure for production).
            *   Task: Create a protected admin dashboard page `pages/admin/dashboard.js`.
        *   **Basic Admin Bookings View (Unstyled):**
            *   Task: On `pages/admin/dashboard.js`, fetch all bookings from the `bookings` table via a new API route (`pages/api/admin/get-bookings.js`).
            *   Task: Display fetched bookings in a simple HTML table.
    *   **Outcome:** A functional but rough system. You can prove the end-to-end booking flow works.

*   **Phase 2: The Polished Product (Weeks 3-5)**
    *   **Goal:** Create the final, client-ready version of the public site and booking system.
    *   **Detailed Tasks:**
        *   **UI/UX Implementation (Frontend):**
            *   Task: Apply Tailwind CSS styling to Homepage, Contact page, About Us page (`pages/about.js`), Gallery page (`pages/gallery.js`), and Menu page (`pages/menu.js`) based on "The Pharaoh's" branding guidelines (colors, typography).
            *   Task: Implement Framer Motion animations for hero section elements, page transitions, and on-hover effects for interactive elements.
            *   Task: Ensure all public-facing pages are fully responsive across desktop, tablet, and mobile devices.
            *   Task: Source/create and integrate high-quality stock photos for gallery and content. Integrate video background for Homepage hero.
            *   Task: Design and implement the restaurant logo, integrate into Navbar and other relevant areas.
        *   **Interactive Menu Page (Frontend):**
            *   Task: Create `menu_items` table in Supabase (columns: `id` (UUID, PK), `name` (TEXT), `description` (TEXT), `price` (DECIMAL), `category` (TEXT), `image_url` (TEXT), `allergen_icons` (JSONB or TEXT ARRAY)).
            *   Task: Populate `menu_items` table with sample dish data.
            *   Task: Fetch menu items from Supabase on `pages/menu.js` via an API route (`pages/api/get-menu-items.js`).
            *   Task: Implement UI for category filtering (e.g., buttons: "Appetizers," "Main Courses").
            *   Task: Implement client-side JavaScript logic to filter and re-render the displayed dishes based on selected category.
            *   Task: Create a reusable React modal component for displaying dish details.
            *   Task: On dish item click, populate and display the modal with large photo, description, price, and allergen info.
        *   **Smart Booking Slot Logic (Backend & Frontend):**
            *   Task: (Admin Prerequisite - can be mocked initially) Ensure `restaurant_settings` (for opening hours, booking duration) and `tables` (with capacities) are configurable or have defaults in DB.
            *   Task: Create Next.js API route `pages/api/get-available-slots.js`.
                *   Sub-task: API accepts `date` and `party_size` as input.
                *   Sub-task: Logic fetches opening hours for the given `date`.
                *   Sub-task: Logic fetches existing bookings for the `date`.
                *   Sub-task: Logic fetches all `tables` and their capacities.
                *   Sub-task: Logic iterates through time slots (e.g., every 30 mins) within opening hours.
                *   Sub-task: For each slot, calculate currently booked capacity and check against available tables for the requested `party_size`.
                *   Sub-task: API returns a list of available time strings.
            *   Task: (Frontend Booking Form) Modify `pages/book.js`: when Date and Party Size are selected/changed, call `pages/api/get-available-slots.js`.
            *   Task: Dynamically populate the Time selection input (e.g., dropdown) with the fetched available slots.
        *   **Automated Confirmation Emails:**
            *   Task: Sign up for Resend (or SendGrid).
            *   Task: Install Resend SDK (`npm install resend`).
            *   Task: Store Resend API key in `.env.local`.
            *   Task: Create a React Email template (or HTML template) for booking confirmations, including placeholders for booking details.
            *   Task: Modify `pages/api/create-booking.js`: after successfully saving a booking, use Resend SDK to send the confirmation email to the user's provided email address.
        *   **Admin Dashboard UI Refinement (Frontend):**
            *   Task: Apply consistent Tailwind CSS styling to `pages/admin/login.js` and `pages/admin/dashboard.js`.
            *   Task: Improve the layout and styling of the bookings table on the admin dashboard for better readability and usability.
        *   **Admin Booking Management (Frontend & Backend):**
            *   Task: (Frontend) Add "Confirm" and "Cancel" buttons/actions next to each booking in the admin bookings list.
            *   Task: (Frontend) Implement a form/modal in the admin dashboard for manually adding a new booking.
            *   Task: Create API route `pages/api/admin/update-booking.js` (or similar).
                *   Sub-task: Accepts `booking_id` and `new_status` (e.g., 'confirmed', 'cancelled').
                *   Sub-task: Updates the booking's status in the Supabase `bookings` table.
                *   Sub-task: (Optional) Trigger a notification email to the customer about the status change.
            *   Task: Ensure the manual booking form in admin uses an API route (can be `pages/api/create-booking.js` or a dedicated admin one) to save new bookings.
    *   **Outcome:** The complete, beautiful, and functional product that you will feature in your portfolio.

*   **Phase 3: The Advanced Admin Tools (Weeks 6-7)**
    *   **Goal:** Showcase deep business logic and make the tool truly powerful for a client.
    *   **Detailed Tasks:**
        *   **Availability Management (Admin Frontend & Backend):**
            *   **Opening Hours:**
                *   Task: (Frontend) Create a new section/tab in the admin dashboard for "Availability Settings".
                *   Task: (Frontend) Design a form to set default opening and closing times for each day of the week (Monday-Sunday).
                *   Task: (Backend) Create an API route (e.g., `pages/api/admin/settings/opening-hours.js`) to save/update these settings (e.g., into a `restaurant_config` table or JSONB column in Supabase).
            *   **Table Configuration:**
                *   Task: (Frontend) In "Availability Settings", create an interface to Add, Edit, and Delete restaurant tables (fields: table name/identifier, capacity).
                *   Task: (Backend) Create API routes (e.g., `pages/api/admin/tables/[tableId].js`, `pages/api/admin/tables/index.js`) for full CRUD operations on the `tables` table in Supabase.
            *   **Special Dates/Blockouts:**
                *   Task: (Frontend) Interface to add/manage special dates (e.g., holidays, private events) where the restaurant is closed or has modified hours. Allow selecting date or date range.
                *   Task: (Backend) Create API route (e.g., `pages/api/admin/settings/blockouts.js`) to save/manage these blockout dates (e.g., in a new `blocked_periods` table).
                *   Task: Modify `pages/api/get-available-slots.js` to check and exclude blocked dates/times.
        *   **Menu Management (Admin Frontend & Backend):**
            *   Task: (Frontend) Create a new "Menu Management" section/tab in the admin dashboard.
            *   Task: (Frontend) Interface to Add, Edit, Delete menu categories (if using a separate `menu_categories` table).
            *   Task: (Frontend) Interface to Add, Edit, Delete menu items (fields: name, description, price, category, image upload, allergen selection).
            *   Task: (Backend) Create API routes for CRUD operations on `menu_categories` (if applicable).
            *   Task: (Backend) Create API routes for CRUD operations on `menu_items` table, including handling image uploads to Supabase Storage.
        *   **Admin Dashboard Analytics/Charts (Frontend):**
            *   Task: (Backend) Create API routes to aggregate booking data:
                *   e.g., `pages/api/admin/analytics/bookings-summary.js` (total bookings today/week/month).
                *   e.g., `pages/api/admin/analytics/daily-timeline.js` (bookings for today, grouped by time).
                *   e.g., `pages/api/admin/analytics/peak-times.js` (busiest days/times).
            *   Task: (Frontend) Integrate a charting library (e.g., Chart.js, Recharts) into the admin dashboard's main view.
            *   Task: (Frontend) Display charts for:
                *   Number of bookings (today, this week, this month).
                *   Visual timeline of today's reservations.
                *   Statistics on busiest days/times.
    *   **Outcome:** A project that feels less like a website and more like a complete Software-as-a-Service (SaaS) product.

*   **Phase 4: Future Features (For discussion with clients)**
    *   Loyalty Program / Customer Accounts
    *   Online Ordering & Takeaway System
    *   Gift Card Purchasing
    *   Customer Review System