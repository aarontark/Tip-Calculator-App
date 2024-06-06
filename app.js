const tipForm = document.querySelector('.calculator-form')
const billInput = document.querySelector('.bill-input');
const tipSpans = document.querySelectorAll('.tip-span');
const tipButtons = document.querySelectorAll('.tip-button');
const customTip = document.querySelector('.custom-tip')
const peopleInput = document.querySelector('.people-input');
const errorMsg = document.querySelector('.error-msg');
const resetBtn = document.querySelector('.reset-btn');
const tipDisplay = document.querySelector('.total-tip');
const totalDisplay = document.querySelector('.total-bill');

let billTotal = 0;
let numPeople = 1;
let tipPercent = 0;
let tipAmount;
let totalAmount;

billInput.addEventListener('input', () => {
    billTotal = billInput.value;
})

tipSpans.forEach((element) => {
    element.addEventListener('click', () => {
        tipSpans.forEach((checked) => {
            if(checked.classList.contains('tip-span-checked')){
                checked.classList.remove('tip-span-checked');
            }
        })
        element.classList.add('tip-span-checked');
        tipPercent = element.innerHTML;
        tipPercent = tipPercent.replace('%', '');
        console.log(tipPercent);
    })
})

customTip.addEventListener('input', () => {
    if(customTip.value == ''){
        tipPercent = 0;
    } else {
        tipPercent = customTip.value;
    }
    tipSpans.forEach((checked) => {
        if(checked.classList.contains('tip-span-checked')){
            checked.classList.remove('tip-span-checked');
        }
    })
})

customTip.addEventListener('click', () => {
    if(customTip.value == ''){
        tipPercent = 0;
    } else {
        tipPercent = customTip.value;
    }
    tipSpans.forEach((checked) => {
        if(checked.classList.contains('tip-span-checked')){
            checked.classList.remove('tip-span-checked');
        }
    })
})

peopleInput.addEventListener('input', () => {
    if(peopleInput.value === '0' || peopleInput.value === '') {
        errorMsg.style.visibility = 'visible';
        peopleInput.classList.add('input-error');
    } else {
        numPeople = peopleInput.value;
        errorMsg.style.visibility = 'hidden';
        peopleInput.classList.remove('input-error');
    }
})


tipForm.addEventListener('input', () => {
    if (peopleInput.value == 0 || peopleInput.value == '') {
        tipDisplay.innerHTML = '$0.00';
        totalDisplay.innerHTML = '$0.00';
    } else {
        tipAmount = (billTotal * (tipPercent / 100) / numPeople);
        totalAmount = (billTotal / numPeople) + tipAmount;
        tipAmount = tipAmount.toFixed(2);
        totalAmount = totalAmount.toFixed(2);
        tipDisplay.innerHTML = `$${tipAmount}`;
        totalDisplay.innerHTML = `$${totalAmount}`;
    }
})

tipForm.addEventListener('click', () => {
    if (peopleInput.value == 0 || peopleInput.value == '') {
        tipDisplay.innerHTML = '$0.00';
        totalDisplay.innerHTML = '$0.00';
    } else {
        tipAmount = (billTotal * (tipPercent / 100) / numPeople);
        totalAmount = (billTotal / numPeople) + tipAmount;
        tipAmount = tipAmount.toFixed(2);
        totalAmount = totalAmount.toFixed(2);
        tipDisplay.innerHTML = `$${tipAmount}`;
        totalDisplay.innerHTML = `$${totalAmount}`;
    }
})


resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    tipForm.reset();
    billTotal = 0;
    numPeople = 1;
    tipPercent = 0;
    tipAmount = 0;
    totalAmount = 0;
    tipDisplay.innerHTML = '$0.00';
    totalDisplay.innerHTML = '$0.00';
    tipSpans.forEach((checked) => {
        if(checked.classList.contains('tip-span-checked')){
            checked.classList.remove('tip-span-checked');
        }
    })
})