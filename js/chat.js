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
  salvarMensagem("Você", mensagem);

  const resposta = gerarResposta(mensagem);
  setTimeout(() => {
    adicionarMensagem("CEAB", resposta);
    salvarMensagem("CEAB", resposta);
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

// 🧠 Salvar mensagens no LocalStorage
function salvarMensagem(remetente, texto) {
  let historico = JSON.parse(localStorage.getItem("chatHistorico")) || [];
  historico.push({ remetente, texto });
  localStorage.setItem("chatHistorico", JSON.stringify(historico));
}

// 🔄 Carregar histórico ao abrir
window.addEventListener("load", () => {
  const historico = JSON.parse(localStorage.getItem("chatHistorico")) || [];
  historico.forEach(msg => adicionarMensagem(msg.remetente, msg.texto));

  const salvas = JSON.parse(localStorage.getItem("respostasPersonalizadas"));
  if (salvas) respostasPersonalizadas = salvas;
});

// 🧠 Treinamento personalizado
const formTreinamento = document.getElementById("form-treinamento");
const novaPergunta = document.getElementById("nova-pergunta");
const novaResposta = document.getElementById("nova-resposta");
const feedback = document.getElementById("treinamento-feedback");

// Inicializa objeto de respostas
let respostasPersonalizadas = JSON.parse(localStorage.getItem("respostasPersonalizadas")) || {
  matricula: "Você pode fazer a matrícula entrando em contato pelo WhatsApp ou visitando a secretaria.",
  horario: "As aulas começam às 7h30 e vão até 12h no turno da manhã.",
  curso: "Oferecemos Ensino Fundamental e Médio com foco em cidadania e preparação para o ENEM.",
  localizacao: "Estamos localizados em Almirante Tamandaré, PR. Veja o mapa na seção 'Localização'.",
  contato: "Você pode nos contatar pelo WhatsApp no número (41) 99189-3814."
};

formTreinamento.addEventListener("submit", (e) => {
  e.preventDefault();

  const chave = novaPergunta.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const resposta = novaResposta.value.trim();

  if (chave && resposta) {
    respostasPersonalizadas[chave] = resposta;
    localStorage.setItem("respostasPersonalizadas", JSON.stringify(respostasPersonalizadas));

    feedback.textContent = `✅ Nova resposta adicionada para "${chave}"!`;
    formTreinamento.reset();

    setTimeout(() => {
      feedback.textContent = "";
    }, 4000);
  }
});

// 🧠 Gerar resposta automática
function gerarResposta(pergunta) {
  const texto = pergunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (const chave in respostasPersonalizadas) {
    if (texto.includes(chave)) {
      return respostasPersonalizadas[chave];
    }
  }

  return "Desculpe, não entendi sua pergunta. Você pode reformular ou entrar em contato direto conosco.";
}
