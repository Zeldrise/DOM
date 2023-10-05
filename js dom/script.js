// <JS SELECTION>

// const judul = document.getElementById("judul");
// judul.style.color = "navy";
// judul.style.backgroundColor = "yellow";
// judul.innerHTML = "samlekom";

// // const p = document.getElementsByTagName("p");
// // for (let i = 0; i < p.length; i++) p[i].style.backgroundColor = "lightgreen";

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "kata bu ber ini dirubah pake javascript";

// // const p4 = document.querySelector("#b p");
// // p4.style.color = "blue";
// // p4.style.fontSize = "25px";

// const li2 = document.querySelector("li:nth-child(2)");
// li2.style.backgroundColor = "lightcoral";

// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) p[i].style.backgroundColor = "pinks";

// // const p4 = document.querySelectorAll("p")[3];
// // p4.style.backgroundColor = "yellow";

// const sectionb = document.getElementById("b");
// const p4 = sectionb.querySelector("p");
// p4.style.backgroundColor = "green";

// </JS SELECTION>
//
//
//
//
//
//
//
//
//
//
//
// <DOM MANIPULATION>

// const judul = document.getElementById("judul");
// judul.innerHTML = "<i>Fand</i>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "hello bang...!!!";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p> paragraf  baru </P></div>";

const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "Fandi EP.");

const a = document.querySelector("section#a a");

// </DOM MANIPULATION>

const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("paragraf baru");
//menyimpan teks ke paragraf
pBaru.appendChild(teksBaru);

//menyimpan pBaru ke sectioanA
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("section#b ul li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baru!!");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";

const p3 = document.querySelector(".p3");
// p3.addEventListener("click", function () {
//   p3.style.backgroundColor = "lightgreen";
// });
// p3.addEventListener("click", function () {
//   p3.style.color = "red";
// });
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightseagreen";
}
const p2 = document.querySelector(".p2");
function ubahWarnaP2() {
  p2.style.backgroundColor = "lightgreen";
}
p2.onclick = ubahWarnaP2;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksBaru = document.createTextNode("item baru");
  liBaru.appendChild(teksBaru);
  ul.appendChild(liBaru);
});
