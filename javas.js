// 🔥 carregar dados salvos
let agenda = JSON.parse(localStorage.getItem("agendando..")) || [];

let nome = document.getElementById("nome");
let data = document.getElementById("data");
let hora = document.getElementById("hora");

let btn = document.getElementById("agendar");
let lista = document.getElementById("lista");

let podeagendar = false




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




