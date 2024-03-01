// Navbar 토글 버튼 클릭
const navbarMenu = document.querySelector('.header_menu');
const navbarToggle = document.querySelector('.header_toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫기
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});