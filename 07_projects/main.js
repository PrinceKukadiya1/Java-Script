const clchanger = document.querySelectorAll('.button')
console.log(clchanger);
const body = document.querySelector('body')
// console.log(body);

clchanger.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }

        else if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }

        else if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }

        else if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }

        else {
            body.style.backgroundColor = 'white';
        }

    })
}
);