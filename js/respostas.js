const respostasPersonalizadas = {
  matricula: "Você pode fazer a matrícula entrando em contato pelo WhatsApp ou visitando a secretaria.",
  horario: "As aulas começam às 7h30 e vão até 12h no turno da manhã.",
  curso: "Oferecemos Ensino Fundamental e Médio com foco em cidadania e preparação para o ENEM.",
  localizacao: "Estamos localizados em Almirante Tamandaré, PR. Veja o mapa na seção 'Localização'.",
  contato: "Você pode nos contatar pelo WhatsApp no número (41) 99189-3814."
};

function gerarResposta(pergunta) {
  const texto = pergunta.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (const chave in respostasPersonalizadas) {
    if (texto.includes(chave)) {
      return respostasPersonalizadas[chave];
    }
  }

  return "Desculpe, não entendi sua pergunta. Você pode reformular ou entrar em contato direto conosco.";
}
