// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.length < 10) {
        alert("Message should be at least 10 characters.");
        return;
    }

    alert("Thank you! Your message has been submitted.");

    form.reset();

});


// Highlight Active Navigation Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// Simple Fade Animation on Scroll

const hiddenElements = document.querySelectorAll(".skill, .project-card");

function revealElements() {

    hiddenElements.forEach(item => {

        const position = item.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 80) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

hiddenElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.6s";

});

window.addEventListener("scroll", revealElements);

revealElements();


// Typing Effect

const roles = [
    "B.Tech CSE Student",
    "Frontend Learner",
    "Future Full Stack Developer"
];

const roleElement = document.querySelector(".hero-text h3");

let roleIndex = 0;
let charIndex = 0;

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 80);

    } else {

        setTimeout(deleteText, 1500);

    }

}

function deleteText() {

    if (charIndex > 0) {

        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 40);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeText, 400);

    }

}

const toggleBtn = document.getElementById("theme-toggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }

});

roleElement.textContent = "";

typeText();