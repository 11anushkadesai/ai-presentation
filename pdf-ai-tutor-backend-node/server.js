// const express = require("express");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");
// const fs = require("fs");
// require("dotenv").config();

// const app = express();
// app.use(cors());

// const upload = multer({ dest: "uploads/" });

// app.post("/explain", upload.single("pdf"), async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//   try {
//     const fileBuffer = fs.readFileSync(req.file.path);
//     const pdfData = await pdfParse(fileBuffer);

//     const text = pdfData.text.slice(0, 1024); // limit for API
//     const response = await axios.post(
//       "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
//       { inputs: text },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const explanation = response.data[0]?.summary_text || "No explanation found";
//     res.json({ explanation });

//   } catch (err) {
//     console.error("API Error:", err.response?.data || err.message);
//     res.status(500).json({ error: "Failed to process the PDF" });
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));


// const express = require("express");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");
// require("dotenv").config();
// const fs = require("fs");

// const app = express();
// app.use(cors());

// const upload = multer({ dest: "uploads/" });

// app.post("/explain", upload.single("pdf"), async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//   try {
//     const fileBuffer = fs.readFileSync(req.file.path);
//     const pdfData = await pdfParse(fileBuffer);

//     const fullText = pdfData.text;
//     const maxChunkLength = 1000;
//     const textChunks = fullText.match(/(.|[\r\n]){1,1000}/g); // split every 1000 chars

//     let explanation = "";

//     for (const chunk of textChunks) {
//       const prompt = `Explain the following content in detail as if you're teaching a beginner:\n\n${chunk}`;

//       const response = await axios.post(
//         "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
//         { inputs: prompt },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const part = response.data[0]?.summary_text || "";
//       explanation += part + "\n\n";
//     }

//     res.json({ explanation: explanation.trim() });

//   } catch (err) {
//     console.error("API Error:", err.response?.status, err.response?.statusText);
//     res.status(500).json({ error: "Error processing PDF or fetching explanation" });
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));
// const PptxGenJS = require("pptxgenjs");

// app.post("/explain", upload.single("pdf"), async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//   try {
//     const fileBuffer = fs.readFileSync(req.file.path);
//     const pdfData = await pdfParse(fileBuffer);

//     const fullText = pdfData.text;
//     const maxChunkLength = 1000;
//     const textChunks = fullText.match(/(.|[\r\n]){1,1000}/g);

//     let explanation = "";

//     for (const chunk of textChunks) {
//       const prompt = `Explain the following content in detail as if you're teaching a beginner:\n\n${chunk}`;

//       const response = await axios.post(
//         "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
//         { inputs: prompt },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const part = response.data[0]?.summary_text || "";
//       explanation += part + "\n\n";
//     }

//     // Generate PPT
//     // Generate PPT
//     const pptx = new PptxGenJS();
//     const slides = explanation.split("\n\n");

//     slides.forEach((slideText) => {
//       const slide = pptx.addSlide();
//       slide.addText(slideText, {
//         x: 0.5,
//         y: 0.5,
//         w: 9,
//         h: 5,
//         fontSize: 18,
//         color: "363636",
//         align: "left",
//       });
//     });

//     const fileName = `Explanation_${Date.now()}.pptx`;
//     const filePath = `./outputs/${fileName}`;

//     await pptx.writeFile({ fileName: filePath });

//     res.json({
//       explanation: explanation.trim(),
//       pptPath: `http://localhost:5000/download/${fileName}`,
//     });

//   } catch (err) {
//     console.error("API Error:", err.response?.status, err.response?.statusText || err.message);
//     res.status(500).json({ error: "Failed to generate explanation or PPT" });
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));



// const express = require("express");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");
// const fs = require("fs");
// const PptxGenJS = require("pptxgenjs");
// require("dotenv").config();

// const app = express();
// app.use(cors());

// // Serve files from the "outputs" directory
// app.use("/download", express.static("outputs"));

// // Make sure uploads and outputs folders exist
// if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
// if (!fs.existsSync("outputs")) fs.mkdirSync("outputs");

// const upload = multer({ dest: "uploads/" });

// app.post("/explain", upload.single("pdf"), async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//   try {
//     const fileBuffer = fs.readFileSync(req.file.path);
//     const pdfData = await pdfParse(fileBuffer);

//     const fullText = pdfData.text;
//     const textChunks = fullText.match(/(.|[\r\n]){1,1000}/g); // split into 1000-char chunks

//     let explanation = "";

//     for (const chunk of textChunks) {
//       const prompt = `Organize the following content into chapters with titles and bullet points for a presentation:\n\n${chunk}`;

//       const response = await axios.post(
//         "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
//         { inputs: prompt },
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const part = response.data[0]?.summary_text || "";
//       explanation += part + "\n\n";
//     }

//     // Generate PPT
//     const pptx = new PptxGenJS();
//     const slides = explanation.split("\n\n");

//     slides.forEach((slideText) => {
//       const slide = pptx.addSlide();
//       slide.addText(slideText, {
//         x: 0.5,
//         y: 0.5,
//         w: 9,
//         h: 5,
//         fontSize: 18,
//         color: "363636",
//         align: "left",
//       });
//     });

//     const fileName = `Explanation_${Date.now()}.pptx`;
//     const pptPath = `outputs/${fileName}`;

//     await pptx.writeFile({ fileName: pptPath });

//     res.json({
//       explanation: explanation.trim(),
//       pptLink: `http://localhost:5000/download/${fileName}`,
//     });

//   } catch (err) {
//     console.error("API Error:", err.response?.data || err.message);
//     res.status(500).json({ error: "Error processing PDF or generating PPT" });
//   }
// });

// app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
const express = require("express");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const axios = require("axios");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const PptxGenJS = require("pptxgenjs");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/download", express.static("outputs"));

if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");
if (!fs.existsSync("outputs")) fs.mkdirSync("outputs");

const upload = multer({ dest: "uploads/" });

// 🟦 Theme Configurations (colors per theme)
const themeStyles = {
  simple: {
    titleColor: "003366",
    bulletColor: "444444",
  },
  acqua: {
    titleColor: "007C91", // Acqua blue
    bulletColor: "FFFFFF",
  },
  corporate: {
    titleColor: "FFFFFF",
    bulletColor: "FFFFFF",
  },
  modern: {
    titleColor: "000000",
    bulletColor: "000000",
  },
  indian: {
  titleColor: "E4D0AA",     
  bulletColor: "E4D0AA",    
},
};

// ✅ Get background image path
function getBackgroundImage(theme, type, index = "") {
  if (type === "cover") {
    return path.resolve(__dirname, `assets/${theme}/cover.png`);
  }
  return path.resolve(__dirname, `assets/${theme}/content/${index}.png`);
}

// ✅ Convert text into slides
function parseSlidesFromSentences(text) {
  const sentences = text.split(/(?<=\.)\s+/);
  const slides = [];

  for (let i = 0; i < sentences.length; i += 3) {
    const title = `Slide ${Math.floor(i / 3) + 1}`;
    const bullets = sentences.slice(i, i + 3).map(s => s.trim()).filter(Boolean);
    slides.push({ title, bullets });
  }

  return slides;
}

// ✅ Main POST route
app.post("/explain", upload.single("pdf"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const presentationTitle = req.body.title || "Presentation";
  const theme = req.body.theme || "simple";
  const style = themeStyles[theme] || themeStyles["simple"];

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(fileBuffer);
    const fullText = pdfData.text;
    const textChunks = fullText.match(/(.|[\r\n]){1,1000}/g) || [fullText];

    let fullSummary = "";
    for (const chunk of textChunks) {
      const prompt = `Summarize this content clearly for a PowerPoint presentation:\n\n${chunk}`;
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        { inputs: prompt },
        {
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      const part = response.data[0]?.summary_text || "";
      fullSummary += part + " ";
    }

    // 🖼️ Generate PPT
    const pptx = new PptxGenJS();
    const slidesData = parseSlidesFromSentences(fullSummary.trim());

    // ➕ First Slide (cover)
    const titleSlide = pptx.addSlide();
    const coverPath = getBackgroundImage(theme, "cover");
    titleSlide.background = { path: coverPath };
    titleSlide.addText(presentationTitle, {
      x: 1.5,
      y: 2.5,
      w: 7,
      fontSize: 36,
      bold: true,
      color: style.titleColor,
      align: "center",
      fontFace: "Arial",
    });

    // 🖼️ Content Slides (max 20)
    const MAX_SLIDES = 20;
    const MAX_IMAGES = 5;

    for (let i = 0; i < MAX_SLIDES; i++) {
      const contentIndex = i % slidesData.length;
      const imageIndex = (i % MAX_IMAGES) + 1;
      const slideData = slidesData[contentIndex];

      const slide = pptx.addSlide();
      const contentBg = getBackgroundImage(theme, "content", imageIndex);
      slide.background = { path: contentBg };

      slide.addText(slideData.title, {
        x: 0.5,
        y: 0.4,
        w: 9,
        fontSize: 26,
        bold: true,
        color: style.titleColor,
        fontFace: "Arial",
      });

      const bullets = slideData.bullets.map((b) => `• ${b}`).join("\n");
      slide.addText(bullets, {
        x: 0.8,
        y: 1.2,
        w: 9,
        h: 5,
        fontSize: 18,
        color: style.bulletColor,
        fontFace: "Arial",
        lineSpacingMultiple: 1.2,
      });
    }

    // ✅ Save the file
    const fileName = `Presentation_${Date.now()}.pptx`;
    const pptPath = `outputs/${fileName}`;
    await pptx.writeFile({ fileName: pptPath });

    res.json({
      pptLink: `http://localhost:5000/download/${fileName}`,
      summary: fullSummary.trim(),
    });

  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Error processing PDF or generating PPT" });
  }
});

app.listen(5000, () =>
  console.log("✅ Server running on http://localhost:5000")
);
