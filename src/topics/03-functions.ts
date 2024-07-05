function addNumbers( a: number, b: number ) {
    return a+b;
}

const addNumbersArrow = ( a: number, b: number ): string => {
    return (a+b).toString(); 
}

const result = addNumbers(1, 2);

console.log({result});
console.log({result});

export {};