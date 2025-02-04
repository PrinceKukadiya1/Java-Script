const cchanger = document.querySelectorAll('.button')
// console.log(cchanger);
const body = document.querySelector('body')

cchanger.forEach(function (btn) {
    // console.log(btn);

    btn.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);


        const color = event.target.id
        switch (color) {
            case 'grey':
                body.style.backgroundColor = event.target.id
                break;

            case 'pink':
                body.style.backgroundColor = event.target.id
                break;

            case 'blue':
                body.style.backgroundColor = event.target.id
                break;

            case 'red':
                body.style.backgroundColor = event.target.id
                break;

            default:
                break;
        }

    })
})