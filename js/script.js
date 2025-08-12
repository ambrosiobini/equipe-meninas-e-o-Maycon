document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Modo escuro
  const botaoModoEscuro = document.getElementById("modo-escuro-toggle");
  if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", () => {
      document.body.classList.toggle("modo-escuro");
    });
  }

  // ❓ FAQ interativo
  document.querySelectorAll(".faq-pergunta").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.classList.toggle("ativa");
    });
  });
});
