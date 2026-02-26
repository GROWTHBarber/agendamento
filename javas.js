// 🔥 carregar dados salvos
let agenda = JSON.parse(localStorage.getItem("agendando..")) || [];

let nome = document.getElementById("nome");
let data = document.getElementById("data");
let hora = document.getElementById("hora");

let btn = document.getElementById("agendar");
let lista = document.getElementById("lista");

let podeagendar = false

function enviarWhats() {

  let nome = document.getElementById("nome").value;
  let data = document.getElementById("data").value;
  let hora = document.getElementById("hora").value;
  
   if (!nome.value || !data.value || !hora.value) {
        window.alert("Preencha tudo!");
        return; // para a função aqui
    }

  let mensagem =
    `Olá, meu nome é ${nome}%0A` +
    `Quero agendar:%0A` +
    `Data: ${data}%0A` +
    `Hora: ${hora}`;

  let numero = "5581993982130";

  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}




function mostraragenda() {

    if (!nome.value || !data.value || !hora.value) {
        window.alert("Preencha tudo!");
        return; // para a função aqui
    }

    lista.innerHTML = "";

    agenda.forEach(b => {
        const li = document.createElement("li");

        li.textContent = `${b.nome} — ${b.data} às ${b.hora}`;

        lista.appendChild(li);
    });

}

// mostrar ao abrir
mostraragenda();

btn.addEventListener("click", () => {

    const novo = {
        nome: nome.value,
        data: data.value,
        hora: hora.value
    };

    agenda.push(novo);

    // 🔥 salvar no LocalStorage
    localStorage.setItem("agendando..", JSON.stringify(agenda));

    mostraragenda();
});




