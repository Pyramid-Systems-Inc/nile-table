// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/book">Book a Table</Link></li>
      </ul>
    </nav>
  );
}