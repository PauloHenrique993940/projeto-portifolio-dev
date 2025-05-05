const menuHamburguer = document.getElementById('menu-hamburguer');
const menuList = document.querySelector('.menu-list');
const navUl = document.querySelector('nav > ul');
const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

// Função para alternar o menu hambúrguer e o ícone
menuHamburguer.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuHamburguer.classList.toggle('open'); // Adicionando a classe 'open' para o ícone
});

// Define o tema inicial com base no localStorage
if (localStorage.getItem('theme') === 'light') {
    themeLink.href = 'public/css/light-theme.css'; // Certifique-se que o nome do arquivo está correto
    themeToggle.checked = true;
} else {
    themeLink.href = 'public/css/styles.css';
    themeToggle.checked = false;
}

// Evento para troca de tema
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        themeLink.href = 'public/css/light-theme.css'; // Certifique-se que o nome do arquivo está correto
        localStorage.setItem('theme', 'light');
    } else {
        themeLink.href = 'public/css/styles.css';
        localStorage.setItem('theme', 'dark');
    }
});



