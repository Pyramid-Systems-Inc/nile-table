// components/Footer.tsx
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', padding: '1rem', color: 'white', textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {new Date().getFullYear()} The Nile's Table. All rights reserved.</p>
      <p>Placeholder Footer Content</p>
    </footer>
  );
}