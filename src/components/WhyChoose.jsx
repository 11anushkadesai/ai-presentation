import React from "react";
import {
  FaLanguage,
  FaEdit,
  FaBolt,
  FaMousePointer,
  FaGem,
  FaFilePowerpoint,
} from "react-icons/fa";

function WhyChoose() {
  const reasons = [
    {
      icon: <FaBolt className="text-3xl text-pink-500" />,
      title: "Save 95% of Creation Time",
      description:
        "Create complete 20+ slide presentations in under 60 seconds with PPT AI’s industry-leading technology.",
    },
    {
      icon: <FaMousePointer className="text-3xl text-green-500" />,
      title: "No Learning Curve Required",
      description:
        "No training needed—just add your content and receive AI-generated presentations instantly.",
    },
    {
      icon: <FaGem className="text-3xl text-yellow-500" />,
      title: "Free Premium Templates",
      description:
        "While others charge $15–30 per template, Our site provides its entire premium collection for free.",
    },
    {
      icon: <FaFilePowerpoint className="text-3xl text-blue-500" />,
      title: "Complete PowerPoint Compatibility",
      description: "Export directly to .PPTX with 100% design preservation.",
    },
  ];

  return (
    <section className="bg-[#fbfbfb] px-4 sm:px-6 md:px-10 py-12 md:py-20 text-gray-800">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4">
          Why Choose <span className="text-purple-600">AI PRESENTATION?</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700">
          Transform Your Presentation Process
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {reasons.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1">{item.icon}</div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
