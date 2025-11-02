import Link from "next/link";

export default function ProjectHeader() {
  return (
    <header className="flex justify-between items-center mt-[8px] pr-[60px]">
      {/* Left side — fixed title size */}
      <p className="px-2 py-1 text-8xl">PROJECTS</p>

      {/* Right side — fixed nav links */}
      <nav className="flex items-center space-x-2 text-[28px]">
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
          Services
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
