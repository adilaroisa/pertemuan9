// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.documentElement.classList.contains("dark-mode"));
}

// Load dark mode from localStorage
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.documentElement.classList.add("dark-mode");
  }

  // Tampilkan promo hanya di index.html
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
    const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
    setTimeout(() => promoModal.show(), 1500);
  }

  // Inisialisasi manual carousel agar autoplay jalan
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
    new bootstrap.Carousel(heroCarousel, {
      interval: 3000,
      ride: 'carousel',
      pause: false
    });
  }
});
