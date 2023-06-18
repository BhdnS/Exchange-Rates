import generatePDF from './generatePDF';

export async function download(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		generatePDF(data);
	} catch (error) {
		console.log(error);
	}
}

export function click(btn, downloadFile) {
	btn.addEventListener('click', () => {
		downloadFile();
	});
}
