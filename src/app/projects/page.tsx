"use client";

import ProjectHeader from "@/components/projects-components/ProjectsHeader";
import {ViewAllProjects, RecentProjects,} from "@/components/projects-components/ViewProjects";
import { useState } from "react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Projects() {
  const quotes = [
    {
      text: "Every brushstroke is a step toward mastery.",
      author: "Nikola Tesla",
    },
    { text: "Creativity takes courage.", author: "Henri Matisse" },
    {
      text: "Art enables us to find ourselves and lose ourselves at the same time.",
      author: "Thomas Merton",
    },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  ];

  const [showAll, setShowAll] = useState(false);

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <ProjectHeader />
      <div
        id="quoteBlock"
        className="relative flex justify-center items-center mt-6"
      >
        {/* Image */}
        <div className="w-[55vw] h-[45vh] relative shadow-md rounded-md overflow-hidden">
          <Image
            src="/quotes.jpg"
            alt="Quote Block"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Quote text overlay */}
        <div className="absolute text-center text-white px-6">
          <p className="text-[5vh] italic mb-2 drop-shadow-lg">
            &quot;{randomQuote.text}&quot;
          </p>
          <p className="text-[3vh] font-light drop-shadow-md">
            &ndash; {randomQuote.author}
          </p>
        </div>
      </div>

      <div id="projects" className="mt-10">
        {showAll ? (
          <ViewAllProjects setShowAll={setShowAll} />
        ) : (
          <RecentProjects setShowAll={setShowAll} />
        )}
      </div>
    </div>
  );
}
