const clock = document.getElementById('clock')

// console.log(date.toLocaleTimeString());


setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString()); 
    clock.innerHTML = `<span> ${date.toLocaleTimeString()}</span>`
} , 1000);