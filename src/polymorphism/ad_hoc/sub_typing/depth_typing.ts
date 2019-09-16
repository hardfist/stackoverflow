class Person {
  name: string
  constructor() {
    this.name = 'person'
  }

}
class Employee extends Person {
  constructor(public department: string) {
    super();
  }
}

var employee: { who: Employee } = { who: new Employee('department') };
var person: { who: Person } = employee;
person.who = new Person

employee.who.department.toUpperCase(); // runtime error