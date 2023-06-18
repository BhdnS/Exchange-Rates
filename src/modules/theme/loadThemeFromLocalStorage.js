import sun from '../../images/theme/sun.svg';
import moon from '../../images/theme/moon.svg';

export default function loadThemeFromLocalStorage() {
	const theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		this.img.classList.add('sun');
		this.img.classList.remove('moon');
		this.title.classList.remove('white');
		this.btnDownload.classList.remove('white');
		this.btnView.classList.remove('white');
		this.table.classList.remove('white');
		this.body.classList.remove('body__black');
		this.img.src = sun;
	} else {
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
