import React from "react";
import {
  FaRobot,
  FaFilePdf,
  FaRocket,
  FaPalette,
  FaChartBar,
} from "react-icons/fa";

function KeyFeatures() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-purple-600 mb-4" />,
      title: "AI-Powered PDF to PPT",
      description:
        "Automatically converts PDF documents into stunning, well-structured presentations within seconds.",
    },
    {
      icon: <FaFilePdf className="text-4xl text-blue-600 mb-4" />,
      title: "PDF Input Support",
      description:
        "Upload your PDF and let AI convert it into a polished presentation instantly.",
    },
    {
      icon: <FaRocket className="text-4xl text-pink-500 mb-4" />,
      title: "Lightning Fast",
      description:
        "Save hours of manual work with instant AI slide generation.",
    },
    {
      icon: <FaPalette className="text-4xl text-green-600 mb-4" />,
      title: "Design Themes",
      description:
        "Pick from modern, corporate, simple, and cultural slide themes.",
    },
    {
      icon: <FaChartBar className="text-4xl text-yellow-500 mb-4" />,
      title: "Smart Summarization",
      description:
        "Automatically summarizes and organizes content into bullet points.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full bg-[#fbfbfb] px-4 sm:px-6 md:px-10 py-12 md:py-20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
        Key Features of <span className="text-purple-600">AI PRESENTATION</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12">
        AI-Powered Presentation Creation That Works
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-left"
          >
            <div className="flex items-center">{feature.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 mt-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
