import Link from "next/link";

export default function NavWheel() {
  return (
    <div className="wheel flex flex-col text-white justify-center">
      <Link
        href="/projects"
        className="relative text-[2vw] mb-[3vw] ml-[2vw] hover:text-black transition duration-500 transform hover:scale-110 overflow-hidden rounded-md hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300"
      >
        <span className="relative z-10">Projects</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
      </Link>

      <Link
        href="/about"
        className="relative text-[2vw] mb-[3vw] ml-[6vw] hover:text-black transition duration-500 transform hover:scale-110 overflow-hidden rounded-md hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300"
      >
        <span className="relative z-10">About</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
      </Link>

      <Link
        href="/services"
        className="relative text-[2vw] mb-[3vw] ml-[6vw] hover:text-black transition duration-500 transform hover:scale-110 overflow-hidden rounded-md hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300"
      >
        <span className="relative z-10">Services</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
      </Link>

      <Link
        href="/home"
        className="relative text-[2vw] ml-[2vw] hover:text-black transition duration-500 transform hover:scale-110 overflow-hidden rounded-md hover:bg-gradient-to-r hover:from-gray-300 hover:via-white hover:to-gray-300"
      >
        <span className="relative z-10">Home</span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
      </Link>
    </div>
  );
}
