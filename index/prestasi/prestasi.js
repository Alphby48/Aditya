import sertifikat from "../../database/data-prestasi.js";
const listPrestasi = document.querySelector(".list-prestasi");

const prestasi = sertifikat.map(
  (s) => ` <div class="card">
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
);
listPrestasi.innerHTML = prestasi;

document.querySelectorAll(".img-pres").forEach((im) => {
  im.onclick = (e) => {
    e.target.nextElementSibling.nextElementSibling.style.display = "flex";
  };
});

document.querySelectorAll(".tutup").forEach((t) => {
  t.onclick = (e) => {
    e.target.parentElement.parentElement.parentElement.style.display = "none";
  };
});
