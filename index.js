function tabs(tabid) {
console.log("pestaña: ",tabid)
  for (let index = 0; index < 5; index++) {
    document.getElementById("tab" + index).classList.remove("active");
  }
  document.getElementById("tab" + tabid).classList.add("active");
}
