const menuHamburguer = document.getElementById('menu-hamburguer');
const menuList = document.querySelector('.menu-list');

menuHamburguer.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuHamburguer.classList.toggle('open'); // Adicionando a classe 'open'
});



