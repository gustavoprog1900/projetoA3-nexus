// MENU MOBILE

const menuMobile = document.getElementById("menuMobile");
const navbar = document.getElementById("navbar");

menuMobile.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// FILTRO DE PRODUTOS

const buttons = document.querySelectorAll("[data-filter]");
const products = document.querySelectorAll(".product-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    products.forEach((product) => {
      if (filter === "todos" || product.dataset.category === filter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// NEWSLETTER

const form = document.getElementById("newsletterForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "" || email === "") {
    mensagem.style.color = "#ff5555";
    mensagem.innerText = "Preencha todos os campos.";

    return;
  }

  if (!emailRegex.test(email)) {
    mensagem.style.color = "#ff5555";
    mensagem.innerText = "Digite um email válido.";

    return;
  }

  mensagem.style.color = "#4caf50";
  mensagem.innerText = "Cadastro realizado com sucesso!";

  form.reset();
});

// BOTÃO VOLTAR AO TOPO

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
