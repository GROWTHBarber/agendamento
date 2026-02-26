// ================================
// 🔥 ELEMENTOS
// ================================

const nomeInput = document.getElementById("nome");
const dataInput = document.getElementById("data");
const horaInput = document.getElementById("hora");
const btn = document.getElementById("agendar");
const lista = document.getElementById("lista");


// ================================
// 🔥 CARREGAR DADOS SALVOS
// ================================

let agenda = JSON.parse(localStorage.getItem("agendando")) || [];


// ================================
// 🔥 MOSTRAR NA TELA
// ================================

function mostrarAgenda() {

  lista.innerHTML = "";

  agenda.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} — ${item.data} às ${item.hora}`;
    lista.appendChild(li);
  });
}


// ================================
// 🔥 ENVIAR WHATSAPP (VERSÃO GITHUB)
// ================================

function enviarWhatsApp(nome, data, hora) {

  const numero = "5581993982130"; // 🔥 coloque seu número

  const mensagem =
`Olá, meu nome é ${nome}
Quero agendar:
Data: ${data}
Hora: ${hora}`;

  const url =
    "https://api.whatsapp.com/send?phone=" +
    numero +
    "&text=" +
    encodeURIComponent(mensagem);

  // 🔥 NÃO É BLOQUEADO
  window.location.assign(url);
}


// ================================
// 🔥 CLIQUE NO BOTÃO
// ================================

btn.addEventListener("click", () => {

  const nome = nomeInput.value.trim();
  const data = dataInput.value;
  const hora = horaInput.value;

  // validação
  if (!nome || !data || !hora) {
    alert("Preencha tudo!");
    return;
  }

  const novo = { nome, data, hora };

  agenda.push(novo);

  localStorage.setItem("agendando", JSON.stringify(agenda));

  mostrarAgenda();

  enviarWhatsApp(nome, data, hora);

});


// ================================
// 🔥 MOSTRAR AO ABRIR
// ================================

mostrarAgenda();



