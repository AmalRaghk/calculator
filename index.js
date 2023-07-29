const charCodeAt = String.prototype.charCodeAt;
const keyboard=document.querySelector('.keyboard');
const display=document.querySelector('.display');
const primary=document.querySelector('.primary');
const secondary=document.querySelector('.secondary')
const delKeys=document.querySelector('.delKeys');
const numberPad=document.querySelector('.numberPad');
const keys=["C","AC","=",".","X","/","+","-","0","9","8","7","6","5","4","3","2","1"]
let stack=[null,null,null];
let temp="";
let pos=0;
const displayfunction=()=>{
    secondary.innerHTML=''
    stack.forEach(a=>{
        if(a!=null){
            secondary.innerHTML+=(" "+a);
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
    else if(operation==="X"){
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
        temp='';
        primary.innerHTML='';

        
    }
    else if(operation.charCodeAt(0)>=48 && operation.charCodeAt(0)<=57){
        if(primary.innerHTML!=''){
            pos=0;
            temp+=operation
            stack[pos]=parseFloat(temp);
        }
        else{
        temp+=operation;
        stack[pos]=parseFloat(temp);
        }
    }
    else if(operation==="AC"){
        stack=[null,null,null];
        pos=0;
        secondary.innerHTML='';
        temp='';
        primary.innerHTML='';
    }
    else if(operation==="="){
        primary.innerHTML=mathsfunctions(stack[1]);
        stack=[null,null,null];
        stack[0]=parseFloat(primary.innerHTML);
        temp='';
    }
    else{
        if(stack[2]== null){
       if (pos !=2 || pos!=0){
        stack[1]=operation;
        pos=2;
        temp='';
        primary.innerHTML='';
       }
    }
    else{
        return

    }

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
