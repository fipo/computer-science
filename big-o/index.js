// Examples

// This is O(n) because we go through all the inputs once in a loop.
function crossAdd(input) {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];

    answer.push(goingUp + goingDown);

    console.log(`loop: ${i} | ${goingUp} + ${goingDown} | ${answer}`);
  }
  return answer;
}

let test_1 = crossAdd([1, 2, 3, 4]);

console.log(`${test_1} \n==================`);

// Still O(n). Unless we say otherwise, we're assuming worst case scenario. In this worst case, the needle would be the last element
const haystack = [...new Array(randomNumber())].map(() => randomNumber());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#Getting_the_maximum_element_of_an_array
const maxIntInHaystack = Math.max(...haystack);
const minIntInHaystack = Math.min(...haystack);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
const randomIntInHaystack = Math.floor(
  Math.random() * (maxIntInHaystack - minIntInHaystack)
);

function randomNumber() {
  return Math.floor(Math.random() * 42);
}

function findNeedle(needle, haystack) {
  let result = 'There is no needle'
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) result = 'Found the needle';
  }
  return result
}

let test_2 = findNeedle(randomIntInHaystack, haystack);

console.log(`
haystack: ${haystack}
max: ${maxIntInHaystack}
min: ${minIntInHaystack}
needle: ${randomIntInHaystack}
result: ${test_2} \n==================`);

// This would be O(n²). For every input, we have to go through a full loop inside of another full loop, meaning we're doing a lot of work! This is the trick: look for loops. A loop inside of a loop inside of a loop would likewise be O(n³).
function makeTuples(input) {
    var answer = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}

let test_3 = makeTuples([1,2,3,[1,2]])
console.log(test_3)