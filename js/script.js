let spanDia = document.querySelector('#dia');
let spanMes = document.querySelector('#mes');
let spanAno = document.querySelector('#ano');


/************** */

let spanHora = document.querySelector('#horas');
let spanMin = document.querySelector('#minutos');
let spanSec = document.querySelector('#segundos');
/***************** */


function updateTime(){
    let listaMeses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    
    let tempo = new Date();
    let dia = tempo.getDate();
    let mes = tempo.getMonth();
    let ano = tempo.getFullYear();

    mes = listaMeses[mes];
    
    let hora = tempo.getHours();
    let minuto = tempo.getMinutes();
    let segundos = tempo.getSeconds();

    

    /****** */
    spanDia.textContent = dia;
    spanMes.textContent = mes;
    spanAno.textContent = ano;

    /**************** */
    spanHora.textContent = hora;
    spanMin.textContent = minuto;
    spanSec.textContent = segundos;


}

function initTime(){
    setInterval(updateTime,1000);

}