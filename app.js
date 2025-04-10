const input = document.getElementById('inputdama');
const chang = document.querySelector('.chang');
const reset = document.querySelector('.reset');
const ran = document.querySelector('.ran');
const p = document.querySelector('.tag-p');
const info = document.querySelector('.info');

let isFahrenheit = false; // false = C to F, true = F to C

// تغییر واحد
chang.addEventListener('click', function () {
    isFahrenheit = !isFahrenheit;
    if (isFahrenheit) {
        info.textContent = 'converter : °F to °C';
        input.placeholder = '°F';
        document.title = '°F to °C';
    } else {
        info.textContent = 'converter : °C to °F';
        input.placeholder = '°C';
        document.title = '°C to °F';
    }
});

// دکمه تبدیل
ran.addEventListener('click', convert);

function convert() {
    const inputValue = parseFloat(input.value);

    if (isNaN(inputValue)) {
        p.textContent = 'Wrong value';
        p.style.color = 'red';
        p.style.opacity = '1';
        return;
    }

    if (!isFahrenheit) {
        const fahrenheit = (inputValue * 9 / 5 + 32).toFixed(1);
        p.innerHTML = `${inputValue}°C => ${fahrenheit}°F`;
    } else {
        const celsius = ((inputValue - 32) * 5 / 9).toFixed(1);
        p.innerHTML = `${inputValue}°F => ${celsius}°C`;
    }

    p.style.color = 'yellow';
    p.style.opacity = '1';
}

// enter یا backspace
input.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        convert();
    } else if (event.key === 'Backspace') {
        p.style.opacity = '0';
    }
});

// دکمه ریست
reset.addEventListener('click', function () {
    input.value = '';
    p.style.opacity = '0';
});
