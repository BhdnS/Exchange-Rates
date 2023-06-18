function formatRows(data) {
  return data.map((item) => `
      <tr class="main__tr">
        <td class="main__cc">${item.txt}</td>
        <td class="main__rate">${item.rate}</td>
        <td class="main__rate">${item.cc}</td>
        <td class="main__rate">${item.exchangedate}</td>
      </tr>
    `).join('');
}

function showErrorMessage(title) {
  title.textContent = 'Try later:(';
}

function titleTable() {
  return `
          <tr class="main__tr">
            <th class="main__th">Назва</th>
            <th class="main__th">Ціна</th>
            <th class="main__th">Код</th>
            <th class="main__th">Дата</th>
            </tr class="main__tr">
          `;
}


export function clickButtonView(btn, responseUrl, thead) {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
      responseUrl();
    }
    btn.remove();
    thead.innerHTML = titleTable()
  });
}


export async function responseUrl(url, title, tbody) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    tbody.innerHTML = formatRows(data);
  } catch (error) {
    showErrorMessage(title);
  }
}