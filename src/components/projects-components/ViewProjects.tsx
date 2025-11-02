"use client";

interface ProjectProps {
  setShowAll: (value: boolean) => void;
}

export function RecentProjects({ setShowAll }: ProjectProps) {
  return (
    <div className="text-center">
      {/* Your recent projects content here */}
      <p className="mb-4 text-lg">Showing recent projects...</p>

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
    <div className="text-center">
      {/* Your full project list content here */}
      <p className="mb-4 text-lg">Showing all projects...</p>

      <button
        onClick={() => setShowAll(false)}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
      >
        Back to Recent Projects
      </button>
    </div>
  );
}
