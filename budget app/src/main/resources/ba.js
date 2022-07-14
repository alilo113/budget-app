const form = document.getElementById("form");
const ati = document.getElementById("ati"); // input variable
const n = document.getElementById("need");
const wants = document.getElementById("wants");
const save = document.getElementById("save");

form.addEventListener("submit",(e) =>{
    e.preventDefault()

    n.innerHTML = Math.abs(ati.value - 50 * 100) + "$";
    wants.innerHTML = Math.abs(ati.value - 30 * 100) + "$";
    save.innerHTML = Math.abs(ati.value - 20 * 100) + "$"
})