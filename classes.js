class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}

class Student extends Person{
    constructor(name,level){
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`hello ${this.name} from ${this.level}`);
    }
}

const o1=new Person('Dhivi');
const o2=new Student('Dhivya','first grade');
const o3=new Student('Suve','first grade');

// o3.greet=()=>console.log("I am special");
o1.greet();
o2.greet();
o3.greet();


