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
