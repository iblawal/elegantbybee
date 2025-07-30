
  document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });

    // Navbar collapse on link click (mobile)
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navCollapse = document.querySelector(".navbar-collapse");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navCollapse).toggle();
        }
      });
    });

    // Contact form validation
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        const inputs = this.querySelectorAll("input, textarea");
        let valid = true;
        inputs.forEach(input => {
          if (input.hasAttribute("required") && input.value.trim() === "") {
            valid = false;
            input.classList.add("is-invalid");
          } else {
            input.classList.remove("is-invalid");
          }
        });
        if (!valid) {
          e.preventDefault();
          alert("Please fill in all required fields.");
        }
      });
    }

    // "Plan My Event" fallback scroll
    const planBtn = document.querySelector('a[href="planmyevent.html"]');
    if (planBtn) {
      planBtn.addEventListener("click", (e) => {
        if (planBtn.getAttribute("href").includes("#")) {
          e.preventDefault();
          document.querySelector("#plan-form")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Intelligent AOS animation assignment
    const randomAnimations = [
      "fade-up",
      "fade-down",
      "fade-left",
      "zoom-out",
      "flip-left",
      "flip-right"
    ];

    document.querySelectorAll("div").forEach((div, i) => {
      if (div.classList.contains("hero-text")) {
        div.setAttribute("data-aos", "fade-left");
        div.setAttribute("data-aos-delay", "100");

      } else if (div.classList.contains("service-card")) {
        div.setAttribute("data-aos", "zoom-in");
        div.setAttribute("data-aos-delay", `${200 + (i % 3) * 100}`);

      } else if (div.classList.contains("workflow-box")) {
        div.setAttribute("data-aos", "fade-up");
        div.setAttribute("data-aos-delay", `${200 + (i % 4) * 100}`);

      } else if (div.closest(".about-section")) {
        div.setAttribute("data-aos", "fade-left");
        div.setAttribute("data-aos-delay", "100");

      } else if (div.closest(".meet-founder")) {
        div.setAttribute("data-aos", "fade-right");
        div.setAttribute("data-aos-delay", "100");

      } else if (!div.hasAttribute("data-aos")) {
        const random = randomAnimations[Math.floor(Math.random() * randomAnimations.length)];
        div.setAttribute("data-aos", random);
      }
    });

    // Apply fade-left to hero containers across pages
    const heroSelectors = [
      ".hero .container",
      ".request-hero .container",
      ".execution-hero .container",
      ".proposal-hero .container",
      ".planmyevent-hero .container",
      ".discovery-hero .container",
      ".concept-hero .container",
      ".services-hero .container",
      ".about-hero .container",
      ".contact-hero .container",
      ".meet-founder-hero .container",
      ".hero-text",
      ".hero-text h1",
      ".hero-text p"
    ];

    heroSelectors.forEach(selector => {
      const hero = document.querySelector(selector);
      if (hero && !hero.hasAttribute("data-aos")) {
        hero.setAttribute("data-aos", "fade-left");
        hero.setAttribute("data-aos-delay", "100");
      }
    });

    // Initialize AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  });

