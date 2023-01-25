import { range, skip, filter, take, interval } from 'rxjs';

/* From SICP JavaScript Sieve Of Eratosthenes */
function square(x) {
  return x * x;
}
function smallest_divisor(n) {
  return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
  return square(test_divisor) > n
    ? n
    : divides(test_divisor, n)
    ? test_divisor
    : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
  return b % a === 0;
}
function is_prime(n) {
  return n > 1 && n === smallest_divisor(n);
}

/* From Foundations of computing */
range(10000, 10000000000)
  .pipe(filter(is_prime), skip(1), take(1))
  .subscribe(console.log);

function display(number) {
  const sieveOfEratosthenes = document.getElementById('sieve-of-eratosthenes');
  const prime = document.createElement('prime');
  prime.appendChild(document.createTextNode(number));
  prime.classList.add('item', 'fade-in');
  sieveOfEratosthenes.appendChild(prime);
}

interval(500).pipe(filter(is_prime)).subscribe(display);
