let slides = document.querySelectorAll('.slideshow img');
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    current = (current + 1) % slides.length; // Pastikan slides.length > 0
    showSlide(current);
}

// Pastikan interval dimulai setelah DOM siap
document.addEventListener("DOMContentLoaded", () => {
    showSlide(current); // Menampilkan slide pertama
    setInterval(nextSlide, 5000); // Mengganti slide setiap 5 detik
});
