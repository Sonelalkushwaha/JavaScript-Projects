const btnEl = document.querySelector(".btn")
btnEl.addEventListener("mouseover" , (event)=>{
    const x = (event.pageX - btnEl.offSetLeft);
    const y = (event.pageY - btnEl.offSetTop)

    btnEl.style.setProperty("--xPos" , x + "px")
    btnEl.style.setProperty("--yPos" , y + "px")
})