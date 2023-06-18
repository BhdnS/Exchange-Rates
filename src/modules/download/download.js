import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { click, download } from './utils'

pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Download {
  constructor(options) {
    this.btn = options.btn;
    this.url = options.url;
  }

  downloadFile() { download(this.url) }

  clickBtn() { click(this.btn, this.downloadFile.bind(this) )}
}

export default Download;
