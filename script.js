const openbtn = document.getElementById("open-btn");
const closebtn = document.getElementById("close-btn");

openbtn.addEventListener('click', () => {
    document.getElementById('sect').style.display = "block"
})
closebtn.addEventListener('click', () => {
    document.getElementById('sect').style.display = "none"
})