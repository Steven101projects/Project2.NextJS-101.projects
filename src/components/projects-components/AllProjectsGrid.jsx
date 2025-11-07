"use client";
import projects from "@/data/projects";

export default function AllProjectsGrid() {
  // Sort projects alphanumerically by title (e.g., Project 01, Project 02)
  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" })
  );

  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-6 justify-items-center">
        {sortedProjects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col bg-white border rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            style={{
              width: "100%",
              maxWidth: "650px",
              height: "auto",
            }}
          >
            {/* Project image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project content */}
            <div className="flex flex-col justify-between p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-[Inter]">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed font-[Poppins]">
                {p.description}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
