const keyboard=document.querySelector('.keyboard');
const display=document.querySelector('.display');
const primary=document.querySelector('.primary');
const secondary=document.querySelector('.secondary')
const delKeys=document.querySelector('.delKeys');
const numberPad=document.querySelector('.numberPad');
const keys=["C","AC","=","%","X","/","+","-","0","9","8","7","6","5","4","3","2","1"]
function keysgen() {
    const keyPad = document.createElement('div');
    keyPad.setAttribute('class', 'keyPad');
    for (let i = 0; i < keys.length; i++) {
        const button = document.createElement('button');
        button.id = i;
        button.innerHTML = keys[i];
        if (i < 2) {
            delKeys.appendChild(button);
        } else {
            keyPad.appendChild(button);
        }
    }
    numberPad.appendChild(keyPad);
}

keysgen();