const charCodeAt = String.prototype.charCodeAt;
const keyboard=document.querySelector('.keyboard');
const display=document.querySelector('.display');
const primary=document.querySelector('.primary');
const secondary=document.querySelector('.secondary')
const delKeys=document.querySelector('.delKeys');
const numberPad=document.querySelector('.numberPad');
const keys=["C","AC","=","%","X","/","+","-","0","9","8","7","6","5","4","3","2","1"]
let stack=[null,null,null];
let temp="";
let pos=0;
const displayfunction=()=>{
    secondary.innerHTML=''
    stack.forEach(a=>{
        if(a!=null){
            secondary.innerHTML+=a;
        }
    }
    )
}
//stack.addEventListner('change',displayfunction);
function mathsfunctions(operation){
    if(operation==="+"){
        return stack[0]+stack[2];
    }
    else if(operation==="-"){
        return stack[0]-stack[2];
    }
    else if(operation==="*"){
        return stack[0]*stack[2];
    }
    else if(operation==="%"){
        return stack[0]%stack[2];
    }
    else{

        if (stack[0]==="0"){
            return undefined;
        }
        return stack[0]/stack[2];

    }

}
function operations(operation){
    
   
    if (operation==="C"){
        stack[pos]=null;
        
    }
    else if(operation.charCodeAt(0)>=48 && operation.charCodeAt(0)<=57){
        temp+=operation;
        stack[pos]=parseInt(temp);
        
    }
    else if(operation==="AC"){
        stack=[null,null,null];
        pos=0;
        secondary.innerHTML='';
    }
    else if(operation==="="){
        console.log(mathsfunctions(stack[1]));
    
    }
    else{
        if (pos!=0){
            return
        }
        pos=1;
        stack[pos]=operation;
        temp=''
        pos=2;

    }

    console.log(stack);
    displayfunction();
}
function keysgen() {
    const keyPad = document.createElement('div');
    keyPad.setAttribute('class', 'keyPad');
    for (let i = 0; i < keys.length; i++) {
        const button = document.createElement('button');
        button.id = i;
        button.textContent = keys[i];
        button.onclick=()=>{
            
            operations(button.textContent);
            
        }
        if (i < 2) {
            delKeys.appendChild(button);
        } else {
            keyPad.appendChild(button);
        }
    }
    numberPad.appendChild(keyPad);
}
keysgen();
