'use strict';

const str = 'Test';

const bigStr = str.toLowerCase();
console.log (bigStr);

const str2 = 'You fool no one';
console.log (str2.slice(4,8));


const num = 9.12;
console.log (Math.round(num));


const options = {
    name: 'button',
    widht: 1280,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red',
        grad: {
            color1: 'black',
            color2: 'pink'
        }
    }
};

console.log (Object.keys(options).length);

for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }

    }else{
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
}



const arr = [1, 2, 3, 6, 8];
//arr.pop();
//arr.push(10);
//console.log(arr);

for (let i of arr) {
    console.log(i);
}

const objNum = {
    a: 1,
    b: 2,
    c: 3
};

const copyObjNum = Object.assign ({},objNum);
copyObjNum.d = 4;
console.log (objNum);
console.log (copyObjNum);