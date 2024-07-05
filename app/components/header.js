import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <NavLink href="/" className="text-white text-2xl font-bold cursor-pointer">
          Your App Name
        </NavLink>
        <div className="space-x-4">
          <NavLink href="/app/pages/login">Login</NavLink>
          <NavLink href="/app/pages/register">Register</NavLink>
        </div>
      </div>
    </header>
  );
};

// Custom link component to handle styling
const NavLink = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <div className={className}>
        {children}
      </div>
    </Link>
  );
};

export default Header;