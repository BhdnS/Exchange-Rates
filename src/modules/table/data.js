import Rates from './rates';

const data = new Rates({
  tbody: document.querySelector('.main__tbody'),
  url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
  title: document.querySelector('.header__title'),
  btn: document.querySelector('.btn__view'),
  thead: document.querySelector('.main__thead'),
});

data.click();
