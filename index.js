document.addEventListener("DOMContentLoaded", function () {
  /* =====================
     Smooth Scroll
  ====================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* =====================
     Navbar & Sidebar
  ====================== */
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  if (hamburger && sidebar && closeSidebar) {
    function openSidebar() {
      sidebar.style.width = "250px";
      document.body.style.overflow = "hidden";
    }

    function closeSidebarMenu() {
      sidebar.style.width = "0";
      document.body.style.overflow = "auto";
    }

    hamburger.addEventListener("click", openSidebar);
    closeSidebar.addEventListener("click", closeSidebarMenu);

    document.addEventListener("click", function (e) {
      if (
        sidebar.style.width === "250px" &&
        !sidebar.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeSidebarMenu();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidebarMenu();
      }
    });
  }

  /* =====================
     Hero Section Animation
  ====================== */
  const heroElements = document.querySelectorAll(
    ".hero-text, .hero-text h1, .hero-text p"
  );
  heroElements.forEach((el, i) => {
    el.setAttribute("data-aos", "fade-right");
    el.setAttribute("data-aos-delay", `${100 + i * 100}`);
  });

  /* =====================
     Intelligent AOS Assignment
  ====================== */
  const randomAnimations = [
    "fade-up", "fade-down", "fade-left",
    "zoom-out", "flip-left", "flip-right"
  ];

  document.querySelectorAll("div").forEach((div, i) => {
    if (!div.hasAttribute("data-aos")) {
      const random = randomAnimations[Math.floor(Math.random() * randomAnimations.length)];
      div.setAttribute("data-aos", random);
      div.setAttribute("data-aos-delay", `${(i % 5) * 100}`);
    }
  });

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }

  /* =====================
     Contact Form Validation
  ====================== */
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const inputs = this.querySelectorAll("input[required], textarea[required]");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
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

  /* =====================
     Countdown Timer
  ====================== */
  const countdownElement = document.getElementById("countdown");
  if (countdownElement) {
    const targetDate = new Date("2025-12-01T00:00:00").getTime();
    setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      countdownElement.textContent = `${days} days left!`;
    }, 1000);
  }

  /* =====================
     Testimonial Slider
  ====================== */
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  }

  if (prevBtn && nextBtn && testimonials.length) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }, 5000);

    showTestimonial(currentIndex);
  }
});
