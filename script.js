const addbtn = document.getElementById('addbtn');

addbtn.addEventListener('click', addValue);

let pure = 0;
let total_weight = 0;

function addValue() {
    const wgt = document.getElementById('weight');
    const pty = document.getElementById('purity');
    const weight = wgt.value;
    const purity = pty.value;


    total_weight = total_weight + Number(weight);
    pure += ((weight * purity) / 100);

    document.getElementById('pureValue').innerHTML = pure;
    document.getElementById('tweight').innerHTML = total_weight;
    wgt.value = '';
    pty.value = '';
}

const submit = document.getElementById('submit');

submit.addEventListener('click', calculateValue);

function calculateValue() {
    const wantP = document.getElementById('want');
    const val = wantP.value;

    const wantFine = (100 * pure) / val;

    const res = wantFine - total_weight;

    if (res > 0) {
        const result = document.getElementById('finalResult')
        result.innerHTML = res.toFixed(2) + " gm Copper";
        result.style.color = '#198754';
    }
    else if (res < 0) {
        const result = document.getElementById('finalResult');
        result.innerHTML = Math.abs(res.toFixed(2)) + " gm Silver";
        result.style.color = 'red';
    }
}

