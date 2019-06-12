/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. `this` points to the `window` object (containing the whole program) when used in the global scope.
* 2. Accessing a function "owned" by an object using the period character will make `this` in that function point to that object.
* 3. `this` points at the newly created instance when used in a constructor function.
* 4. `call` and `apply` use a function in a given context, even if that function wouldn't normally be found there, so `this` points to that context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function tellGoal(goal) {
    this.goal = goal
}

tellGoal("Fight the Endbringers.")

// Principle 2

// code example for Implicit Binding

let hero = {
    isAlive: true,
    accessStatus: function() {
        return this.isAlive
    }
}

console.log(hero.accessStatus() === hero.isAlive)

// Principle 3

// code example for New Binding

function Cape(name, powerLevel, alignment) {
    this.name = name
    this.powerLevel = powerLevel
    this.alignment = alignment
    this.willWin = function(other) {
        return this.powerLevel > other.powerLevel
    }
}

const khepri = new Cape('Khepri', 999, 'unclear')
const scion = new Cape('Scion', 998, 'whoops')

console.log(khepri.willWin(scion))

// Principle 4

// code example for Explicit Binding

function updateName(newName) {
    this.name = newName
}

updateName.call(khepri, "Taylor Hebert")
console.log(khepri.name)