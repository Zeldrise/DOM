const rubahWarna = document.getElementById("rubahWarna");
rubahWarna.onclick = function () {
  // document.body.style.backgroundColor = "red";
  // document.body.setAttribute("class", "merah");
  document.body.classList.toggle("merah");
};

const acakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
acakWarna.appendChild(teksTombol);
acakWarna.setAttribute("type", "button");
rubahWarna.after(acakWarna);

acakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");
sliderMerah.addEventListener("change", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sliderHijau.addEventListener("change", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sliderBiru.addEventListener("change", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

document.body.addEventListener("mousemove", function (event) {
  // console.log(event.clientX);
  // console.log(window.innerWidth);

  const xpos = Math.round((event.clientX / window.innerWidth) * 255);
  const ypos = Math.round((event.clientY / window.innerWidth) * 255);

  document.body.style.backgroundColor = "rgb(" + xpos + "," + ypos + ",100)";
});
