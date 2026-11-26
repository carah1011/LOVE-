/**
 * A Little Place for Us
 * Vanilla JS — gentle interactions, stars, petals, music toggle, card flips
 */

(function () {
  "use strict";

  // ---------- STARS ----------
  function createStars() {
    const container = document.getElementById("stars");
    if (!container) return;

    const count = window.innerWidth < 600 ? 60 : 110;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--duration", 3 + Math.random() * 5 + "s");
      star.style.setProperty("--delay", Math.random() * 4 + "s");
      // Vary size slightly
      const size = 1 + Math.random() * 2;
      star.style.width = size + "px";
      star.style.height = size + "px";
      frag.appendChild(star);
    }
    container.appendChild(frag);
  }

  // ---------- FLOATING PETALS ----------
  function createPetals() {
    const container = document.getElementById("petals");
    if (!container) return;

    const count = window.innerWidth < 600 ? 8 : 14;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = Math.random() * 100 + "%";
      petal.style.animationDuration = 12 + Math.random() * 18 + "s";
      petal.style.animationDelay = Math.random() * 12 + "s";
      petal.style.opacity = 0.2 + Math.random() * 0.25;
      // Slight size variation
      const scale = 0.7 + Math.random() * 0.8;
      petal.style.width = 10 * scale + "px";
      petal.style.height = 10 * scale + "px";
      frag.appendChild(petal);
    }
    container.appendChild(frag);
  }

  // ---------- MUSIC TOGGLE (optional, OFF by default) ----------
  function initMusic() {
    const audio = document.getElementById("bg-music");
    const btn = document.getElementById("music-toggle");
    if (!audio || !btn) return;

    // Only enable if a real source exists
    const hasSource = audio.querySelector("source") && audio.querySelector("source").src;
    if (!hasSource) {
      btn.style.display = "none"; // hide if no track provided
      return;
    }

    let playing = false;

    btn.addEventListener("click", () => {
      if (playing) {
        audio.pause();
        btn.classList.remove("active");
        btn.setAttribute("aria-label", "Play soft background music");
      } else {
        audio.volume = 0.25; // keep it gentle
        audio.play().catch(() => {
          // Autoplay blocked — user gesture already happened, but just in case
        });
        btn.classList.add("active");
        btn.setAttribute("aria-label", "Pause soft background music");
      }
      playing = !playing;
    });
  }

  // ---------- OPENING BUTTON → scroll to letter ----------
  function initOpening() {
    const btn = document.getElementById("open-letter");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const letter = document.getElementById("letter");
      if (letter) {
        letter.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // ---------- READ AGAIN → back to top ----------
  function initReadAgain() {
    const btn = document.getElementById("read-again");
    if (!btn) return;

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---------- CARD FLIP (works on touch / keyboard too) ----------
  function initCards() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      // Click / tap to toggle (helpful on mobile)
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });

      // Keyboard support
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.classList.toggle("flipped");
        }
      });
    });
  }

  // ---------- REVEAL ON SCROLL (gentle fade-in) ----------
  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Add a soft entrance to key blocks
    document.querySelectorAll(".letter, .love-letter, .card, .truth, .gallery-item, .promise-box, .final-content").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(el);
    });

    // When visible
    const style = document.createElement("style");
    style.textContent = `
      .letter.visible, .love-letter.visible, .card.visible, .truth.visible,
      .gallery-item.visible, .promise-box.visible, .final-content.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ---------- INIT ----------
  document.addEventListener("DOMContentLoaded", () => {
    createStars();
    createPetals();
    initMusic();
    initOpening();
    initReadAgain();
    initCards();
    initReveal();
  });
})();
