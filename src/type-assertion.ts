let mixed: any;

mixed = "I am from Bangladesh";

const address = (mixed as string).toUpperCase();
console.log(address);

const kgToGram = (kg: number | string): number | undefined => {
  if (typeof kg === "string") {
    return parseFloat(kg) * 1000;
  } else if (typeof kg === "number") {
    return kg * 1000;
  }
};

const result1 = kgToGram(1);
const result2 = kgToGram("10 kg");
const result3 = kgToGram("10 kg") as number; // assertion
