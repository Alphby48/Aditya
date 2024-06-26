const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("slide");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("slide");
    hamburger.checked = false;
  }
});

// switch tema

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const tlsn = document.querySelectorAll(".font-mode");
const main = document.querySelector("main");
const boxEx = document.querySelectorAll(".card-ex");

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    gantiWarna(tlsn, "white");
    for (var i = 0; i < boxEx.length; i++) {
      boxEx[i].style.boxShadow = "-40px 50px 30px rgba(146, 80, 233, 0.2)";
    }
    main.style.background = "#00000062";
    main.style.backgroundImage = "url(asset/img/Wave3.svg)";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPositionY = "100%";
    document.body.setAttribute("data-theme", "dark");
  } else {
    gantiWarna(tlsn, "black");
    for (var i = 0; i < boxEx.length; i++) {
      boxEx[i].style.boxShadow = "-40px 50px 30px rgba(0, 0, 0, 0.28)";
    }
    main.style.backgroundColor = "#532ae638";
    main.style.backgroundImage = "url(asset/img/Wave3.svg)";
    main.style.backgroundRepeat = "no-repeat";
    main.style.backgroundPositionY = "100%";
    document.body.setAttribute("data-theme", "light");
  }
}

function gantiWarna(obyek, warna) {
  obyek.forEach((o) => {
    o.style.color = warna;
  });
}
