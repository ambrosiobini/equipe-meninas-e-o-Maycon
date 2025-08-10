// 🌙 Modo escuro
document.getElementById("modo-escuro-toggle").addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");
});

// ❓ FAQ interativo
document.querySelectorAll(".faq-pergunta").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("ativa");
  });
});

// 💬 Chat IA Google
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.querySelector(".chat-box");
chatToggle.addEventListener("click", () => {
  chatBox.classList.toggle("ativo");
});

const chatInput = document.getElementById("chat-input");
const chatEnviar = document.getElementById("chat-enviar");
const chatMensagens = document.getElementById("chat-mensagens");

chatEnviar.addEventListener("click", async () => {
  const mensagem = chatInput.value.trim();
  if (!mensagem) return;

  const msgUser = document.createElement("p");
  msgUser.innerHTML = `<strong>Você:</strong> ${mensagem}`;
  chatMensagens.appendChild(msgUser);
  chatInput.value = "";

  const resposta = await fetch("AIzaSyCPe6rl7EBcHC0bbZCd1agefKcyW5c0fH8", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: mensagem }] }]
    })
  });

  const dados = await resposta.json();
  const textoIA = dados.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui responder agora.";

  const msgIA = document.createElement("p");
  msgIA.innerHTML = `<strong>CEAB:</strong> ${textoIA}`;
  chatMensagens.appendChild(msgIA);
});
