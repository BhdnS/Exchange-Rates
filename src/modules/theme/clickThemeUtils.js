import moon from '../../images/theme/moon.svg';
import sun from '../../images/theme/sun.svg';

function clickTheme(img, title, btnDownload, btnView, table, body) {
  img.addEventListener('click', () => {
    if (img.classList.contains('sun')) {
      img.classList.remove('sun');
      img.classList.add('moon');
      title.classList.add('white');
      btnDownload.classList.add('white');
      btnView.classList.add('white');
      table.classList.add('white');
      body.classList.add('body__black');
      img.src = moon;

			localStorage.setItem('theme', 'light')
    } else if (img.classList.contains('moon')) {
      img.classList.remove('moon');
      img.classList.add('sun');
      title.classList.remove('white');
      btnDownload.classList.remove('white');
      btnView.classList.remove('white');
      table.classList.remove('white');
      body.classList.remove('body__black');
      img.src = sun;
			
			localStorage.setItem('theme', 'dark')
    }
  });
}

export default clickTheme;