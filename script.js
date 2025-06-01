document.addEventListener('DOMContentLoaded', function() {

	// Function hitung
	function math(n1, n2, op) {
		let hasil = 0;

		// Switch case operator
		switch (op) {
			// Penjumlahan
			case "+":
				hasil = n1 + n2;
				break;

			// Pengurangan
			case "-":
				hasil = n1 - n2;
				break;

			// Perkalian
			case "*":
				hasil = n1 * n2;
				break;

			// Pembagian
			case "/":
				hasil = n2 !== 0 ? n1 / n2 : "Tidak dapat dibagi dengan 0";
				break;
		}

		// Tmapilkan hasil
		document.getElementById('result').value = hasil;
	}

	// Kondisi ketika form disubmit
	document.getElementById('calc').addEventListener('submit', function(e) {
		// Prevent reload otomatis
		e.preventDefault();

		// Angka pertama
		const firstNumber = parseFloat(document.getElementById('firstNumber').value);

		// Angka kedua
		const secondNumber = parseFloat(document.getElementById('secondNumber').value);

		// Ambil operator yang aktif (tombol yang dipencet)
		const operator = document.activeElement.value;

		// Cek apakah angka pertama & kedua valid
		if (isNaN(firstNumber) || isNaN(secondNumber)) {
			alert('Isi dengan angka');
			return;
		}

		// Kirim data ke function math
		math(firstNumber, secondNumber, operator);
	});
})