# law-react-project

# Lawyer Appointment Booking Application

Welcome to the **Lawyer Appointment Booking Web App**! This React-based application allows users to browse lawyer profiles and schedule appointments with ease. The app includes multiple pages, interactive UI elements, charts, routing, and persistent data storage using `localStorage`.

---

## 📌 Key Features

### Global Layout

- Responsive Navbar visible on all pages (including 404 error page)
- Footer visible on all pages except the error page
- Site logo, name, navigation menu, and social media links

### Homepage

- Banner section with background image
- Lawyer listing section:
  - Shows 6 lawyers initially
  - "Show All" button loads all 12 lawyer cards
  - Lawyer Card includes: Image, Name, Speciality, Experience, License Number, and "View Details" button
- Success stats section:
  - 4 square cards with Icon, Number (animated with `react-countup`), and Title

### Lawyer Details Page

- Profile details header with slogan
- Display lawyer image, name, experience, speciality, fee
- Availability array with badges
- Appointment card with:
  - Availability badge
  - "Book Now" button

### Appointment Booking System

- Prevents duplicate bookings
- Success & error toast messages
- Saves appointments to `localStorage` for persistence

### Bookings Page

- Displays all booked appointments in 1-column card layout
- Each card shows Name, Fee, Speciality, and Cancel button
- Canceling removes appointment from `localStorage`
- Shows empty state message with Home button if no appointments exist

### Error Page (404)

- Custom-designed UI
- Navbar visible, Footer hidden
- Redirect button to Home page

### Recharts Integration

- Visualize appointment fees
- Chart updates automatically when appointments are added or removed
- Hidden when no appointments exist

### Routing & Loading States

- Loading animation on every route change
- Fallback loader during data fetch
- Handles invalid dynamic route IDs

### Optional Enhancements

- Validate booking based on lawyer availability
- Display "Unavailable" badge if lawyer is not available today
- Dynamic document title per route using `useLocation()`
