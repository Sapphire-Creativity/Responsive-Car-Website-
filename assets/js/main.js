/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*=============== MENU SHOW ===============*/
/* Validate if contact exists */

if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*=============== MENU HIDDEN ===============*/
/* Validate if contact exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	// When we click on each nav-link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");

	// when the scroll is greater than 50 viewport height, add the scroll-header to the header tag

	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular-container", {
	loop: true,
	spaceBetween: 24,
	slidesPerView: "auto",
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
	},

	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			spaceBetween: 48,
		},
	},
});

/*=============== MIXITUP FILTER FEATURED ===============*/

var mixerFeatured = mixitup(".featured-content", {
	selectors: {
		target: ".featured-card",
	},
	animation: {
		duration: 300,
	},
});

/* Link active featured */
const linkFeatured = document.querySelectorAll(".featured-item");

function activeFeatured() {
	linkFeatured.forEach((l) => l.classList.remove("active-featured"));
	this.classList.add("active-featured");
}
linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	/** when the scroll is higher than 350 viewport height, 
	the show-scroll class to the tag with the scroll

	*/
	if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
});

sr.reveal(".home-title, .popular-container, .features-img, .featured-filters");
sr.reveal(".home-subtitle", { delay: 500 });
sr.reveal(".home-elec", { delay: 600 });
sr.reveal(".home-img", { delay: 800 });
sr.reveal(".home-car-data", { delay: 900, interval: 150, origin: "bottom" });
sr.reveal(".home-button", { delay: 1000, origin: "bottom" });
sr.reveal(".about-group, .offer-data", { origin: "left" });
sr.reveal(".about-data, .offer-img", { origin: "right" });
sr.reveal(".features-map", { delay: 600, origin: "bottom" });
sr.reveal(".features-card", { interval: 300 });
sr.reveal(".featured-card, .logos-content, .footer-content", { interval: 100 });
