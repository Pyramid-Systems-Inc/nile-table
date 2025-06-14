# Design Prompts for v0 - The Nile's Table

This document contains a series of prompts for the v0 design AI to generate visual designs for "The Nile's Table" project. Each section will detail requirements for specific components or pages based on the project's README and ROADMAP.

## 1. General Branding and Style Guide

**Objective:** Establish the foundational visual identity for "The Nile's Table" website.

**Prompt for v0:**

"Generate a comprehensive style guide for a website named 'The Nile's Table'. The brand aesthetic is 'Modern luxury meets ancient heritage.'

Key elements to define:

*   **Color Palette:**
    *   Primary: Deep Navy Blue (#001f3f)
    *   Secondary: Gold (#ffd700)
    *   Accent: Sandy Beige (#f5f5dc)
    *   Neutral: White (#ffffff)
    *   Provide variations and shades for each, and guidance on their usage (e.g., primary for backgrounds, gold for CTAs and highlights).
*   **Typography:**
    *   Suggest elegant, clean, and modern font pairings. One for headings (perhaps a sophisticated serif or a distinctive sans-serif) and one for body text (highly readable sans-serif).
    *   Provide examples of font weights and styles for different text elements (H1, H2, H3, paragraph, captions).
*   **Imagery Style:**
    *   Art direction for photography: Professional, high-contrast food photography. Minimalist, well-lit shots of the restaurant interior.
    *   Guidance on image treatments (e.g., slightly desaturated, warm tones).
*   **Iconography:**
    *   Suggest a style for icons (e.g., minimalist line icons, subtly gilded).
    *   Examples for common UI elements and specific restaurant needs (e.g., allergen icons, location pin, phone, email).
*   **Logo:**
    *   Design a minimalist logo combining a lotus flower and a dinner plate. Show variations (e.g., full color, monochrome, icon-only).
*   **Textures & Patterns:**
    *   Suggest subtle uses of papyrus textures or hieroglyphic-inspired patterns for borders, backgrounds, or decorative elements. These should be elegant and not overpowering.
*   **Overall Mood & Feel:**
    *   Luxurious, sophisticated, immersive, high-quality, welcoming, and reflective of a premium dining experience with ancient Egyptian heritage.
*   **UI Elements (General Guidance):**
    *   Buttons: Style for primary and secondary call-to-action buttons. Consider rounded corners, subtle gradients, or gold accents.
    *   Forms: Clean and user-friendly input fields, dropdowns, and calendar pickers.
    *   Cards: Style for displaying content like menu items or gallery images.

Deliverables: A visual style guide document including color swatches, typography examples, logo variations, and examples of UI elements reflecting the described aesthetic."

## 2. Homepage Design

**Objective:** Design an immersive and captivating homepage that immediately conveys the restaurant's luxury and heritage, encouraging users to book a table.

**Reference:** Adhere to the "General Branding and Style Guide".

**Prompt for v0:**

"Design the Homepage for 'The Nile's Table'.

**Key Sections & Elements:**

1.  **Hero Section:**
    *   **Background:** Full-width, captivating video background (e.g., slow-motion food preparation, elegant plating, subtle ambiance shots of the restaurant). The video should loop seamlessly and have an overlay to ensure text readability.
    *   **Headline:** Prominently display the headline: "An Ancient Tradition of Flavor, Reimagined." Typography should be large, elegant, and highly readable against the video. Consider gold accents.
    *   **Call-to-Action (CTA):** A clear, visually distinct "Book a Table" button. This should be a primary CTA, possibly using the gold accent color.
    *   **Navigation:** Ensure the main navigation (Navbar) is visible and accessible, either overlaid on the top of the hero or just above it.

2.  **Introduction/Welcome Section (Optional, below Hero):**
    *   A brief, welcoming paragraph about the restaurant's philosophy or unique selling proposition.
    *   Potentially a high-quality image showcasing a signature dish or an elegant interior shot.

3.  **Featured Menu Highlights (Optional):**
    *   A small, visually appealing section showcasing 2-3 signature dishes with beautiful imagery and short descriptions. This could link to the full menu page.
    *   Use card-based design consistent with the style guide.

4.  **Ambiance/Story Teaser:**
    *   A section that hints at the restaurant's unique atmosphere and story.
    *   Could use a parallax scrolling effect with a background image of the restaurant's interior or a subtle papyrus/hieroglyphic pattern.
    *   Include a short blurb and a CTA to "Discover Our Story" (linking to the About Us page).

5.  **Footer:**
    *   Include the standard website footer with navigation links, contact information, social media icons, and copyright.

**Specific Requirements:**

*   **Layout:** Clean, modern, and spacious. Guide the user's eye towards the primary CTA.
*   **Animations:** Incorporate subtle, elegant animations using Framer Motion principles (e.g., fade-ins for text, gentle parallax for background elements). Animations should enhance the luxury feel, not distract.
*   **Responsiveness:** The design must be fully responsive for desktop, tablet, and mobile views. Ensure the video background works well or has a suitable fallback image on mobile.
*   **Imagery:** Use placeholders for images and video, but indicate dimensions and style (high-contrast, professional food/interior shots).

Deliverables: High-fidelity mockups for desktop, tablet, and mobile views of the Homepage. Include specifications for animations and interactions."

## 3. Interactive Menu Page Design

**Objective:** Design a visually appealing and highly interactive menu page that allows users to easily browse, filter, and view details about menu items. This should not be a static PDF.

**Reference:** Adhere to the "General Branding and Style Guide".

**Prompt for v0:**

"Design the Interactive Menu Page for 'The Nile's Table'.

**Key Sections & Elements:**

1.  **Page Title:** Clear title, e.g., "Our Culinary Journey" or "Explore The Menu".
2.  **Category Filters:**
    *   Prominently display filters for menu categories (e.g., "Appetizers," "Soups," "Main Courses," "Desserts," "Beverages").
    *   Design these as clear, clickable buttons or tabs.
    *   Active filter should be visually distinct.
3.  **Menu Item Grid/List:**
    *   Display menu items in a clean grid or list format. Each item should initially show:
        *   Dish Name
        *   Small Thumbnail Image (optional, but preferred)
        *   Price
        *   Short Description (optional, or visible on hover/focus)
    *   The layout should be spacious and easy to scan.
    *   Consider subtle hover effects on menu items to indicate interactivity.
4.  **Menu Item Modal (On Click):**
    *   When a user clicks on a menu item, a modal window should appear.
    *   **Modal Content:**
        *   Large, beautiful, high-contrast photo of the dish.
        *   Detailed Description of the dish.
        *   Price.
        *   Key Allergen Icons (e.g., gluten-free, vegan, nuts). Use icons consistent with the style guide.
        *   Clear "Close" button for the modal.
    *   The modal should overlay the page content and be dismissible by clicking outside or an 'X' icon.
    *   Ensure the modal design is elegant and consistent with the overall branding.

**Specific Requirements:**

*   **Layout:** Modern, clean, and highly usable. Prioritize readability and visual appeal of food items.
*   **Interactivity:** Smooth transitions when filtering categories. Elegant appearance and dismissal of the modal.
*   **Animations:** Subtle animations for loading items, filter selection, and modal transitions (e.g., fade-in, scale-up for modal).
*   **Responsiveness:** Fully responsive design for desktop, tablet, and mobile. The grid/list and modal must adapt gracefully to different screen sizes.
*   **Imagery:** Use placeholders for dish images, indicating professional, high-quality food photography style.

Deliverables:
*   High-fidelity mockups for the main menu page (desktop, tablet, mobile), showing the filter and item grid.
*   High-fidelity mockups for the menu item modal (desktop, tablet, mobile).
*   Specifications for filter interactions, animations, and modal behavior."

## 4. About Us Page Design

**Objective:** Design an engaging "About Us" page that tells the story of "The Nile's Table," introduces key figures (like a fictional chef), and showcases the restaurant's unique ambiance.

**Reference:** Adhere to the "General Branding and Style Guide".

**Prompt for v0:**

"Design the 'About Us' Page for 'The Nile's Table'.

**Key Sections & Elements:**

1.  **Page Title:** Clear and inviting, e.g., "Our Story," "The Heart of The Nile's Table."
2.  **Restaurant's Philosophy/Mission:**
    *   A compelling narrative section that articulates the restaurant's vision, its connection to Egyptian heritage, and its commitment to quality and experience.
    *   Use elegant typography and consider incorporating a subtle background texture or pattern from the style guide.
3.  **Meet the Chef (Fictional):**
    *   A dedicated section to introduce the fictional head chef.
    *   Include a professional, warm portrait (placeholder image).
    *   A short biography highlighting their passion, culinary background, and connection to Egyptian cuisine.
4.  **The Space/Ambiance:**
    *   Showcase the restaurant's interior design and atmosphere.
    *   Use a combination of high-quality images:
        *   Wider shots showing the dining area.
        *   Close-ups of unique design details (e.g., decor, lighting, table settings).
    *   Consider a small gallery or carousel for these images.
    *   Accompany with text that describes the ambiance and the intended customer experience.
5.  **Our Commitment/Values (Optional):**
    *   A brief section on commitments (e.g., to fresh ingredients, authentic recipes, exceptional service).
6.  **Call to Action (Subtle):**
    *   A gentle CTA, perhaps "View Our Menu" or "Book Your Experience," linking to the respective pages.

**Specific Requirements:**

*   **Layout:** Story-driven and visually rich. Balance text and imagery effectively.
*   **Tone:** Warm, inviting, and authentic, while maintaining the brand's luxurious feel.
*   **Imagery:** Use placeholders for professional photos of the fictional chef and restaurant space, adhering to the style guide's art direction.
*   **Animations:** Subtle fade-ins for text and images as the user scrolls.
*   **Responsiveness:** Fully responsive design for desktop, tablet, and mobile.

Deliverables: High-fidelity mockups for the 'About Us' page (desktop, tablet, mobile)."

## 5. Gallery Page Design

**Objective:** Design a visually stunning gallery page to showcase high-quality images of the restaurant's food, drinks, and ambiance.

**Reference:** Adhere to the "General Branding and Style Guide".

**Prompt for v0:**

"Design the 'Gallery' Page for 'The Nile's Table'.

**Key Sections & Elements:**

1.  **Page Title:** e.g., "A Glimpse of The Nile," "Visual Delights."
2.  **Image Grid:**
    *   Implement a masonry grid layout for a dynamic and modern feel.
    *   The grid should display high-quality photos of:
        *   Beautifully plated food items.
        *   Artistic shots of drinks/cocktails.
        *   Images showcasing the restaurant's ambiance, decor, and unique architectural details.
    *   Images should be clickable.
3.  **Lightbox/Modal View (On Image Click):**
    *   Clicking an image in the grid should open it in a larger lightbox or modal view.
    *   The lightbox should allow navigation between images (next/previous arrows).
    *   Display a short caption for each image if available (optional).
    *   Clear "Close" button for the lightbox.
    *   The lightbox design should be clean, focusing attention on the image.
4.  **Filtering (Optional but Recommended):**
    *   Consider simple filters (e.g., "Food," "Drinks," "Ambiance") if the gallery becomes extensive.
    *   Filters should be styled consistently with other UI elements.

**Specific Requirements:**

*   **Layout:** Emphasize the visual content. The masonry grid should be well-balanced and aesthetically pleasing.
*   **Performance:** Consider lazy loading for images to ensure fast page load times.
*   **Animations:** Subtle hover effects on grid images. Smooth transitions for opening and navigating the lightbox.
*   **Responsiveness:** The masonry grid and lightbox must be fully responsive across desktop, tablet, and mobile devices.
*   **Imagery:** Use placeholders for high-quality, professional photography, adhering to the style guide's art direction.

Deliverables:
*   High-fidelity mockups for the main gallery page (desktop, tablet, mobile), showing the masonry grid.
*   High-fidelity mockups for the image lightbox/modal view (desktop, tablet, mobile).
*   Specifications for image interactions, animations, and lightbox behavior."

## 6. Contact Page Design

**Objective:** Design a clear, user-friendly contact page that provides all necessary information for users to get in touch or find the restaurant.

**Reference:** Adhere to the "General Branding and Style Guide".

**Prompt for v0:**

"Design the 'Contact' Page for 'The Nile's Table'.

**Key Sections & Elements:**

1.  **Page Title:** e.g., "Contact Us," "Get In Touch."
2.  **Contact Information Block:**
    *   Clearly display:
        *   **Address:** Full street address.
        *   **Phone Number:** Clickable for mobile users (tel: link).
        *   **Email Address:** Clickable (mailto: link).
    *   Use clear typography and consider icons (from the style guide) next to each piece of information.
3.  **Opening Hours:**
    *   Display the restaurant's opening hours for each day of the week in an easy-to-read format.
4.  **Embedded Google Map:**
    *   Allocate space for an embedded Google Map showing the restaurant's location.
    *   Ensure the map embed is styled to fit the page aesthetically (e.g., consider custom map styles if v0 can suggest or if it's a follow-up task).
5.  **Contact Form (Optional but Recommended):**
    *   A simple contact form for general inquiries. Fields:
        *   Name
        *   Email
        *   Subject
        *   Message
    *   Styled according to the UI elements in the general style guide.
    *   Clear submit button.
6.  **Social Media Links (Optional):**
    *   If applicable, icons linking to the restaurant's social media profiles.

**Specific Requirements:**

*   **Layout:** Clean, organized, and straightforward. Information should be easy to find.
*   **Usability:** Ensure phone numbers and email addresses are easily clickable. The map should be interactive.
*   **Visuals:** While primarily informational, maintain the brand's elegant aesthetic. Consider a relevant background image or subtle textures if appropriate, without sacrificing readability.
*   **Responsiveness:** Fully responsive design for desktop, tablet, and mobile. The map and form must adapt well.

Deliverables: High-fidelity mockups for the 'Contact' page (desktop, tablet, mobile)."

## 7. Booking Engine UI Design (User Flow)

**Objective:** Design a seamless, intuitive, and visually appealing user interface for the table booking process.

**Reference:** Adhere to the "General Branding and Style Guide", especially for form elements, buttons, and calendar pickers.

**Prompt for v0:**

"Design the user interface for the multi-step table booking engine for 'The Nile's Table'. The process should be clear, simple, and efficient.

**User Flow & Key Screens/Components:**

1.  **Initiation:**
    *   The user clicks a "Book a Table" button (design already covered in Homepage/Navbar, but ensure consistency).

2.  **Step 1: Selection Form (Date, Party Size, Time)**
    *   **Layout:** A clean, uncluttered form.
    *   **Date Picker:**
        *   Visually appealing calendar picker.
        *   Clearly indicate selected date.
        *   Consider disabling past dates or dates when the restaurant is closed (this is backend logic, but UI should reflect it if possible, e.g., greyed out).
    *   **Party Size Selector:**
        *   User-friendly input (e.g., dropdown, stepper input) for 1-8 people.
    *   **Time Slot Display:**
        *   Once Date and Party Size are selected, display a list of available time slots.
        *   Design how these time slots are presented (e.g., buttons, a selectable list).
        *   Clearly indicate selected time.
        *   Show a loading state if time slots are being fetched.
    *   **"Next" or "Find Table" Button:** Clear CTA to proceed.

3.  **Step 2: User Details Form**
    *   **Layout:** Continuation of the clean form design.
    *   **Input Fields:**
        *   Name (Text input)
        *   Email (Email input)
        *   Phone Number (Tel input)
        *   Special Requests (Textarea, optional)
    *   All fields should be clearly labeled and styled according to the style guide.
    *   **"Back" Button:** Allow users to go back to the previous step.
    *   **"Confirm Booking" or "Review Booking" Button:** Clear CTA.

4.  **Step 3: Confirmation/Summary Page**
    *   **Layout:** Clearly present a summary of the booking details:
        *   Date
        *   Time
        *   Party Size
        *   Name
        *   Email
        *   Phone
        *   Special Requests (if any)
    *   **"Confirm & Book" Button:** Final confirmation CTA.
    *   **"Edit Details" or "Back" Button:** Allow users to modify details.

5.  **Step 4: Booking Success/Thank You Message**
    *   A clear message confirming the booking was successful.
    *   Reiterate key booking details.
    *   Mention that a confirmation email has been sent.
    *   Optionally, suggest adding to calendar or links to menu/gallery.

**Specific Requirements:**

*   **Visual Hierarchy:** Guide the user through each step clearly.
*   **Error Handling:** Design how form validation errors are displayed (e.g., inline messages next to fields).
*   **Loading States:** Design subtle loading indicators for when data is being fetched (e.g., available time slots).
*   **Responsiveness:** All steps of the booking flow must be fully responsive for desktop, tablet, and mobile.
*   **Accessibility:** Ensure forms are accessible (e.g., proper labels, keyboard navigation).

Deliverables:
*   High-fidelity mockups for each step/screen of the booking flow (desktop, tablet, mobile).
*   Mockups showing error states and loading states.
*   Specifications for interactions, transitions between steps, and form element states (e.g., focus, disabled)."

## 8. Admin Secure Login Page Design

**Objective:** Design a clean, professional, and secure-looking login page for the private admin dashboard.

**Reference:** While it's an internal tool, it should feel like a professional product. It can be simpler than the public site but should use a consistent, clean aesthetic. Consider using the primary color (Deep Navy Blue) and neutrals from the main style guide for a cohesive feel, but without the ornate elements.

**Prompt for v0:**

"Design the Secure Login Page for 'The Nile's Table' Admin Dashboard (e.g., `your-site.com/admin`).

**Key Sections & Elements:**

1.  **Page Layout:**
    *   Centered login form on a clean, professional background.
    *   Subtle branding (e.g., 'The Nile's Table - Admin Panel' or the logo).
2.  **Login Form:**
    *   Clear input fields for:
        *   Email Address
        *   Password
    *   A prominent "Login" or "Sign In" button.
    *   Optional: "Forgot Password?" link (though functionality might be out of scope for initial design, placeholder is fine).
3.  **Error Messaging:**
    *   Clear, non-intrusive display area for login error messages (e.g., "Invalid credentials," "An error occurred").

**Specific Requirements:**

*   **Aesthetic:** Professional, clean, trustworthy, and secure. Avoid overly decorative elements.
*   **Clarity:** The purpose of the page and the required actions should be immediately obvious.
*   **Responsiveness:** Fully responsive design for desktop, tablet, and mobile (though desktop is primary for admin).
*   **Form Elements:** Use clear, standard form elements. Button styles should be clear and distinct.

Deliverables: High-fidelity mockups for the Admin Login page (desktop, tablet, mobile). Include mockups for error states."

## 9. Admin Dashboard Layout & Bookings Management Design

**Objective:** Design a functional and easy-to-navigate admin dashboard, with a primary focus on viewing, managing, and updating bookings.

**Reference:** Professional, clean aesthetic. Prioritize clarity and efficiency for admin tasks. Use a simplified version of the main style guide's color palette (Deep Navy Blue, neutrals, perhaps gold for accents or status indicators).

**Prompt for v0:**

"Design the main Admin Dashboard for 'The Nile's Table'. This dashboard will be used by restaurant staff to manage bookings and restaurant operations.

**Key Sections & Elements:**

1.  **Overall Dashboard Layout:**
    *   **Navigation:**
        *   A clear sidebar or top navigation for different admin sections (e.g., "Dashboard/Bookings," "Table Management," "Menu Management (Future)," "Settings (Future)").
        *   The current active section should be clearly indicated.
    *   **Main Content Area:** This area will display the content for the selected navigation item.

2.  **Bookings Management View (Default View):**
    *   **Title:** e.g., "Booking Management" or "All Bookings."
    *   **Filtering & Sorting:**
        *   Allow filtering bookings by:
            *   Date (e.g., a date picker to show bookings for a specific day, or a range).
            *   Status (e.g., "Pending," "Confirmed," "Cancelled," "Completed").
        *   Allow sorting bookings by:
            *   Booking Date/Time (ascending/descending).
            *   Customer Name.
            *   Status.
        *   Design clear UI elements for these filters and sort controls (e.g., dropdowns, buttons).
    *   **Bookings Table/List:**
        *   Display bookings in a clear, tabular format. Columns should include:
            *   Customer Name
            *   Booking Date
            *   Booking Time
            *   Party Size
            *   Status (use color-coding for status if it enhances clarity, e.g., green for Confirmed, yellow for Pending, red for Cancelled).
            *   Assigned Table (if applicable)
            *   Contact (Phone/Email)
            *   Actions (e.g., "View Details," "Edit," "Update Status").
        *   The table should be paginated if many bookings are expected.
    *   **Quick Stats/Overview (Optional):**
        *   A small section at the top showing key metrics for the selected date/view (e.g., "Total Bookings," "Pending Confirmations," "Total Guests").
    *   **"Add New Booking" Button:** For manual booking entry by staff.

3.  **Booking Details Modal/View (On "View Details" or "Edit"):**
    *   When an admin clicks to view or edit a booking, a modal or a dedicated detail view should appear.
    *   **Content:**
        *   Display all booking information (Name, Email, Phone, Date, Time, Party Size, Special Requests, Status, Assigned Table, Booking ID, Created At).
        *   Allow editing of key fields:
            *   Status (e.g., dropdown: Pending, Confirmed, Cancelled, Seated, Completed).
            *   Assigned Table (e.g., dropdown listing available tables from the 'tables' table).
            *   Notes (internal admin notes for the booking).
        *   "Save Changes" and "Cancel" buttons.
    *   Consider a section for booking history/log if status changes are tracked.

**Specific Requirements:**

*   **Clarity & Efficiency:** The design must make it easy for admins to quickly find information and perform common tasks.
*   **Data Display:** Tables and lists should be highly readable. Use appropriate font sizes and spacing.
*   **Interactivity:** Actions like filtering, sorting, and updating status should feel responsive.
*   **Responsiveness:** Primarily designed for desktop/tablet use, but should be reasonably usable on mobile if necessary.
*   **UI Elements:** Consistent use of buttons, dropdowns, form fields, and table styles.

Deliverables:
*   High-fidelity mockups for the overall Admin Dashboard layout with navigation.
*   High-fidelity mockups for the Bookings Management view (including filters, table, and pagination).
*   High-fidelity mockups for the Booking Details/Edit modal or view.
*   Specifications for interactions, table sorting/filtering behavior, and status update flows."

## 10. Admin Table Management Interface Design

**Objective:** Design a simple interface within the admin dashboard for managing restaurant tables (adding, editing, viewing).

**Reference:** This interface will be part of the Admin Dashboard. It should follow the same professional, clean aesthetic established for the dashboard, prioritizing clarity and efficiency.

**Prompt for v0:**

"Design the 'Table Management' interface within 'The Nile's Table' Admin Dashboard. This section allows staff to manage the restaurant's physical tables.

**Key Sections & Elements (within the Admin Dashboard's main content area when 'Table Management' is selected in the navigation):**

1.  **Section Title:** e.g., "Table Management."
2.  **"Add New Table" Button:** A clear CTA to open a form/modal for adding a new table.
3.  **Tables List/Grid:**
    *   Display existing tables in a list or simple grid format.
    *   For each table, show:
        *   Table Name/Number (e.g., "Table 1," "Window Seat 5," "Patio Booth A")
        *   Capacity (e.g., "4 guests")
        *   Status (Optional, e.g., "Active," "Out of Service" - though this might be advanced for now)
        *   Actions (e.g., "Edit," "Delete" - with confirmation for delete).
    *   The list should be sortable by Name/Number or Capacity.
4.  **Add/Edit Table Form/Modal:**
    *   When "Add New Table" is clicked or an existing table is edited, a form (modal or inline) should appear.
    *   **Input Fields:**
        *   Table Name/Number (Text input, required)
        *   Capacity (Number input, required)
        *   (Optional future fields: Location description e.g. "Near window", "Patio")
    *   "Save Table" and "Cancel" buttons.

**Specific Requirements:**

*   **Simplicity & Clarity:** The interface should be straightforward and easy to understand.
*   **Efficiency:** Admins should be able to quickly add, view, edit, and delete tables.
*   **Consistency:** UI elements (buttons, forms, tables) should be consistent with the rest of the Admin Dashboard design.
*   **Error Handling/Confirmation:**
    *   Provide clear confirmation messages for actions like "Table Saved" or "Table Deleted."
    *   Implement a confirmation step before deleting a table (e.g., "Are you sure you want to delete Table X?").
*   **Responsiveness:** Primarily for desktop/tablet, but ensure basic usability on mobile.

Deliverables:
*   High-fidelity mockups for the Table Management main view (showing the list of tables and 'Add New' button).
*   High-fidelity mockups for the Add/Edit Table form/modal.
*   Mockups for confirmation dialogs (e.g., delete confirmation).
*   Specifications for interactions and form validation."