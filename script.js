function theme1(){
    document.body.style.background = 'linear-gradient(45deg, #FFB6C1, #FFD700, #87CEFA, #FF6347)';
}

function theme2(){
    document.body.style.background = 'linear-gradient(225deg, #4B0082, #8A2BE2, #00CED1, #FF1493)';
}

function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 500);
updateClock(); 

function randombackground() { //possible plus random
    function randomcolor() {
        const chiffrehexa = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += chiffrehexa[Math.floor(Math.random() * 16)]; 
        }
        return color;
    }
    function randomangle() {
        return Math.floor(Math.random() * 360); 
    }

    const angle = randomangle();
    const color1 = randomcolor();
    const color2 = randomcolor();
    const color3 = randomcolor();
    const color4 = randomcolor();

    document.body.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3}, ${color4})`;
    document.getElementById('random').style.background = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3}, ${color4})`;
}


