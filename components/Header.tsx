import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav className="flex gap-2">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
