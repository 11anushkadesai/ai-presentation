import { useState } from "react";

function FileUploads() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [design, setDesign] = useState("simple");
  const [pptLink, setPptLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const themes = [
    { key: "simple", img: "/simple.png" },
    { key: "corporate", img: "/corporate.png" },
    { key: "modern", img: "/modern.png" },
    { key: "acqua", img: "/acqua.png" },
    { key: "indian", img: "/indian.png" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleSubmit = async () => {
    if (!pdfFile || !title.trim()) return alert("Please provide title and PDF");

    setLoading(true);
    setStatus("⏳ Generating presentation...");
    setSummary("");
    setPptLink("");

    try {
      const formData = new FormData();
      formData.append("pdf", pdfFile);
      formData.append("title", title);
      formData.append("theme", design);

      const res = await fetch("http://localhost:5000/explain", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setSummary(data.summary);
        setPptLink(data.pptLink);
        setStep(5);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-4 sm:p-6 w-full">
            <label className="block mb-2 font-semibold text-xl sm:text-2xl text-blue-700">
              Enter Presentation Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 sm:py-3 text-base sm:text-xl border rounded-md shadow-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              onClick={() => setStep(2)}
              className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg rounded-md shadow-md"
            >
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div className="p-4 sm:p-6 w-full">
            <label className="block mb-2 font-semibold text-xl sm:text-2xl text-blue-700">
              Upload PDF
            </label>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="mb-4"
            />
            <div className="flex justify-between flex-wrap gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                Previous
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="p-4 sm:p-6 w-full">
            <p className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">
              Choose Design
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
              {themes.map(({ key, img }) => (
                <div
                  key={key}
                  onClick={() => setDesign(key)}
                  className={`border rounded-xl p-2 shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
                    design === key ? "border-blue-600 ring-2 ring-blue-300" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`${key} preview`}
                    className="w-full h-44 sm:h-48 object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between flex-wrap gap-4">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                Previous
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                Generate
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="p-4 sm:p-6 w-full">
            <p className="text-xl sm:text-2xl font-semibold mb-4 text-blue-700">
              Generating Presentation...
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{status}</p>
            <div className="flex justify-between flex-wrap gap-4">
              <button
                onClick={() => setStep(3)}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-base sm:text-lg rounded-md shadow-md"
              >
                {loading ? "Please wait..." : "Start Generation"}
              </button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="p-4 sm:p-6 w-full max-h-[75vh] overflow-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-700">
              AI Generated Presentation
            </h3>
            {status && (
              <p className="mb-4 text-sm sm:text-base text-gray-600">{status}</p>
            )}
            {summary && (
              <div className="mb-4 bg-white p-4 sm:p-6 border rounded-md text-sm sm:text-base whitespace-pre-line break-words shadow-md">
                {summary}
              </div>
            )}
            {pptLink && (
              <a
                href={pptLink}
                download
                className="text-blue-600 underline font-medium block mb-4 text-base sm:text-lg"
              >
                ⬇ Download PPT
              </a>
            )}
            <button
              onClick={() => setStep(4)}
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-400 text-white text-base sm:text-lg rounded-md shadow-md"
            >
              Previous
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const steps = ["Title", "Upload", "Design", "Generate", "AI Presentation"];

  return (
    <div
      id="PPT"
      className="relative min-h-[70vh] flex flex-col items-center justify-center bg-[#fbfbfb] text-gray-800 font-sans overflow-hidden px-4 py-10"
    >
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
        {steps.map((label, index) => (
          <span
            key={index}
            className={`text-base sm:text-lg md:text-2xl font-bold transition-colors ${
              step >= index + 1 ? "text-blue-700" : "text-gray-400"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="bg-white w-full max-w-6xl rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] border border-gray-200 p-4 sm:p-10 mx-4 transform transition-transform duration-300 hover:scale-[1.01] overflow-auto">
        {renderStep()}
      </div>
    </div>
  );
}

export default FileUploads;
