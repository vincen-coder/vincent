window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    // Small delay (1.5s) to ensure the layout is settled and the user sees the logo
    setTimeout(() => {
      // 1. Fade out visually
      preloader.classList.add('opacity-0');
      
      // 2. Remove from layout after fade is done (0.7s matches duration-700)
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 700);
      
    }, 3500); 
});

const openbtn = document.getElementById("open-btn");
const closebtn = document.getElementById("close-btn");

openbtn.addEventListener('click', () => {
    document.getElementById('sect').style.display = "block"
})
closebtn.addEventListener('click', () => {
    document.getElementById('sect').style.display = "none"
})