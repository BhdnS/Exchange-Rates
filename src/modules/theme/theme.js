import clickTheme from './clickThemeUtils'
import loadThemeFromLocalStorage from './loadThemeFromLocalStorage'

class Theme {
  constructor(options) {
    this.img = options.img;
    this.title = options.title;
    this.btnDownload = options.btnDownload;
    this.table = options.table;
    this.body = options.body;
    this.btnView = options.btnView;
  }
	click() {
    clickTheme(this.img, this.title, this.btnDownload, this.btnView, this.table, this.body);
  }

  localStorage() {
    loadThemeFromLocalStorage.call(this);
  }
}

export default Theme;
