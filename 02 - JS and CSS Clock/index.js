document.addEventListener('DOMContentLoaded', () => {
    
   const secondHand = document.querySelector('.second-hand')
   const hourHand = document.querySelector('.hour-hand')
   const minHand = document.querySelector('.min-hand')

    function setTime(){
        const now = new Date();
        const [seconds, mins, hours] = [now.getSeconds(), now.getMinutes(), now.getHours()];

        // second hand
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        // minute hand
        const minsDegrees = (( mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDegrees}deg)`;

        // hour hand
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    };

    setInterval(setTime, 1000);
});