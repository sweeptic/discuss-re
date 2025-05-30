import { Navbar, NavbarBrand } from '@heroui/navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Navbar className="shadow mb-6 bg-amber-200">
        <NavbarBrand>
          <Link href="/" className="font-bold">
            Discuss
          </Link>
        </NavbarBrand>
      </Navbar>
      header
    </div>
  );
}
