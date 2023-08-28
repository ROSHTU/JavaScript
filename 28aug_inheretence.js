// we use the extend key word

class person {
    constructor(_name,_age)
    {
        this.name =_name
        this.age =_age
        
    }
    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old`)
    }

}

class programmer extends person{
    constructor(_name,_age,_yoe){
        super(_name,_age);
        this.yoe=_yoe
    }
    code(){
        console.log(`${this.name} is coding`)
    }
}

const programmers = [
    new programmer("harry",25,2),
    new programmer("barry",35,12)

];

function developsoft(programmers){
    for(let  programmer of programmers ){
        programmer.code()

    }


}

developsoft(programmers)




