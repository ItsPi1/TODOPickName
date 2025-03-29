document.addEventListener('DOMContentLoaded', () => {

    const textElement = document.getElementById('fent-day-text');
    
    if (textElement) {
        const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        const currentDay = days[new Date().getDay()];
        textElement.textContent = `IT'S FENT ${currentDay}`;
        
        const randomH = Math.random() * 8 + 2; // 2-10%
        const randomV = Math.random() * 8 + 2; // 2-10%
        
        const hDir = Math.random() > 0.5 ? 1 : -1;
        const vDir = Math.random() > 0.5 ? 1 : -1;
        
        const hOffset = randomH * hDir;
        const vOffset = randomV * vDir;
        
        textElement.style.left = `calc(50% + ${hOffset}%)`; // Base position (Center)
        textElement.style.top = `calc(14% + ${vOffset}%)`; // Base position (From the Top)
        textElement.style.transform = 'translateX(-50%)'; // Make sure the text stays horizontally centered despite the offset
    }
});