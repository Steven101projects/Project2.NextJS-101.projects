'use client';
import { useState } from "react";
import services from "@/data/services";

export default function ServicesGridComponent() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="w-full py-8">
      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[70px] justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between bg-white border-black border-2 rounded-[25px] shadow-sm overflow-hidden p-6 text-center hover:shadow-md transition-all duration-300"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "500px",
            }}
          >
            {/* Image */}
            <div className="w-full h-48 mb-4 overflow-hidden rounded-[15px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Title */}
            <div className="flex flex-col items-center mt-2">
              <p className="text-gray-600 text-sm mb-2">0{service.id}</p>
              <h3 className="italic font-semibold text-lg underline underline-offset-4">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed mt-4">
              {service.description}
            </p>

            {/* Button */}
            <div className="mt-auto mb-2">
              <button
                onClick={() => setSelectedService(service)}
                className="text-white text-xs bg-black px-4 py-[4px] rounded-[3px] hover:bg-gray-800 transition-colors"
              >
                Know more →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex justify-center items-center z-50 px-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-lg transform transition-all duration-300 scale-100 hover:scale-[1.01]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl hover:text-black"
            >
              &times;
            </button>

            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {selectedService.title}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {selectedService.details ||
                "This service provides comprehensive solutions with full-stack implementation, performance optimization, and scalable architecture tailored to your project needs."}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="mt-2 px-5 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
