import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to Our App</h1>
            <Link href="/app/pages/login.js">
              Login
            </Link>
            <Link href="/app/pages/register.js">
              Register
            </Link>
        </div>
    );
}
