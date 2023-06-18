import Download from './download';

const downloadBtn = new Download({
  btn: document.querySelector('.btn__download'),
  url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
});

downloadBtn.clickBtn();
