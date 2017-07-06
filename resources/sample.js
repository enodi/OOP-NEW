'use strict'
class Employee {
    constructor(name, age, weight){
        this.username = name;
        this.age = age;
        this.weight = weight;
    }
    displayName(){
        return (this.username);
    }
    displayAge(){
        return (this.age)
    }
    displayWeight(){
        return (this.weight)
    }
}
class Programmer extends Employee{
    constructor(name, age, weight, language){
        super (name, age, weight);
        this.userlanguage = language;
    }
    displayLanguage(){
        return (this.userlanguage)
    }
}

module.exports = Employee;

/*let uche = new Employee ('uche', 87, 2000);
console.log(uche.displayName(), uche.displayAge(), uche.displayWeight());
let Emeka = new programmer ('Emeka', 97, 2900, 'python');
console.log(Emeka.displayName(), Emeka.displayAge(), Emeka.displayWeight(), Emeka.displayLanguage());*/