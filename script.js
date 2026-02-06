document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       SMOOTH SCROLL
    ================================= */
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    /* ================================
       NAVBAR ACTIVE ON SCROLL
    ================================= */
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    /* ================================
       FADE IN ON SCROLL
    ================================= */
    const faders = document.querySelectorAll("section, header");

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(el => {
        el.classList.add("hidden");
        appearOnScroll.observe(el);
    });

    /* ================================
       DARK MODE TOGGLE
    ================================= */
    const toggleBtn = document.getElementById("darkToggle");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            toggleBtn.textContent = document.body.classList.contains("dark") ? "☀" : "🌙";
        });
    }

    /* ================================
       TYPING EFFECT
    ================================= */
    const text = "Bunga Denis Rinjani";
    const title = document.querySelector("header h1");
    let index = 0;
    const speed = 100;

    if (title) {
        title.textContent = "";

        const typeEffect = () => {
            if (index < text.length) {
                title.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            }
        };

        typeEffect();
    }

    /*Snow Effect */
    const snowCount = 5; // jumlah salju
    const snowContainer = document.getElementById("snow-container");

    for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄"; // simbol salju
    snow.style.left = Math.random() * 100 + "vw"; // posisi horizontal acak
    snow.style.animationDuration = 5 + Math.random() * 10 + "s"; // kecepatan acak
    snow.style.fontSize = 10 + Math.random() * 20 + "px"; // ukuran acak
    snow.style.opacity = 0.5 + Math.random() * 0.5;
    snowContainer.appendChild(snow); // sekarang masuk container
}

});
