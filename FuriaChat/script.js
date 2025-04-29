const openChatBtn = document.getElementById('openChat');
const chatContainer = document.getElementById('chatContainer');
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const loading = document.getElementById('loading');

openChatBtn.addEventListener('click', () => {
  chatContainer.classList.toggle('hidden');
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === '') return;
  addMessage('Você', userText);
  respondBot(userText);
  userInput.value = '';
}

function addMessage(sender, text) {
  const message = document.createElement('div');
  message.classList.add('message');
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondBot(userText) {
  loading.classList.remove('hidden');

  let response = '';
  switch(userText.toLowerCase()) {
    case '/noticias':
      response = 'Últimas notícias: FURIA vence clássico contra MIBR! Próximo jogo: amanhã às 18h.';
      break;
    case '/proximosjogos':
      response = 'Próximos jogos:\n- vs NAVI (28/04 - 18h)\n- vs Vitality (30/04 - 16h)';
      break;
    case '/estatisticas':
      response = 'KSCERATO: 1.22 rating\nYuurih: 1.19 rating\nChelo: 1.05 rating';
      break;
    case '/quiz':
      response = 'Pergunta: Qual ano a FURIA entrou no cenário internacional de CS? (2018, 2019 ou 2020?)';
      break;
    case '/loja':
      response = 'Compre produtos oficiais da FURIA: https://loja.furia.gg/';
      break;
    default:
      response = 'Comando não reconhecido. Tente: /noticias, /proximosjogos, /estatisticas, /quiz ou /loja.';
  }

  setTimeout(() => {
    addMessage('FURIA Bot', response);
    loading.classList.add('hidden');
  }, 1500);
}
