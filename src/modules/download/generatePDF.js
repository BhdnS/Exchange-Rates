import removeKeysFromJson from './removeKeysFromJson';

function generatePDF(data) {
  const transformData = removeKeysFromJson(data);

  const docDefinition = {
    content: [
      { text: 'Курс валют', style: 'Header' },
      { table: { body: transformData }, style: 'table' },
    ],
    styles: {
      header: { fontSize: 18, bold: true },
      json: { fontSize: 12, margin: [0, 10, 0, 0] },
    },
  };
  const pdfDocGenerator = pdfMake.createPdf(docDefinition);
  pdfDocGenerator.download('data.pdf');
}

export default generatePDF;
