"use client";

import Link from 'next/link'
import ProjectCarousel from "./ProjectCarousel"
import AllProjectsGrid from './AllProjectsGrid'


interface ProjectProps {
  setShowAll: (value: boolean) => void;
}

export function RecentProjects({ setShowAll }: ProjectProps) {
  return (
    <div id="recent" className="text-center">
    <div id="header" className="text-center my-10">
  <hr className="border-gray-300 mb-3 w-11/12 mx-auto" />

  <div className="flex justify-around items-center w-11/12 mx-auto text-xl">
    <Link href="https://github.com" className="hover:text-blue-800 transition-colors underline italic">
      Github
    </Link>
    <p className="text-[10vh] italic tracking-wide text-black">
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
        className="relative bottom-12 hover:text-blue-800 transition-colors underline italic"
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
    <p className="text-[10vh] italic tracking-wide text-black">
      ALL 1O1:PROJECTS
    </p>

    <Link href="/blogs" className="hover:text-blue-800 transition-colors underline italic">
      Blogs
    </Link>
  </div>

  <hr className="border-gray-300 mt-4 w-11/12 mx-auto" />
</div>
<div id="showProjs">
<AllProjectsGrid />
</div>

      <button
        onClick={() => setShowAll(false)}
        className="mt-4 mb-3.5 hover:text-blue-800 transition-colors underline italic"
      >
        Back to Recent Projects
      </button>
    </div>
  );
}
