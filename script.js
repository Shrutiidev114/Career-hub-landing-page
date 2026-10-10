// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// ==============================
// CLOSE MOBILE MENU
// ==============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// ==============================
// SCROLL FUNCTIONS
// ==============================

function scrollToOpportunities() {

    document.getElementById("opportunities").scrollIntoView({
        behavior: "smooth"
    });

}


function scrollToSection(sectionId) {

    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });

}


// ==============================
// MESSAGE FUNCTION
// ==============================

function showMessage(message) {

    alert(message);

}


// ==============================
// NAVBAR SHADOW ON SCROLL
// ==============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(15, 23, 42, 0.06)";

    } else {

        navbar.style.boxShadow = "none";

    }

});