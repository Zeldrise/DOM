let judul = document.querySelector("p");
judul.innerHTML = " My To Do list";

// list.innerHTML = `
// <div class="row">
//   <div class="col-8">
//     <div class="form-check">
//       <input class="from-check-input" type="checkbox" value="" id="flexChekhDefault">
//       <label class="from-check-label" for="flexChekhDefault">
//         Tugas Baru
//       </label>
//     </div>
//   </div>
//   <div class="col-auto">
//     <div class="btn"><i class="bi bi-trash"></i></div>
//   </div>
// </div>
// `;
let container = document.querySelector(".container");
container.style.margin = "135px auto";
container.style.maxWidth = "550px";
container.style.background = "#ffff";
container.style.borderRadius = "7px";
container.style.padding = "28px 0;";

document.body.style.backgroundImage =
  "linear-gradient(to right, #000428, #004e92)";

// document
//   .querySelector("#input input")
//   .setAttribute("placeholder", "Masukan Tugas Baru");

let inputButton = document.querySelector("#input button");
inputButton.innerHTML = "tambah";
inputButton.addEventListener("click", klik);
function klik() {
  alert("ok");
}
inputButton.onclick = klik;

document.getElementById("input").addEventListener("submit", aktif);
function aktif(event) {
  event.preventDefault();
  // if (input.value == "Javascript") {
  //   console.log("data berhasil dikirim ke server");
  // } else {
  //   console.log("data gagal dikirim");
  // }
}

inputButton.addEventListener("click", btnAktif);
function btnAktif() {
  console.log("button aktif");
}

// function klik() {
//   alert("ok");
// }
// inputButton.onclick = klik;

inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);
function gantiRed() {
  inputButton.style.backgroundColor = "red";
}
function gantiBlack() {
  inputButton.style.color = "black";
}
// const judul = document.querySelector("#judul");
// judul.style.color = "lightgreen";
// judul.style.backgroundColor = "salmon";

document.getElementById("input").addEventListener("submit", submitAktif);
function submitAktif() {
  console.log("submit aktif");
}

function tambahTugas() {
  let list = document.getElementById("list");

  let divRow = document.createElement("div");
  divRow.classList.add("row", "mb-2");

  let divCol = document.createElement("div");
  divCol.className = "col-8";

  let divAuto = document.createElement("div");
  divAuto.classList.add("col-auto");

  let divForm = document.createElement("div");
  divForm.classList.add("form-check", "mt-2");

  let divBtn = document.createElement("div");
  divBtn.className = "btn";

  let inputTugas = document.createElement("input");
  inputTugas.setAttribute("type", "checkbox");
  inputTugas.classList.add("form-check-input", "list");

  let label = document.createElement("label");
  label.className = "form-check-label";

  let namaTugas = document.createTextNode(`${input.value}`);
  label.appendChild(namaTugas);

  let icon = document.createElement("i");
  icon.classList.add("bi", "bi-trash", "delete");

  list.appendChild(divRow);
  divRow.append(divCol, divAuto);
  divCol.appendChild(divForm);
  divForm.append(inputTugas, label);
  divAuto.appendChild(divBtn);
  divBtn.appendChild(icon);

  input.value = "";
}

inputButton.addEventListener("click", tambahTugas);
