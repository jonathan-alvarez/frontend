function convertir() {
  let dec = document.getElementById('input').value;
  let bin = parseInt(dec).toString(2);
  document.getElementById('bin').innerHTML = bin
  let oct = parseInt(dec).toString(8);
  document.getElementById('oct').innerHTML = oct
  let hex = parseInt(dec).toString(16);
  document.getElementById('hex').innerHTML = hex
}
