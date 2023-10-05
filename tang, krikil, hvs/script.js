var tanya = true;
while (tanya) {
  var p = prompt("pilih : kertas, gunting, batu");
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "kertas";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "batu";
  }
  console.log(comp);

  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "kertas") {
    hasil = comp == "batu" ? "MENANG" : "KALAH";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "MENANG" : "KALAH";
  } else if (p == "batu") {
    hasil = comp == "kertas" ? "KALAH" : "MENANG";
  } else {
    hasil = "Masukan pilihan yang BENAR";
  }

  alert(
    "Kamu memilih : " +
      p +
      " dan komputer memilih : " +
      comp +
      "\n Maka hasilnya : Kamu " +
      hasil
  );
  tanya = confirm("MAIN LAGI ??");
}
