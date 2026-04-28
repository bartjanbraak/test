import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/garage', label: 'Garage' },
  { href: '/compare', label: 'Compare' },
  { href: '/caption-generator', label: 'Captions' },
  { href: '/dream-build', label: 'Dream Build' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-300">
          Porsche Visual Garage
        </Link>
        <ul className="hidden gap-5 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
