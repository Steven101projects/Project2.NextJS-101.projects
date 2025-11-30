import Link from 'next/link'

export default function ExternalLinks() {
  return (
    <nav className="absolute flex justify-center items-center space-x-3 text-2xl text-black bottom-4 right-12">
      <Link
        href="mailto:castroconi101@gmail.com"
        className="hover:text-black hover:underline transition duration-200"
      >
        Email
      </Link>
      <span>|</span>
      <Link
        href="https://www.linkedin.com/in/nico-steven-castro-5a5285332/"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        LinkedIn
      </Link>
      <span>|</span>
      <Link
        href="https://github.com/Steven101projects"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        GitHub
      </Link>
      <span>|</span>
      <Link
        href="https://www.instagram.com/theultracheese_3/#"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        Instagram
      </Link>
    </nav>
  )
}
