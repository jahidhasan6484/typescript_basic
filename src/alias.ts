type Crush = {
  full_name: string;
  age?: number;
  profession: string;
  country: string;
};

const international_crush: Crush = {
  full_name: "Alia Bhatt",
  age: 33,
  profession: "Actress",
  country: "India",
};

const local_crush: Crush = {
  full_name: "XYZ",
  profession: "Actress",
  country: "Bangladesh",
};

type Marrried = boolean;
const is_married: Marrried = false;

type Operation = (x: number, y: number) => number;
const calculate = (a: number, b: number, operation: Operation) => {
  return operation(a, b);
};
