import fs from 'fs';
import pdf from 'pdf-parse';

async function extractTextFromPDF() {
  try {
    const dataBuffer = fs.readFileSync('./Avi Watwani.pdf');
    const data = await pdf.default(dataBuffer);
    console.log(data.text);
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
  }
}

extractTextFromPDF();
