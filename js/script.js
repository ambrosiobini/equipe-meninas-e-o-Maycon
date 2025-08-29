document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Modo escuro com persistência
  const botaoModoEscuro = document.getElementById("modo-escuro-toggle");
  if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
      document.body.classList.toggle("modo-escuro");
      localStorage.setItem("modoEscuro", document.body.classList.contains("modo-escuro"));
    });

    if (localStorage.getItem("modoEscuro") === "true") {
      document.body.classList.add("modo-escuro");
    }
  }

  // ❓ FAQ interativo
  document.querySelectorAll(".faq-pergunta").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("ativa");
    });
  });
});
listaProjetos.addEventListener('click', function(e) {
  if (e.target.classList.contains('curtir')) {
    e.target.textContent = 'Curtido ❤️';
    e.target.disabled = true;
    e.target.classList.add('animado');

    // Remove a animação após 400ms
    setTimeout(() => {
      e.target.classList.remove('animado');
    }, 400);
  }
});

