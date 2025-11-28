"use client";
import { useState } from "react";
import projects from "@/data/projects";

export default function AllProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const sortedProjects = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: "base" })
  );

  return (
    <div className="w-full py-8">

      {/* Modal overlay */}
    {selectedProject && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-5xl relative"
      onClick={(e) => e.stopPropagation()}
    >
<button
  onClick={() => setSelectedProject(null)}
  className="absolute top-2 right-2.5 w-9 h-9 flex items-center justify-center text-base font-medium text-black  transition duration-200"
>
  X
</button>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Left text content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{selectedProject.title}</h2>

          <p className="text-gray-700 mb-6">{selectedProject.description}</p>

          <p className="font-semibold mb-1">Design</p>
          <p className="text-gray-700 mb-6">{selectedProject.design || "Coming soon"}</p>

          <p className="font-semibold mb-1">Documentation</p>
          <p className="text-gray-700">{selectedProject.documentation || "Coming soon"}</p>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-6 justify-items-center">
        {sortedProjects.map((p) => (
          <div
            key={p.id}
            className="flex flex-col bg-white border rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
            style={{
              width: "100%",
              maxWidth: "650px",
            }}
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-between p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-[Inter]=">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed font-[Poppins]">
                {p.description}
              </p>

              <button
                onClick={() => setSelectedProject(p)}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
