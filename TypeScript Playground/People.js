var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.task = [];
    }
    // public setTask(task: string) {
    //     this.task.push(task)
    // }
    Employee.prototype.work = function () {
        var current = this.task.shift();
        this.task.push(current);
        console.log(this.name + current);
    };
    Employee.prototype.collectSalary = function () {
        console.log(this.name + " received " + this.salary + " this month");
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.task.push(' is working on simple task');
        return _this;
    }
    return Junior;
}(Employee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.task.push(' is working on a complicated task.');
        _this.task.push(' is taking time off work.');
        _this.task.push(' is supervising junior workers');
        return _this;
    }
    return Senior;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.dividend = 0;
        _this.task.push(' scheduled a meeting.');
        _this.task.push(' is preparing a quarterly meeting.');
        return _this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary + this.dividend;
    };
    return Manager;
}(Employee));
var pesho = new Junior('Pesho', 32);
var ivan = new Senior('Ivan', 35);
var gosho = new Manager('Gosho', 38);
pesho.work();
pesho.collectSalary();
ivan.work();
ivan.work();
ivan.work();
ivan.work();
ivan.collectSalary();
gosho.work();
gosho.collectSalary();
