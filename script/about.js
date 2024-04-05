const hitungUmur = (tanggalLahirr) => {
  const hariIni = new Date();
  const [tahunLahir, bulanLahir, tanggalLahir] = tanggalLahirr
    .split("-")
    .map(Number);
  const ulangTahunIni = new Date(
    hariIni.getFullYear(),
    bulanLahir - 1,
    tanggalLahir
  );
  let selisihTahun = hariIni.getFullYear() - tahunLahir;
  if (ulangTahunIni > hariIni) {
    selisihTahun--;
  }
  return selisihTahun;
};

const tanggalLahirr = "2006-08-14";
const umur = hitungUmur(tanggalLahirr);
document.querySelector(".umur").innerHTML = `${umur} Tahun`;

//
