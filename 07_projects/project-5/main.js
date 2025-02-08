const randomcolor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let clear; 

const startChangingColor = () => {

    const bgcolor = () => {
        document.body.style.backgroundColor = randomcolor();
    }

    if(!clear){    clear = setInterval(bgcolor, 1000)
    }
}

const stopChangingColor = () => { 
    clearInterval(clear)
    clear = null
}

document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)