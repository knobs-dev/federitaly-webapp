import download from "downloadjs";
import { PDFDocument, rgb } from "pdf-lib";
import { QRCodeCanvas } from "@cheprasov/qrcode";

export const generateAndSavePdf = async (
  companyName: string,
  address: string,
  vatNumber: string,
  release: string,
  expiration: string,
) => {
  const qrCanvas = new QRCodeCanvas(window.location.href);
  const dataUrlWithQRCode = qrCanvas.toDataUrl();
  const pngImageBytes = await fetch(dataUrlWithQRCode).then((res) =>
    res.arrayBuffer(),
  );

  const existingPdfBytes = await fetch("/certificate.pdf").then((res) =>
    res.arrayBuffer(),
  );

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const pngImage = await pdfDoc.embedPng(pngImageBytes);

  const pages = pdfDoc.getPages();

  const firstPage = pages[0];

  firstPage.drawText(companyName, {
    x: 78,
    y: 535,
    size: 18,
    maxWidth: 390,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(address, {
    x: 78,
    y: 465,
    size: 14,
    maxWidth: 270,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(vatNumber, {
    x: 78,
    y: 360,
    size: 14,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(release, {
    x: 78,
    y: 300,
    size: 14,
    color: rgb(0, 0, 0),
  });

  firstPage.drawText(expiration, {
    x: 188,
    y: 300,
    size: 14,
    color: rgb(0, 0, 0),
  });

  firstPage.drawImage(pngImage, {
    x: 78,
    y: 100,
    width: 70,
    height: 70,
  });

  const pdfBytes = await pdfDoc.save();

  download(pdfBytes, "certificate.pdf", "application/pdf");
};