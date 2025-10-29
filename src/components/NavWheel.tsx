import Link from "next/link";

export default function NavWheel() {
  return (
    <div className="wheel flex flex-col text-white justify-center">
      <Link href="/projects" className="text-[2vw] mb-[3vw] ml-[2vw] hover:underline hover:text-gray-300 transition">
        Projects
      </Link>
      <Link href="/about" className="text-[2vw] mb-[3vw] ml-[6vw] hover:underline hover:text-gray-300 transition">
        About
      </Link>
      <Link href="/services" className="text-[2vw] mb-[3vw] ml-[6vw] hover:underline hover:text-gray-300 transition">
        Services
      </Link>
      <Link href="/home" className="text-[2vw] ml-[2vw] hover:underline hover:text-gray-300 transition">
        Home
      </Link>
    </div>
  );
}
