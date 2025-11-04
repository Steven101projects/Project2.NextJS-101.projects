"use client";

import Link from 'next/link'
import ProjectCarousel from "./ProjectCarousel"


interface ProjectProps {
  setShowAll: (value: boolean) => void;
}

export function RecentProjects({ setShowAll }: ProjectProps) {
  return (
    <div id="recent" className="text-center">
    <div id="header" className="text-center my-10">
  <hr className="border-gray-300 mb-3 w-11/12 mx-auto" />

  <div className="flex justify-around items-center w-11/12 mx-auto text-lg">
    <Link href="https://github.com" className="hover:text-blue-800 transition-colors underline italic">
      Github
    </Link>
    <p className="text-[10vh] italic tracking-wide text-gray-800">
      RECENT PROJECTS
    </p>
    <Link href="/blogs" className="hover:text-blue-800 transition-colors underline italic">
      Blogs
    </Link>
  </div>
  <hr className="border-gray-300 mt-4 w-11/12 mx-auto" />
</div>

<div id="showProjs">
<ProjectCarousel />
</div>

      <button
        onClick={() => setShowAll(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        View All Projects
      </button>
    </div>
  );
}

export function ViewAllProjects({ setShowAll }: ProjectProps) {
  return (
    <div id="all" className="text-center">
<div id="header" className="text-center my-10">
  <hr className="border-gray-300 mb-3 w-11/12 mx-auto" />

  <div className="flex justify-around items-center w-11/12 mx-auto text-lg">
    <Link href="https://github.com" className="hover:text-blue-800 transition-colors underline italic">
      Github
    </Link>
    <p className="text-[10vh] italic tracking-wide text-gray-800">
      ALL PROJECTS
    </p>

    <Link href="/blogs" className="hover:text-blue-800 transition-colors underline italic">
      Blogs
    </Link>
  </div>

  <hr className="border-gray-300 mt-4 w-11/12 mx-auto" />
</div>
      <button
        onClick={() => setShowAll(false)}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Back to Recent Projects
      </button>
    </div>
  );
}
