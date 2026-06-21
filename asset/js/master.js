const h1 = document.querySelector('h1')
const inp = document.querySelectorAll('input')
// let op
function myCalc(sign) {
    console.log(sign);
    // op = sign
    window.sign = sign
}

function sum() {
    // reset box///
    let flag = 0
    inp[0].style.border = '1px solid black'
    inp[1].style.border = '1px solid black'
    // reset box///

    // get number//
    let num1 = +inp[0].value
    let num2 = +inp[1].value
    if (num1 == '') {
        inp[0].style.border = '3px solid red'
        flag++
    }
    if (num2 == '') {
        inp[1].style.border = '3px solid red'
        flag++
    }
    // get number//

    // calc box//
    console.log(flag);

    if (flag == 0) {
        console.log(sign);
        if (sign == '+') {
            h1.innerText = num1 + num2
        } else if (sign == '-') {
            h1.innerText = num1 - num2
        } else if (sign == '*') {
            h1.innerText = num1 * num2
        } else {
            h1.innerText = num1 / num2
        }
    }
}