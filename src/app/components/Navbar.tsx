import Link from "next/link"
import style from "util"

export default function Navbar() {
  return (
    <div className="navigation">
        <nav className="nav">
            <Link href="/"> Home</Link>
            <Link href="/posts"> Posts</Link>
            <Link href="/about"> About</Link>
            <Link href="/contact"> Contact</Link>
        </nav>
    </div>
  )
}
