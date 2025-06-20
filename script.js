document.addEventListener('DOMContentLoaded', function () {
    const dropButtons = document.querySelectorAll('.Drop_Button');
    const dropContents = document.querySelectorAll('.Drop_Content');

    dropButtons.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            event.stopPropagation();

            // 1. Fecha todos os dropdowns e remove .active de todos os botões
            dropContents.forEach(function (content) {
                content.classList.remove('show');
            });
            dropButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            // 2. Abre o dropdown do botão clicado
            dropContents[index].classList.toggle('show');

            // 3. Ativa o botão clicado
            button.classList.toggle('active');
        });
    });

    // 4. Fechar tudo se clicar fora
    window.addEventListener('click', function (event) {
        if (!event.target.closest('.Drop_Down')) {
            dropContents.forEach(function (content) {
                content.classList.remove('show');
            });
            dropButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
        }
    });
});
