const hoursEl = document.querySelector(".hours");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");

function updateClock() {
    const currentDate = new Date();
    setTimeout(updateClock , 1000);
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
   
    const hourdegree = (hour/12) * 360;
    hoursEl.style.transform = `rotate(${hourdegree}deg)`;
    
    const minutedegree = (minute/60) * 360;
    minuteEl.style.transform = `rotate(${minutedegree}deg)`;

    const secondDegree = (second/60) *360;
    secondEl.style.transform = `rotate(${secondDegree}deg)`;
};
updateClock();


// setInterval(upadateClock,1000)  second method