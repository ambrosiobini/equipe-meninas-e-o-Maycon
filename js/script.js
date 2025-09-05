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
const toggle = document.getElementById('modo-escuro-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');
});

const form = document.getElementById('form-projeto');
const listaProjetos = document.getElementById('lista-projetos');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = form.nome.value;
  const descricao = form.descricao.value;
  const categoria = form.categoria.value;

  const projeto = document.createElement('div');
  projeto.classList.add('card-projeto');
  projeto.innerHTML = `
    <h4>${nome}</h4>
    <p>${descricao}</p>
    <p><strong>Curso:</strong> ${categoria}</p>
    <button class="curtir">Curtir ❤️</button>
  `;

  listaProjetos.appendChild(projeto);

  alert('Projeto enviado com sucesso!');
  form.reset();
});

listaProjetos.addEventListener('click', function(e) {
  if (e.target.classList.contains('curtir')) {
    e.target.textContent = 'Curtido ❤️';
    e.target.disabled = true;
  }
});

