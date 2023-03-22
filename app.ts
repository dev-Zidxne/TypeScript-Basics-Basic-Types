function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("Invalid input value");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }

  return n1 + n2;
}

const number1 = 16;

const number2 = 29;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
