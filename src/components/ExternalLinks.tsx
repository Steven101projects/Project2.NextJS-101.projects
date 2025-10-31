import Link from 'next/link'

export default function ExternalLinks() {
  return (
    <nav className="absolute flex justify-center items-center space-x-3 text-2xl text-black bottom-4 right-12">
      <Link
        href="mailto:your@email.com"
        className="hover:text-black hover:underline transition duration-200"
      >
        Email
      </Link>
      <span>|</span>
      <Link
        href="https://www.linkedin.com/in/your-linkedin"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        LinkedIn
      </Link>
      <span>|</span>
      <Link
        href="https://github.com/your-github"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        GitHub
      </Link>
      <span>|</span>
      <Link
        href="https://www.instagram.com/your-instagram"
        target="_blank"
        className="hover:text-black hover:underline transition duration-200"
      >
        Instagram
      </Link>
    </nav>
  )
}
