document.addEventListener("DOMContentLoaded", () => {

    // ================================
    // ANIMAÇÃO DE ENTRADA
    // ================================

    const animatedItems = document.querySelectorAll(
        ".company-title, .company-text, .principle, .project, .step, .location-box, .contact-content"
    );

    animatedItems.forEach((item) => {
        item.setAttribute("data-animate", "");
    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    document
        .querySelectorAll("[data-animate]")
        .forEach((item) => observer.observe(item));


    // ================================
    // MENU ATIVO
    // ================================

    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".menu-link");


    function updateMenu() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 180;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                currentSection = section.id;
            }

        });


        menuLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", updateMenu);

    updateMenu();


    // ================================
    // SCROLL SUAVE
    // ================================

    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


    // ================================
    // PEQUENO EFEITO NO CÍRCULO DO HERO
    // ================================

    const heroShape = document.querySelector(".shape-inner");


    if (heroShape) {

        heroShape.addEventListener("mouseenter", () => {
            heroShape.style.transform = "rotate(-3deg) scale(1.04)";
        });


        heroShape.addEventListener("mouseleave", () => {
            heroShape.style.transform = "rotate(-8deg) scale(1)";
        });

    }


    // ================================
    // ANO AUTOMÁTICO NO RODAPÉ
    // ================================

    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} InovaTech`;
    }

});