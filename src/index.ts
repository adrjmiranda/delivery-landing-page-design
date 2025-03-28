/**
 * Change Navbar Style
 */
const navbar = document.getElementById('navbar') as HTMLDivElement;

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		navbar.classList.add('scrolling');
	} else {
		navbar.classList.remove('scrolling');
	}
});
