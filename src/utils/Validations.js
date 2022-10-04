export function validateControlNumber(input) {
  let regex = /(221|211|201|191|181|171)+[GC]+[0-9]+/i;
  return regex.test(input);
}
