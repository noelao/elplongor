window.addEventListener('DOMContentLoaded', () => {
// 1. Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const targetId = urlParams.get('target'); // Mengambil nilai 'section'

if (targetId) {
const targetElement = document.getElementById(targetId);

if (targetElement) {
// 2. Beri delay sedikit lalu scroll dengan halus
setTimeout(() => {
targetElement.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}, 500); // Jeda 0.5 detik setelah halaman terbuka
}
}
});