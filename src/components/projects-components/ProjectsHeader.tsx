import Link from "next/link";

export default function ProjectHeader() {
  return (
    <header className="flex justify-between items-center mt-[8px] pr-[60px]">
      {/* Left side — fixed title size */}
          <Link href="/" className="px-2 py-1 text-7xl">
            1O1 ~
          </Link>

      {/* Right side — fixed nav links */}
      <nav className="flex items-center space-x-2 text-[23px]">
        <Link
          href="/home"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          Home
        </Link>
        <span>|</span>
        <Link
          href="/services"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          Skills
        </Link>
        <span>|</span>
        <Link
          href="/about"
          className="hover:underline hover:font-semibold transition-all duration-300"
        >
          About
        </Link>
      </nav>
    </header>
  );
}
