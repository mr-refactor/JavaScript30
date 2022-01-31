document.addEventListener("DOMContentLoaded", () => {
    const SECOND_HAND = document.querySelector(".second-hand");
    const MINUTE_HAND = document.querySelector(".min-hand")
    const HOUR_HAND = document.querySelector(".hour-hand")
    
    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        SECOND_HAND.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        MINUTE_HAND.style.transform = `rotate(${minutesDegrees}deg)`;
        
        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        HOUR_HAND.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    setInterval(setDate, 1000);
})