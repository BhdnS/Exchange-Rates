import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Download {
  constructor() {
    this.btn = document.querySelector('.btn__download');
    this.url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
  }

  downloadFile() {
    this.#download();
  }

  clickBtn() {
    this.btn.addEventListener('click', () => {
      this.downloadFile();
    });
  }

  #generatePDF(data) {
    const transformData = this.#removeKeysFromJson(data);

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

  #removeKeysFromJson(data) {
    return data.map((item) => Object.values(item));
  }

  async #download() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.#generatePDF(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default Download;
