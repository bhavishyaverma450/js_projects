const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const kelvinE1 = document.getElementById("kelvin");

function computeTemp(element) {
    const inputId = element.id; 
    const currentValue = parseFloat(element.value);

    if (isNaN(currentValue)) return;

    if (inputId === "celsius") {
        kelvinE1.value = (currentValue + 273.15).toFixed(2);
        fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);
    } else if (inputId === "fahrenheit") {
        const celsius = (currentValue - 32) / 1.8;
        celsiusE1.value = celsius.toFixed(2);
        kelvinE1.value = (celsius + 273.15).toFixed(2);
    } else if (inputId === "kelvin") {
        const celsius = currentValue - 273.15;
        celsiusE1.value = celsius.toFixed(2);
        fahrenheitE1.value = (celsius * 1.8 + 32).toFixed(2);
    }
}
