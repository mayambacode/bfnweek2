import Link from "next/link"

export default function Navbar() {
  return (
    <div>
        <nav>
            <Link href="/"> Home</Link>
            <Link href="/posts"> Posts</Link>
            <Link href="/about"> About</Link>
            <Link href="/contact"> Contact</Link>
        </nav>
    </div>
  )
}
