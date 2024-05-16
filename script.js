const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
	menuIcon.classList.toggle("bx-x");
	/*navbar.classList.toggle("active");*/
	// Добавим класс 'active' с задержкой для обеспечения плавного перехода
	if (navbar.classList.contains('active')) {
		navbar.style.maxHeight = 0;
		navbar.style.opacity = 0;
		setTimeout(() => {
			navbar.classList.remove("active");
		}, 500); // Длительность совпадает с CSS transition
	} else {
		navbar.classList.add("active");
		setTimeout(() => {
			navbar.style.maxHeight = "500px";
			navbar.style.opacity = 1;
		}, 10); // Небольшая задержка для активации перехода
	}
}