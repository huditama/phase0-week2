var tanggal = 2;
var bulan = 3;
var tahun = 1998;
var output = ""

if((tanggal >=1 && tanggal <= 31) && (bulan >=1 && bulan <= 12) && (tahun >=1900 && tahun <=2200)) {
  
  output += tanggal
  
  switch(bulan){
    case 1:
      output += " Januari "
      break;
    case 2:
      output += " Februari "
    case 3:
      output += " Maret "
      break;
    case 4:
      output += " April "
    case 5:
      output += " Mei "
      break;
    case 6:
      output += " Juni "
    case 7:
      output += " Juli "
      break;
    case 8:
      output += " Agustus "
    case 9:
      output += " September "
      break;
    case 10:
      output += " Oktober "
      break;
    case 11:
      output += " Nopember "
      break;
    case 12:
      output += " Desember "
    default:
      output += " ERROR "
    }
    output += (tahun)
  }

else {
  console.log("ERROR")
}
console.log(output)