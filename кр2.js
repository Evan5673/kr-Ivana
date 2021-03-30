var creditTotal = 1000;
function credit(elementID, resultID) {
    let val = document.getElementById(elementID).value;
    let resultElement = document.getElementById(resultID);

    val = parseInt(val);
    creditTotal -= val;

    switch (true) {
        case creditTotal > 0:
            resultElement.textContent = 'сумма задолженности: ' + creditTotal;
            break;
        case creditTotal < 0:
            resultElement.textContent = 'сумма переплаты: ' + (creditTotal + -0);
            break;
        case creditTotal === 0:
            resultElement.textContent = 'задолженность отсутствует';
    }
}