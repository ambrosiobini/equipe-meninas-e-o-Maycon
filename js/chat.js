// 💬 Abrir/fechar chat
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.querySelector(".chat-box");

chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("ativo");
});

// 📩 Enviar mensagem
const chatInput = document.getElementById("chat-input");
const chatEnviar = document.getElementById("chat-enviar");
const chatMensagens = document.getElementById("chat-mensagens");

chatEnviar.addEventListener("click", () => {
  const mensagem = chatInput.value.trim();
  if (mensagem === "") return;

  adicionarMensagem("Você", mensagem);

  // Usa a função do resposta.js
  const resposta = gerarResposta(mensagem);
  setTimeout(() => {
    adicionarMensagem("CEAB", resposta);
  }, 600);

  chatInput.value = "";
});

// 🧾 Adiciona mensagens ao histórico
function adicionarMensagem(remetente, texto) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${remetente}:</strong> ${texto}`;
  chatMensagens.appendChild(p);
  chatMensagens.scrollTop = chatMensagens.scrollHeight;
}
const formTreinamento = document.getElementById("form-treinamento");
const novaPergunta = document.getElementById("nova-pergunta");
const novaResposta = document.getElementById("nova-resposta");
const feedback = document.getElementById("treinamento-feedback");

formTreinamento.addEventListener("submit", (e) => {
  e.preventDefault();

  const chave = novaPergunta.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const resposta = novaResposta.value.trim();

  if (chave && resposta) {
    respostasPersonalizadas[chave] = resposta;
    feedback.textContent = `✅ Nova resposta adicionada para "${chave}"!`;
    formTreinamento.reset();

    setTimeout(() => {
      feedback.textContent = "";
    }, 4000);
  }
});
