document.addEventListener('DOMContentLoaded', function () {
    // === Dropdown ===
    const dropButtons = document.querySelectorAll('.Drop_Button');
    const dropContents = document.querySelectorAll('.Drop_Content');

    dropButtons.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            dropContents.forEach(content => content.classList.remove('show'));
            dropButtons.forEach(btn => btn.classList.remove('active'));
            dropContents[index].classList.toggle('show');
            button.classList.toggle('active');
        });
    });

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.Drop_Down')) {
            dropContents.forEach(content => content.classList.remove('show'));
            dropButtons.forEach(btn => btn.classList.remove('active'));
        }
    });

    // === Tema ===
    const botaoTema = document.getElementById('Tema_Button');
    const corpo = document.body;
    botaoTema.addEventListener('click', function () {
        corpo.classList.toggle('Tema_Escuro');
        corpo.classList.toggle('Tema_Claro');
    });

    // === Scroll Shadow ===
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            header.classList.add('Scroll_Shadow');
        } else {
            header.classList.remove('Scroll_Shadow');
        }
    });
});
