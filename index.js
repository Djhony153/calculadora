let calculado = []


function calcular(a,b) {

    for (let i = 1; i <= b; i++) {
        calculado.push(a + " * " + i + " = " + (a * i))
    }

}

function returnValue(){

    const result = document.querySelector('.result')
    let ul = document.createElement('ul')

    for(let i = 0; i < calculado.length; i++){
        let li = document.createElement('li')
        li.className = "calculo-" + i
        li.innerText = calculado[i]
        ul.append(li)
        result.append(ul)
    }

}


document.querySelector('.calculate').addEventListener("click", function(ev) {
    ev.preventDefault()

    const numberOne = document.getElementById('numberOne').value
    const numberTwo = document.getElementById('numberTwo').value

    calcular(parseFloat(numberOne),parseFloat(numberTwo))

    returnValue()

    calculado.length = 0

})
