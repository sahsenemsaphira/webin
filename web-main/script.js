const menuBtn = document.querySelector(".fa-bars");
const menuBtn2 = document.querySelector(".fa-bars2");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav-links-container");
const menuContainer = document.querySelector(".menu-btn"); // Menü butonunu seçiyoruz

// Menüyü açıp kapatma işlevi
function toggleMenu() {
    const isMenuOpen = navMenu.style.right === "0%";

    if (isMenuOpen) {
        // Menü kapalı hale gelir
        overlay.style.display = "none";
        navMenu.style.right = "-150%";
        menuContainer.classList.remove("active");
        menuBtn2.textContent = "Menu"; // Yazı tekrar "Menu" olur
    } else {
        // Menü açık hale gelir
        overlay.style.display = "block";
        navMenu.style.right = "0%";
        menuContainer.classList.add("active");
        menuBtn2.textContent = "Close"; // Yazı "Close" olur
    }
}

// Tıklama ve dokunma olaylarını dinlemek için
menuContainer.addEventListener("click", toggleMenu);
menuContainer.addEventListener("touchstart", (e) => {
    toggleMenu();
    e.preventDefault(); // Olası tıklama/dokunma çatışmalarını önler
}, { passive: false });

// Overlay'e tıklanınca menü kapanır
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    navMenu.style.right = "-150%";
    menuContainer.classList.remove("active");
    menuBtn2.textContent = "Menu"; // Menü kapandığında yazı tekrar "Menu" olur
});



window.addEventListener('scroll', function () {
    var aboutus = document.getElementById('about');
    var aboutus_top = aboutus.getBoundingClientRect().top;
    var aboutus_bottom = aboutus.getBoundingClientRect().bottom;

    var products = document.getElementById('portfolio');
    var products_top = products.getBoundingClientRect().top;
    var products_bottom = products.getBoundingClientRect().bottom;


    if (aboutus_top + 300 < window.innerHeight) {
        dot.style.left = "25%";
    }
    if (products_top + 300 < window.innerHeight) {
        dot.style.left = "67%";
    }


});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

