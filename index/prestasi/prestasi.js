import sertifikat from "../../database/data-prestasi.js";
const listPrestasi = document.querySelector(".list-prestasi");

const prestasi = sertifikat
  .map(
    (s) => ` 
  <div class="card">
          <div class="tools">
            <div class="circle">
              <span class="red box"></span>
            </div>
            <div class="circle">
              <span class="yellow box"></span>
            </div>
            <div class="circle">
              <span class="green box"></span>
            </div>
          </div>
          <div class="box-sert">
        <img src="../../asset/pdf-cert/${s.image}" class="img-pres" id="tai"/>
        <h2 class="txt-pres">${s.dari}</h2>

        <div class="pop-sert">
            <div class="popBox">
            <img src="../../asset/pdf-cert/${s.image}" class="pop-img-pres"/>
            <button class="tutup"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
        </div>

        </div>
    </div> 
`
  )
  .join("");
listPrestasi.innerHTML = prestasi;
popup();
closeUp();

const btnReset = document.querySelector(".btn-reset");
const inputSearch = document.querySelector(".input-search");
const formSearch = document.querySelector(".form-search");

formSearch.addEventListener("submit", (f) => {
  f.preventDefault();
  cariSertifikat();
});

function cariSertifikat() {
  const cariSert = sertifikat.filter((s) =>
    s.dari.toUpperCase().includes(inputSearch.value.toUpperCase())
  );
  const findsert = cariSert.map(
    (c) => `
  <div class="card">
  <div class="tools">
    <div class="circle">
      <span class="red box"></span>
    </div>
    <div class="circle">
      <span class="yellow box"></span>
    </div>
    <div class="circle">
      <span class="green box"></span>
    </div>
  </div>
  <div class="box-sert">
<img src="../../asset/pdf-cert/${c.image}" class="img-pres" id="tai"/>
<h2 class="txt-pres">${c.dari}</h2>

<div class="pop-sert">
    <div class="popBox">
    <img src="../../asset/pdf-cert/${c.image}" class="pop-img-pres"/>
    <button class="tutup"><i class="fa-regular fa-circle-xmark"></i></button>
    </div>
</div>

</div>
</div> 
`
  );
  listPrestasi.innerHTML = findsert;
  popup();
  closeUp();
}
function popup() {
  document.querySelectorAll(".img-pres").forEach((im) => {
    im.onclick = (e) => {
      e.target.nextElementSibling.nextElementSibling.style.display = "flex";
    };
  });
}

function closeUp() {
  document.querySelectorAll(".tutup").forEach((t) => {
    t.onclick = (e) => {
      e.target.parentElement.parentElement.parentElement.style.display = "none";
    };
  });
}
