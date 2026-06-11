import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportPDF = async () => {
  const input = document.getElementById("dashboard-content");

  if (!input) return;

  const canvas = await html2canvas(input, {
    scale: 2,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const imgWidth = 190;
  const pageHeight = 297;
  const imgHeight =
    (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(
    imgData,
    "PNG",
    10,
    position,
    imgWidth,
    imgHeight
  );

  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;

    pdf.addPage();

    pdf.addImage(
      imgData,
      "PNG",
      10,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pageHeight;
  }

  pdf.save("dashboard-report.pdf");
};