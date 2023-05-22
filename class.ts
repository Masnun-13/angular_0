import { Login, User } from "./interface";

import * as UserLogin from "./interface"

interface Address {
    street: string;
    city: string;
    state: string;
    pin :string;
};

class Employee {
    #id: number;
    protected name : string;
    address : Address;

    static getEmployeeCount() : number {
        return 50;
    }

    get empId() : number {
        return this.#id;
    }

    set empId(id: number){
        this.#id = id
    } 

    constructor(id: number, name : string, address: Address){
        this.#id=id
        this.name=name
        this.address=address
    }

    Login(): User{
        return {name: "John", id: 1, email: ""}
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }
}


let john = new Employee(1, "John", {
    street : "ABC",
    city : "Bangalore",
    state : "Karnataka",
    pin: "560076",
})

john.empId = 100;

console.log(john.empId)

class Manager extends Employee {
    constructor(id: number, name : string, address: Address){
        super(id, name, address)
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`
    }
}

let mike = new Manager(2, "Mike", {
    street : "ABC",
    city : "Bangalore",
    state : "Karnataka",
    pin: "560076",
})

let address = john.getNameWithAddress();

console.log(address);