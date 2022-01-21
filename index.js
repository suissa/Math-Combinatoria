const trampoline = (f) => (...args) => {
  let result = f.bind(null, ...args);
  while (typeof result === 'function') result = result();
  return result;
};

const _factorial = (n, acc = 1) => {
  if (n <= 1) return acc;
  return () => _factorial(n - 1, n * acc);
}

const factorial = trampoline(_factorial);

const produtorio = (start, end) =>
  Array
    .from({ length: start - end + 1 }, (v, k) => k + end)
    .reduce((total, n) => total * n , 1)

const Comb = (n, k) =>  
  factorial(n) / (factorial(k) * factorial(n-k))

const CombSuissa = (n, k) => 
  produtorio(n, n - k + 1) / factorial(k)

const n = 15
const k = 3

console.log(
  Comb(n, k)
)

console.log(
  CombSuissa(n, k)
)