let judul = document.querySelector("p");
judul.innerHTML = " My To Do list";

let list = document.getElementById("list");
list.innerHTML = `
<div class="row">
  <div class="col-8">
    <div class="form-check">
      <input class="from-check-input" type="checkbox" value="" id="flexChekhDefault">
      <label class="from-check-label" for="flexChekhDefault">
        Tugas Baru 
      </label>
    </div>
  </div>
  <div class="col-auto">
    <div class="btn"><i class="bi bi-trash"></i></div>
  </div>
</div>
`;
let container = document.querySelector(".container");
container.style.margin = "135px auto";
container.style.maxWidth = "550px";
container.style.background = "#ffff";
container.style.borderRadius = "7px";
container.style.padding = "28px 0;";

document.body.style.backgroundImage =
  "linear-gradient(to right, #000428, #004e92)";

document
  .querySelector("#input input")
  .setAttribute("placeholder", "Masukan Tugas Baru");

// const judul = document.querySelector("#judul");
// judul.style.color = "lightgreen";
// judul.style.backgroundColor = "salmon";
