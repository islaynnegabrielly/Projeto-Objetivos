const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

botoes.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    botoes.forEach(b => b.classList.remove("ativo"));
    textos.forEach(t => t.classList.remove("ativo"));
    botao.classList.add("ativo");
    textos[i].classList.add("ativo");
  });
});

const contadores = document.querySelectorAll(".contador");
const tempos = [
  new Date("2025-08-01T00:00:00"),
  new Date("2025-10-15T00:00:00"),
  new Date("2025-11-30T00:00:00"),
  new Date("2025-12-20T00:00:00")
];

function calculaTempo(tempoObjetivo) {
  const tempoAtual = new Date();
  const diferenca = tempoObjetivo - tempoAtual;
  const segundos = Math.floor(diferenca / 1000) % 60;
  const minutos = Math.floor(diferenca / 1000 / 60) % 60;
  const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
  const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
  return diferenca > 0 ? [dias, horas, minutos, segundos] : [0, 0, 0, 0];
}

function atualizaCronometro() {
  tempos.forEach((tempo, i) => {
    const [dias, horas, minutos, segundos] = calculaTempo(tempo);
    document.getElementById(`dias${i}`).textContent = dias;
    document.getElementById(`horas${i}`).textContent = horas;
    document.getElementById(`min${i}`).textContent = minutos;
    document.getElementById(`seg${i}`).textContent = segundos;
  });
}

function iniciar() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

iniciar();
