class Employee {
    name: string;
    age: number;
    salary: number;
    task: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.task = [];
    }

    // public setTask(task: string) {
    //     this.task.push(task)
    // }

    work(): void {
        let current = this.task.shift();
        this.task.push(current);
        console.log(this.name + current)
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.salary} this month`);
    }

    getSalary() {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.task.push(' is working on simple task');
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
        this.task.push(' is working on a complicated task.')
        this.task.push(' is taking time off work.')
        this.task.push(' is supervising junior workers')
    }
}

class Manager extends Employee {
    dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.dividend = 0;
        this.task.push(' scheduled a meeting.');
        this.task.push(' is preparing a quarterly meeting.');
    }

    getSalary(): number {
        return this.salary + this.dividend;
    }
}

const pesho = new Junior('Pesho', 32)
const ivan = new Senior('Ivan', 35)
const gosho = new Manager('Gosho', 38)
pesho.work()
pesho.collectSalary()
ivan.work()
ivan.work()
ivan.work()
ivan.work()
ivan.collectSalary()
gosho.work()
gosho.collectSalary()
