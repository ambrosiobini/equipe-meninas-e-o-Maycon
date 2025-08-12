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
