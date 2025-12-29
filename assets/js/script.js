var encEmail = "cHRvcmhvcnN0QGdtYWlsLmNvbQ==";
const emailElements = document.getElementsByClassName("contact-address");
for (let i = 0; i < emailElements.length; i++) {
    emailElements[i].setAttribute("href", "mailto:".concat(atob(encEmail)));
}

// reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-show-left, .hidden-show-right");
hiddenElements.forEach((el) => observer.observe(el))
