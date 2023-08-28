class rectangle {
    constructor(_width, _height, _colour){

        console.log("A rectangle is been created ");

        this.width = _width;
        this.height = _height;
        this.colour = _colour;
    }
    getarea(){
        return this.width * this.height;
    }
    getinfo(){
        console.log(`I am a rectangle of ${this.width} * ${this.height} and I am of colour ${this.colour}`);

    }
}

let myrect1 = new rectangle(5,4,"blue")
let myrect2 = new rectangle(5,9,"red")

console.log(myrect1.getarea())
console.log(myrect1.getinfo())

console.log(myrect2.getarea())
console.log(myrect2.getinfo())