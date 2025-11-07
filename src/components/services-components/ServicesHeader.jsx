import Link from "next/link";

export default function ServicesHeader() {
  return (
<div>
 <header className="flex justify-between items-center mt-[8px] pr-[60px]">
      {/* Left side title */}
      <Link href="/" className="px-2 py-1 text-8xl">
        1O1~
      </Link>

      {/* Right side content */}
      <div className="flex items-center justify-end space-x-10">
        {/* Navigation */}
        <nav className="flex items-center space-x-2 text-[23px]">
          <Link
            href="/home"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Home
          </Link>
          <span>|</span>
          <Link
            href="/about"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            About
          </Link>
          <span>|</span>
          <Link
            href="/projects"
            className="hover:underline hover:font-semibold transition-all duration-300"
          >
            Projects
          </Link>
        </nav>

        {/* Keep your SERVICES part unchanged */}
        <p className="px-2 py-1 text-7xl">SERVICES</p>
      </div>
    </header>
  <hr className="border-gray-300 mb-3 w-10/12 ml-52" />
</div>
  );
}
