var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// Class Teacher
var Teacher = function () {};
// Establish inheritance relationship
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
// Adding Teach method to Teacher prototype
Teacher.prototype.teach = function (subject) {
  console.log(this.name + ' is now teaching ' + subject);
};

var him = new Teacher();
him.initialize('Adam', 45);
him.teach('Inheritance');
