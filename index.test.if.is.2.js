const trampoline = (f) => (...args) => {
  let result = f.bind(null, ...args);
  while (typeof result === 'function') result = result();
  return result;
};

function _factorial(n) {
  if (n <= 1) return 1;
  return n * _factorial(n - 1);
}

const factorial = trampoline(function _factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return () => _factorial(n - 1, n * acc);
});

const produtorio = (start, end) =>
  Array
    .from({ length: start - end + 1 }, (v, k) => k + end)
    .reduce((total, n) => total * n , 1)

const Comb = (n, k) =>  
  factorial(n) / (factorial(k) * factorial(n-k))

const CombSuissa = (n, k) => 
  (k == 2)
    ? (n/k) * (n-1)
    : produtorio(n, n - k + 1) / factorial(k)

const n = 15
const k = 3

console.log(
  Comb(n, k)
)

console.log(
  CombSuissa(n, k)
)