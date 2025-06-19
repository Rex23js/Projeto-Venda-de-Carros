document.addEventListener('DOMContentLoaded', function () {
    const dropButton = document.querySelector('.Drop_Button');
    const dropContent = document.querySelector('.Drop_Content');

    dropButton.addEventListener('click', function (event) {
        event.stopPropagation();  // Impede o clique de fechar o menu imediatamente
        dropContent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.closest('.Drop_Down') && dropContent.classList.contains('show')) {
            dropContent.classList.remove('show');
        }
    });
});
