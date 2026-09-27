<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       1. SELECT ELEMENTS
    ============================== */

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav a[href^='#']");
    const sections = document.querySelectorAll("section");

    const headerHeight = header ? header.offsetHeight : 80;


    /* ==============================
       2. SCROLL TO TOP BUTTON
    ============================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.id = "topBtn";
    topBtn.setAttribute("aria-label", "Scroll to top");

    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "45px",
        height: "45px",
        border: "none",
        borderRadius: "50%",
        background: "#f9b234",
        color: "#000",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
    });

    document.body.appendChild(topBtn);


    /* ==============================
       3. SMOOTH NAVIGATION
    ============================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            // Ignore normal "#" links
            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                e.preventDefault();

                const targetPosition =
                    targetSection.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });

    });


    /* ==============================
       4. SCROLL EVENT
    ============================== */

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;


        /* ---------- Header Shadow ---------- */

        if (header) {

            if (scrollPosition > 50) {

                header.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.35)";

            } else {

                header.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.3)";
            }
        }


        /* ---------- Active Navigation ---------- */

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - headerHeight - 100;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {
                link.classList.add("active");
            }

        });


        /* ---------- Scroll To Top Button ---------- */

        if (scrollPosition > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";
        }

    });


    /* ==============================
       5. TOP BUTTON HOVER
    ============================== */

    topBtn.addEventListener("mouseenter", () => {

        topBtn.style.transform = "translateY(-4px)";
        topBtn.style.background = "#e09b25";

    });


    topBtn.addEventListener("mouseleave", () => {

        topBtn.style.transform = "translateY(0)";
        topBtn.style.background = "#f9b234";

    });


    /* ==============================
       6. SCROLL TO TOP
    ============================== */

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==============================
       7. SET ACTIVE HOME ON LOAD
    ============================== */

    if (window.scrollY < 100) {

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#home") {
                link.classList.add("active");
            }

        });

    }

=======
document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       1. SELECT ELEMENTS
    ============================== */

    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav a[href^='#']");
    const sections = document.querySelectorAll("section");

    const headerHeight = header ? header.offsetHeight : 80;


    /* ==============================
       2. SCROLL TO TOP BUTTON
    ============================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    topBtn.id = "topBtn";
    topBtn.setAttribute("aria-label", "Scroll to top");

    Object.assign(topBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "45px",
        height: "45px",
        border: "none",
        borderRadius: "50%",
        background: "#f9b234",
        color: "#000",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "9999",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease"
    });

    document.body.appendChild(topBtn);


    /* ==============================
       3. SMOOTH NAVIGATION
    ============================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            // Ignore normal "#" links
            if (!targetId || targetId === "#") {
                return;
            }

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                e.preventDefault();

                const targetPosition =
                    targetSection.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });

    });


    /* ==============================
       4. SCROLL EVENT
    ============================== */

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;


        /* ---------- Header Shadow ---------- */

        if (header) {

            if (scrollPosition > 50) {

                header.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.35)";

            } else {

                header.style.boxShadow =
                    "0 5px 15px rgba(0, 0, 0, 0.3)";
            }
        }


        /* ---------- Active Navigation ---------- */

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - headerHeight - 100;

            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const linkTarget = link.getAttribute("href");

            if (linkTarget === "#" + currentSection) {
                link.classList.add("active");
            }

        });


        /* ---------- Scroll To Top Button ---------- */

        if (scrollPosition > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";
        }

    });


    /* ==============================
       5. TOP BUTTON HOVER
    ============================== */

    topBtn.addEventListener("mouseenter", () => {

        topBtn.style.transform = "translateY(-4px)";
        topBtn.style.background = "#e09b25";

    });


    topBtn.addEventListener("mouseleave", () => {

        topBtn.style.transform = "translateY(0)";
        topBtn.style.background = "#f9b234";

    });


    /* ==============================
       6. SCROLL TO TOP
    ============================== */

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==============================
       7. SET ACTIVE HOME ON LOAD
    ============================== */

    if (window.scrollY < 100) {

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#home") {
                link.classList.add("active");
            }

        });

    }

>>>>>>> 6d02d69c01f74488f19f948def49376cb84f8c24
});