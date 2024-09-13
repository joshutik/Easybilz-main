import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async () => {
  const input = document.getElementById('pdf-form'); // Ensure your form has this id

  // Capture the content of the form
  const canvas = await html2canvas(input);
  const imgData = canvas.toDataURL('image/png');

  // Create a new PDF document
  const pdf = new jsPDF('p', 'mm', 'a4');

  // Add the image to the PDF
  pdf.addImage(imgData, 'PNG', 10, 10, 190, 0); // Adjust dimensions as needed

  // Save the PDF
  pdf.save('form.pdf');
};
