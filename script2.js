// stack using arrays.....

let stack  = [];

function push (element) {
    stack.push(element);
}

function pop () {
    if(isEmpty()){
        throw Error("Stack is empty!");
    }
    return stack.pop();
}

function isEmpty () {
    return stack.length === 0;
}

function peek () {
    if(isEmpty()){
        throw Error("Stack is empty!");
    }
    return stack[stack.length -1];
}

function print () {
    for(let num of stack){
        console.log(num);
    }
}
