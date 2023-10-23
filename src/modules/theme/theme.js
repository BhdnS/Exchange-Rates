import moon from '../../images/theme/moon.svg';
import sun from '../../images/theme/sun.svg';

class Theme {
  constructor() {
    this.img = document.querySelector('.theme');
    this.title = document.querySelector('.header__title');
    this.btnDownload = document.querySelector('.btn__download');
    this.btnView = document.querySelector('.btn__view');
    this.table = document.querySelector('.main__table');
    this.body = document.querySelector('body');
  }

  click() {
    this.img.addEventListener('click', () => {
      if (this.img.classList.contains('sun')) {
        this.#moonTheme();
        localStorage.setItem('theme', 'light');
      } else if (this.img.classList.contains('moon')) {
        this.#sunTheme();
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  localStorage() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.#sunTheme();
    } else {
      this.#moonTheme();
    }
  }

  #sunTheme() {
    this.img.classList.add('sun');
    this.img.classList.remove('moon');
    this.title.classList.remove('white');
    this.btnDownload.classList.remove('white');
    this.btnView.classList.remove('white');
    this.table.classList.remove('white');
    this.body.classList.remove('body__black');
    this.img.src = sun;
  }

  #moonTheme() {
    this.img.classList.remove('sun');
    this.img.classList.add('moon');
    this.title.classList.add('white');
    this.btnDownload.classList.add('white');
    this.btnView.classList.add('white');
    this.table.classList.add('white');
    this.body.classList.add('body__black');
    this.img.src = moon;
  }
}

export default Theme;
