// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav ul').classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Đóng menu mobile sau khi click
        document.querySelector('.nav ul').classList.remove('active');
    });
});

// Active nav link on scroll (tùy chọn nâng cao)
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});



// Đóng modal khi click ngoài
window.onclick = function(e) {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) closeModal();
}

// Lightbox - Phóng to ảnh khi click
document.querySelectorAll('.slider-track img').forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Khóa scroll nền
    });
});

// Đóng lightbox
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Đóng khi click ngoài ảnh
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});