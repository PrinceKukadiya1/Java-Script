const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Give a valid height ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Give a valid weight ${weight}`;
    }

    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`

        if(BMI < 18.6){
            clacification.innerHTML = `<span> ${BMI} is Under Weight </span>`
        } 
        else if(BMI >= 18.6 || BMI < 24.9){
            clacification.innerHTML = `<span> ${BMI} is Normal Range </span>`
        } 
        else{
            clacification.innerHTML = `<span> ${BMI} is Overweight </span>`        
        }
    }
});