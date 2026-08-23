document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menu = document.getElementById("menu-toggle");
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        link.onclick = function () {
            if (menu) {
                menu.checked = false;
            }
        };
    });


    // Active page
    let page = window.location.pathname.split("/").pop();

    if (page == "") {
        page = "index.html";
    }

    links.forEach(function (link) {
        if (link.getAttribute("href") == page) {
            link.classList.add("active");
        }
    });


    // Contact form
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.onsubmit = function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;

            alert("Thank you" + (name ? ", " + name : "") +
                "! Your message has been received.");

            contactForm.reset();
        };
    }


    // Registration form
    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {
        registrationForm.onsubmit = function (event) {
            event.preventDefault();

            let name = document.getElementById("full-name").value;
            let program = document.getElementById("reg-program");
            let selectedProgram =
                program.options[program.selectedIndex].text;

            alert(
                "Thank you, " + name +
                "! Your registration for " +
                selectedProgram +
                " has been submitted successfully."
            );

            registrationForm.reset();
        };
    }


    // Smooth scrolling
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {
        anchor.onclick = function (event) {

            let section = document.querySelector(
                this.getAttribute("href")
            );

            if (section) {
                event.preventDefault();

                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        };
    });

});