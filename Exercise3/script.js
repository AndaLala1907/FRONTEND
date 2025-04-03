// Function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

// Function to check which numbers in an array are prime
const checkPrimes = (numbers) => numbers.map(isPrime);

// Add event listener to the button
document.getElementById("checkPrimesButton").addEventListener("click", () => {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(",").map(Number);
  const primeResults = checkPrimes(numbers);

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Numbers: ${numbers.join(
    ", "
  )}<br>Prime Results: ${primeResults.join(", ")}`;
});
