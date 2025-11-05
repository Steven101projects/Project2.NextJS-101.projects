"use client";
import projects from "@/data/projects";

export default function AllProjectsGrid() {
  return (
    <div className="w-full">
      {/* Centering the grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4 justify-items-center">
        {projects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col justify-between items-center p-6 bg-white border rounded-3xl shadow-md transition-transform duration-300 hover:scale-105"
            style={{
              width: "100%",  // Cards will fill 100% of grid column
              maxWidth: "650px",  // Make sure cards don't get too large
              height: "250px", // Let content flow naturally
            }}
          >
            <h3 className="text-xl font-semibold text-center mb-3">{p.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-3">{p.description}</p>
            <a
              href={p.link}
              className="text-blue-600 hover:underline text-sm text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
