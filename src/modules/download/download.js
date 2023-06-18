import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import generatePDF from './generatePDF';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Download {
  constructor(options) {
    this.btn = options.btn;
    this.url = options.url;
  }

  async download() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      generatePDF(data);
    } catch (error) {
      console.log(error);
    }
  }

  click() {
    this.btn.addEventListener('click', () => {
      this.download();
    });
  }
}

export default Download;
