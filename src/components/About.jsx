import React from "react";

function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[85vh] bg-[#fbfbfb] flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-12 md:py-20 gap-10"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 sm:mb-6 leading-snug">
          AI<span className="text-purple-500"> PRESENTATION</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Revolutionizing Presentation Creation
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          AI PRESENTATION uses cutting-edge technology to convert text, documents, PDFs,
          websites, and videos into professional presentations.
        </p>
      </div>

      {/* Video Section */}
      <div className="w-full md:w-1/2">
        <div className="w-full aspect-video rounded-xl shadow-xl overflow-hidden">
          <iframe
            src="/video.mp4"
            title="AI Presentation Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
