import Theme from './theme';

const theme = new Theme({
  img: document.querySelector('.theme'),
  title: document.querySelector('.header__title'),
  btnDownload: document.querySelector('.btn__download'),
  btnView: document.querySelector('.btn__view'),
  table: document.querySelector('.main__table'),
  body: document.querySelector('body'),
});

theme.click();
theme.localStorage();
