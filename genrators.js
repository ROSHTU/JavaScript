console.log("genrator are used to make on the fly values so it does not consume memory space");
// Generators in JavaScript
// 1 - 1B array will consume memory

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // yield (i++).toString();
    }
}

// const gen = numbersGen();
// console.log(gen.next().value);
// console.log(gen.next().value);


// Generators in JavaScript
// 1 - 1B

function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        yield i++;
        // yield (i++).toString();
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);

