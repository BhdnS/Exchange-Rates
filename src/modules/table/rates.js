class Rates {
  constructor() {
    this.tbody = document.querySelector('.main__tbody');
    this.url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    this.title = document.querySelector('.header__title');
    this.btn = document.querySelector('.btn__view');
    this.thead = document.querySelector('.main__thead');
  }

  async response() {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      this.tbody.innerHTML = this.#formatRows(data);
    } catch (error) {
      this.#showErrorMessage(this.title);
    }
  }

  click() {
    this.btn.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn')) {
        this.response();
      }
      this.btn.remove();
      this.thead.innerHTML = this.#titleTable();
    });
  }

  #showErrorMessage() {
    this.title.textContent = 'Try later:(';
  }

  #formatRows(data) {
    return data.map((item) => `
    <tr class="main__tr">
      <td class="main__cc">${item.txt}</td>
      <td class="main__rate">${item.rate}</td>
      <td class="main__rate">${item.cc}</td>
      <td class="main__rate">${item.exchangedate}</td>
    </tr>
  `).join('');
  }

  #titleTable() {
    return `
    <tr class="main__tr">
      <th class="main__th">Назва</th>
      <th class="main__th">Ціна</th>
      <th class="main__th">Код</th>
      <th class="main__th">Дата</th>
      </tr class="main__tr">
    `;
  }
}

export default Rates;
