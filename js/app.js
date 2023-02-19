// Background color change
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

    document.getElementById('card1').addEventListener("mouseenter", function () {
    document.getElementById('card1').style.backgroundColor = randomColor();
});
    document.getElementById('card2').addEventListener("mouseenter", function () {
    document.getElementById('card2').style.backgroundColor = randomColor();
});
    document.getElementById('card3').addEventListener("mouseenter", function () {
    document.getElementById('card3').style.backgroundColor = randomColor();
});
    document.getElementById('card4').addEventListener("mouseenter", function () {
    document.getElementById('card4').style.backgroundColor = randomColor();
});
    document.getElementById('card5').addEventListener("mouseenter", function () {
    document.getElementById('card5').style.backgroundColor = randomColor();
});
    document.getElementById('card6').addEventListener("mouseenter", function () {
    document.getElementById('card6').style.backgroundColor = randomColor();
});

// Utilities Function
function getValueWithField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

let serial = 0;
function createTable(cardNam, calcInput) {
    serial += 1;

    const createTr = document.createElement('tr');
    const tableBody = document.getElementById('table-container');
    createTr.innerHTML = `
    <th class="text-sm">${serial}.</th>
    <td class="text-sm">${cardNam}</td>
    <td class="text-sm">${calcInput}cm<sup>2</sup></td>
    <td class="text-sm"><button class="bg-indigo-600 text-white rounded-md p-2">Covert to m<sup>2</sup></button></td>
    <td><i id="delete-icon" class="fa-solid fa-trash-can text-red-500 cursor-pointer"></i></td>
    `
    tableBody.appendChild(createTr);

}

// Main js

// Card One
document.getElementById('calculate-btn').addEventListener('click', function () {
    const firstField = getValueWithField('first-field');
    const secondField = getValueWithField('second-field');
    const calcTriangle = firstField * secondField * 0.5;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcTriangle.toFixed(2));
})

// Card Two
document.getElementById('calculate-btn-two').addEventListener('click', function () {
    const firstField = getValueWithField('rect-first-field');
    const secondField = getValueWithField('rect-second-field');
    const calcRectangle = firstField * secondField;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('second-card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcRectangle.toFixed(2));
})

// Card Three
document.getElementById('calculate-btn-three').addEventListener('click', function () {
    const firstField = getValueWithField('para-first-field');
    const secondField = getValueWithField('para-second-field');
    const calcParallelogram = firstField * secondField;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('third-card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcParallelogram.toFixed(2));
})

// Card Four
document.getElementById('calculate-btn-four').addEventListener('click', function () {
    const firstField = getValueWithField('rhom-first-field');
    const secondField = getValueWithField('rhom-second-field');
    const calcRhombus = firstField * secondField * 0.5;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('four-card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcRhombus.toFixed(2));
})

// Card Five
document.getElementById('calculate-btn-five').addEventListener('click', function () {
    const firstField = getValueWithField('pen-first-field');
    const secondField = getValueWithField('pen-second-field');
    const calcPentagon = firstField * secondField * 0.5;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('five-card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcPentagon.toFixed(2));
})

// Card Six
document.getElementById('calculate-btn-six').addEventListener('click', function () {
    const firstField = getValueWithField('elli-first-field');
    const secondField = getValueWithField('elli-second-field');
    const calcEllipse = 3.14 * firstField * secondField;

    if (isNaN(firstField) || isNaN(secondField)) {
        alert('Please Enter a Number');
        return;
    } else if (firstField < 0 || secondField < 0) {
        alert('Please enter a number greater than zero.');
        return;
    }

    const cardName = document.getElementById('six-card-name');
    const cardNameString = cardName.innerText;

    createTable(cardNameString, calcEllipse.toFixed(2));
})