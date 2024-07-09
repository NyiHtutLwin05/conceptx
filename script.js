document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-items a");
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-items");
  const navbar = document.getElementById("navbar");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((link) => link.classList.remove("active"));
      item.classList.add("active");
      const targetId = item.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  const counters = document.querySelectorAll(".number");
  const speed = 200;
  const animateCounters = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  const onScroll = () => {
    if (isElementInViewport(document.querySelector(".workflow-card"))) {
      animateCounters();
      window.removeEventListener("scroll", onScroll);
    }
  };

  window.addEventListener("scroll", onScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let isScrolling = false;
  let autoSlideTimer = null;

  function autoSlide() {
    if (!isScrolling) {
      isScrolling = true;
      slider.scrollLeft += slider.clientWidth; // Scroll to the next slide
      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Adjust slide interval (1 second in this example)
    }
  }

  slider.addEventListener("scroll", () => {
    clearTimeout(autoSlideTimer); // Clear previous timer
    autoSlideTimer = setTimeout(autoSlide, 1000); // Reset timer on scroll
  });

  autoSlideTimer = setTimeout(autoSlide, 1000); // Initial start of auto-slide
});

document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const imgContainers = document.querySelectorAll(".img-container");

  // Function to show images based on selected tab
  function showImages(tabName) {
    imgContainers.forEach((container) => {
      if (container.dataset.tab === tabName || tabName === "all") {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  // Initial display: show 'all' images
  showImages("all");

  // Add click event listeners to tab links
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const tabName = this.dataset.tab;

      // Remove 'active' class from all tab links
      tabLinks.forEach((tab) => tab.classList.remove("active"));

      // Add 'active' class to the clicked tab link
      this.classList.add("active");

      // Show images based on the selected tab
      showImages(tabName);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-q");

  faqItems.forEach((item) => {
    const toggleBtn = item.querySelector(".toggle-btn");
    toggleBtn.addEventListener("click", function () {
      item.classList.toggle("open");
    });
  });
});
