//learning about closures in js...

function outer() {
  //storing the counter value to the heap memory...
  let counter = 0;

  //function to add to the counter.
  function addCounter(number) {
    counter += number;
    console.log(`the number added is ${number}`);
  }

  //function to subtract from the counter
  function subtractCounter(number) {
    counter -= number;
    console.log(`the number subtracted is ${number}`);
  }
  //function to get the current counter value
  function getCounter() {
    return console.log(counter + "count");
  }

  //since the inner functions cannot be directly called,
  //returning the outer function as objects with inner methods
  return { addCounter, subtractCounter, getCounter };
}

const object = outer(); // calling the outer function and making the object with methods

object.addCounter(5);
//calling the inner function via a method to add to the counter

object.subtractCounter(2);
//calling this method, to change the state value.

object.getCounter();
// getting the value of the current counter.

//outputs:: the number added is 5, the number subtracted is 2, 3 count

//creating a js to count each time the function is being called.
//this function adds one to the number each time the function is called

//creating a scope

function scope(n) {
  let p = n;
  //empty counter to check the number of times function is called
  let counter = 0;

  function inner() {
    let result = p + counter++;
    // counter++ same as counter +=1, but after the initial value is initiated
    return result;
  }
  //returning inner as an method of object function to call it easily
  return { inner };
}

const main = scope(3);
console.log(main.inner()); //output 3
console.log(main.inner()); //output 4
console.log(main.inner()); //output 5
