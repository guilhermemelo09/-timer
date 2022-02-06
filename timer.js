function criaHoraDosSegundos(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-br',{hour12:false, timeZone:'GMT'});
}

const relogioEl = document.querySelector('.relogio');
const btnIniciarEl = document.querySelector('.iniciar');
const btnPausarEl = document.querySelector('.pausar');
const btnZerarEl = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciarContagem() {
    relogioEl.style.color='black';
    clearInterval(timer);
    timer = setInterval(function() {
        segundos++;
        relogioEl.innerHTML = criaHoraDosSegundos(segundos);
    },1000);
}
function PausarContagem(){
    relogioEl.style.color='red';
    clearInterval(timer);
}
function zerarRelogio (){
    clearInterval(timer);
    relogioEl.style.color='red';
    relogioEl.innerHTML = '00:00:00'
    segundos = 0;
}
btnIniciarEl.addEventListener('click', iniciarContagem);
btnPausarEl.addEventListener('click',PausarContagem);
btnZerarEl.addEventListener('click',zerarRelogio);
