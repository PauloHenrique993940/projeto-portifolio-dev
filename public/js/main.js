// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Botão "Entrar em Contato"
const botaoContato = document.querySelector('#botao-contato');
const contato = document.querySelector('#contato');
if (botaoContato && contato) {
    botaoContato.addEventListener('click', function (e) {
        e.preventDefault();
        contato.scrollIntoView({ behavior: 'smooth' });
    });
}

// Animação de preenchimento das barras de habilidades
document.querySelectorAll('.tecnologias .bar div').forEach((bar, index) => {
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = '100%';
    }, index * 150); // atraso em cascata
});

// Formulário: alerta simples de envio
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
}


