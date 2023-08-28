class square {
    constructor(_width) {
      this.width = _width;
      this.height = _width;
    }
  
    get area() {
      this.count++;
      return this.width * this.height;
      
    }
    static equals(a,b){
        return a.width * a.height === b.width * b.height
    }
}

let sq1 = new square(8)
let sq2 = new square(9)
console.log(square.equals(sq1,sq2))

let sq3 = new square(4)
let sq4 = new square(4)
console.log(square.equals(sq3,sq4))