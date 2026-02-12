// -------------------- COUNTER --------------------
let counter = 0;

function updateDisplay() {
    document.getElementById("counter").textContent = counter;
}

function tickUp() {
    counter++;
    updateDisplay();
}

function tickDown() {
    counter--;
    updateDisplay();
}

// -------------------- FOR LOOP --------------------
function runForLoop() {
    let currentValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= currentValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result;
}

// -------------------- ODD NUMBERS --------------------
function showOddNumbers() {
    let currentValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= currentValue; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result;
}

// -------------------- ARRAYS --------------------
function addMultiplesToArray() {

    let currentValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    for (let i = currentValue; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }

    console.log(multiples);
}

// -------------------- PRINT CAR OBJECT --------------------
function printCarObject() {

    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

// -------------------- LOAD CAR OBJECT --------------------
function loadCar(num) {

    let car;

    if (num === 1) {
        car = carObject1;
    } else if (num === 2) {
        car = carObject2;
    } else if (num === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// -------------------- CHANGE STYLE --------------------
function changeColor(num) {

    let paragraph = document.getElementById("styleParagraph");

    if (num === 1) {
        paragraph.style.color = "red";
    } else if (num === 2) {
        paragraph.style.color = "green";
    } else if (num === 3) {
        paragraph.style.color = "blue";
    }
}
