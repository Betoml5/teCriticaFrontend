export function validateControlNumber(input) {
  let regex = /(221|201|019|018|017)+[GC]+[0-9]+/i;
  return regex.test(input);
}

console.log(validateControlNumber("221I0278"));
