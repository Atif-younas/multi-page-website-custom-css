import '../styles/navbar.css'
import Link from "next/link"
export default function Navbar () {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/jobs">Jobs</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/apply">Apply</Link>
                </li>
            </ul>
        </nav>
    )
}