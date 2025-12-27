import fs from "fs";
import { PDFParse } from "pdf-parse";

async function extractTextFromPDF() {
  try {
    const pdfPath = process.argv[2] || "./Avi Watwani.pdf";
    const dataBuffer = fs.readFileSync(pdfPath);
    const parser = new PDFParse({ data: dataBuffer });
    const { text } = await parser.getText();
    console.log(text || "");
    await parser.destroy();
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
  }
}

extractTextFromPDF();
