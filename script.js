const cards = document.querySelectorAll(".card");
const spring = document.querySelector(".spring");
const summer = document.querySelector(".summer");
const autumn = document.querySelector(".autumn");
const winter = document.querySelector(".winter");
const body = document.querySelector("body");

const showCard = (e) => {
	if (e.target.classList.contains("active")) {
		e.target.classList.remove("active");
	} else {
		removeAllActive();
		e.target.classList.toggle("active");
	}
	changeBgColor();
};

const removeAllActive = () => {
	cards.forEach((card) => card.classList.remove("active"));
};

const changeBgColor = () => {
	if (spring.classList.contains("active")) {
		body.setAttribute("data-bg", "spring");
	} else if (summer.classList.contains("active")) {
		body.setAttribute("data-bg", "summer");
	} else if (autumn.classList.contains("active")) {
		body.setAttribute("data-bg", "autumn");
	} else if (winter.classList.contains("active")) {
		body.setAttribute("data-bg", "winter");
	}
};

cards.forEach((card) => card.addEventListener("click", showCard));
