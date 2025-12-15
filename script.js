window.addEventListener('load', () => {
	const preloader = document.getElementById('preloader');

	// Smooth fade out logic
	if (preloader) {
		setTimeout(() => {
			preloader.classList.add('opacity-0'); // Trigger fade out

			// Remove from DOM after fade completes
			setTimeout(() => {
				preloader.style.display = 'none';
			}, 700);
		}, 2000); // 2 seconds load time is usually enough
	}
});

const openbtn = document.getElementById('open-btn');
const closebtn = document.getElementById('close-btn');
const menu = document.getElementById('sect');

if (openbtn && closebtn && menu) {
	openbtn.addEventListener('click', () => {
		menu.classList.remove('hidden');
		menu.style.display = 'flex'; // Ensure it uses flex layout
	});

	closebtn.addEventListener('click', () => {
		menu.classList.add('hidden');
		menu.style.display = 'none';
	});
}
