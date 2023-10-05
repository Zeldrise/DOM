var ulang = true;
while (ulang) {
  const secretNumber = Math.trunc(Math.random() * 10) + 1;
  let kesempatan = 3;

  function guessNumber() {
    const jawaban = parseInt(
      prompt("Tebak angka antara 1 dan 10 \nkesempatanmu : " + kesempatan)
    );
    if (isNaN(jawaban) || jawaban < 1 || jawaban > 10) {
      alert("Masukkan angka antara 1 dan 10!");
      guessNumber();
    } else if (jawaban === secretNumber) {
      alert("Kamu MENANG!!!\nAngka yang benar adalah: " + secretNumber);
    } else {
      kesempatan--;

      if (kesempatan === 0) {
        alert(
          "Maaf, kesempatan sudah habis.\nJawaban yang benar adalah: " +
            secretNumber
        );
      } else {
        const message =
          jawaban > secretNumber ? "Terlalu Tinggi" : "Terlalu Rendah";
        alert(message + "\nKesempatan tersisa: " + kesempatan);
        guessNumber();
      }
    }
  }
  guessNumber();
  ulang = confirm("ingin bermain kembali?");
}
