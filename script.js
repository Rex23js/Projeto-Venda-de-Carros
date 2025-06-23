document.addEventListener("DOMContentLoaded", function () {
  const corpo = document.body;

  // ======= Dropdown =======
  const dropButtons = document.querySelectorAll(".Drop_Button");
  const dropContents = document.querySelectorAll(".Drop_Content");

  dropButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();

      dropContents.forEach(function (content) {
        content.classList.remove("show");
      });
      dropButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      dropContents[index].classList.toggle("show");
      button.classList.toggle("active");
    });
  });

  window.addEventListener("click", function (event) {
    if (!event.target.closest(".Drop_Down")) {
      dropContents.forEach(function (content) {
        content.classList.remove("show");
      });
      dropButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });
    }
  });

  // ======= Tema Claro/Escuro =======
  const botaoTema = document.getElementById("Tema_Button");
  botaoTema.addEventListener("click", function () {
    corpo.classList.toggle("Tema_Escuro");
    corpo.classList.toggle("Tema_Claro");
  });

  // ======= Scroll Shadow no Header =======
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("Scroll_Shadow");
    } else {
      header.classList.remove("Scroll_Shadow");
    }
  });

  // ======= Modo de Acessibilidade =======
  const botaoAcessibilidade = document.getElementById("Acessibilidade_Button");
  if (botaoAcessibilidade) {
    botaoAcessibilidade.addEventListener("click", function () {
      corpo.classList.toggle("Modo_Acessibilidade");
    });
  }

  // ======= Filtro de Busca (Somente por Título) =======
  const inputBusca = document.querySelector(".Input_Busca");
  const cards = document.querySelectorAll(".Cards");
  const msgSemResultados = document.getElementById("semResultados");

  function filtrarCards(termo) {
    let cardsVisiveis = 0;
    cards.forEach(function (card) {
      const titulo = card.querySelector("h3")
        ? card.querySelector("h3").innerText.toLowerCase()
        : "";

      if (titulo.includes(termo)) {
        card.style.display = "flex";
        cardsVisiveis++;
      } else {
        card.style.display = "none";
      }
    });
    if (msgSemResultados) {
      msgSemResultados.hidden = cardsVisiveis > 0;
    }
  }

  if (inputBusca) {
    inputBusca.addEventListener("input", function () {
      filtrarCards(inputBusca.value.trim().toLowerCase());
    });
  }

  const botaoBusca = document.getElementById("Search_Button");
  if (botaoBusca) {
    botaoBusca.addEventListener("click", function () {
      filtrarCards(inputBusca.value.trim().toLowerCase());
    });
  }

  // ======= Formulário de Compra (Abrir Modal) =======
  const botoesComprar = document.querySelectorAll(".Card_Button");
  const formulario = document.getElementById("FormularioCompra");
  const campoCarro = document.getElementById("carroSelecionado");
  const botaoFecharFormulario = document.getElementById("fecharFormulario");

  if (botoesComprar && formulario && campoCarro) {
    botoesComprar.forEach(function (botao) {
      botao.addEventListener("click", function () {
        const tituloCarro = botao.parentElement.querySelector("h3")
          ? botao.parentElement.querySelector("h3").innerText
          : "Carro selecionado";

        campoCarro.value = tituloCarro;
        formulario.classList.remove("hidden");
      });
    });

    // Fechar Modal
    if (botaoFecharFormulario) {
      botaoFecharFormulario.addEventListener("click", function () {
        formulario.classList.add("hidden");
      });
    }

    // Submissão do Formulário
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Pedido enviado com sucesso!");
      formulario.classList.add("hidden");
      formulario.reset();
    });
  }
});
