//basic recursion
console.log("basicRecursion");
function basicRecursion(max, current) {
  if (current > max) return; //base case - when the recursion has to stop
  console.log(current);
  basicRecursion(max, current + 1);
}

basicRecursion(5, 1);

// not so basic recursion
console.log("\nfibonacci recursion");
let countFibonacci = 0;
function fibonacci(n) {
  countFibonacci++;
  if (n <= 2) {
    // console.log(`? n: 1`)
    return 1;
  } else {
    // console.log('=>');
    let a = fibonacci(n - 1);
    let b = fibonacci(n - 2);
    // console.log(`! n: ${n} | ${a} + ${b} = ${a+b}`);
    return a + b;
  }
}

for (let i = 1; i <= 5; i++) {
  console.log(`- n: ${i} | ${fibonacci(i)}`);
}
console.log(`fibonacci fn calls: ${countFibonacci}\n============================`);

//exercise

/*
  Make a function that computes a factorial recursively.
  A factorial is when you take a number n and multiply by each preceding integer until you hit one.
  n * (n-1) * (n-2) ... * 3 * 2 * 1
  5!
  5 * 4 * 3 * 2 * 1
  
  Call the function factorial
*/

let factorialCount = 0
function factorial(n) {
  factorialCount++
  if (n < 2 ) return 1
  return n * factorial(n-1)
}

// unit tests
describe('factorial', function() {
  it('should do factorials of n=1', () => {
    expect(factorial(1)).toEqual(1);
  })

  it('should do factorials of n=2', () => {
    expect(factorial(2)).toEqual(2);
  })

  it('should do factorials of n=3', () => {
    expect(factorial(3)).toEqual(6);
  })
  
  it('should do factorials of n=4', () => {
    expect(factorial(4)).toEqual(24);
  })

  it('should do factorials of n=10', () => {
    expect(factorial(10)).toEqual(3628800);
  })
});
