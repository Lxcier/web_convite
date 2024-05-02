// animações
AOS.init();

// confirmar presença
const botao = document.getElementById("confirm-button");
const elemento = document.getElementById("message");

botao.addEventListener("click", function() {
    elemento.classList.add("hero__confirm-message--is-active");
});

// contador / timer
const eventTime = new Date ("Oct 05, 2024 17:30:00");
const eventTimeStamp = eventTime.getTime();

const timer = setInterval(function(){
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const mounthInMS = 1000 * 60 * 60 * 24 * 30;
    const dayInMS = 1000 * 60 * 60 * 24;
    const hourInMS = 1000 * 60 * 60;
    const minutesInMS = 1000 * 60;

    const mounthsUntilEvent = Math.floor(timeUntilEvent / mounthInMS);
    const daysUntilEvent = Math.floor((timeUntilEvent % mounthInMS) / dayInMS) ;
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayInMS) / hourInMS);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourInMS) / minutesInMS);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minutesInMS) / 1000);

    document.getElementById('timer').innerHTML = `${mounthsUntilEvent}m ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`

    if (timeUntilEvent < 0) {
        clearInterval (timer);
        document.getElementById('timer-text').innerHTML = 'Ish! Já era... Agora só ano que vem ^-^'
    }
})