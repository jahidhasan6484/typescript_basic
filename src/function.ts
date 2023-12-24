const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(2, 3));

const numbers: number[] = [1, 2, 3, 4];

const square_of_numbers = numbers.map((number) => number * number);

const me: {
  full_name: string;
  balance: number;
  add_balance(amount: number): void;
} = {
  full_name: "Jahid Hasan",
  balance: 190,
  add_balance(amount: number): void {
    this.balance + amount;
  },
};

// Default value:
const sum = (x: number, y: number = 10): number => {
  return x + y;
};

const my_smartphone_list: string[] = [
  "moto edge 40",
  "mi 11 lite",
  "iPhone 13",
];
const new_smartphone_list: string[] = ["Pixel 7a", "Samsung galaxy note 23"];

my_smartphone_list.push(...new_smartphone_list); // Spread operator

const greet_friends = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

greet_friends("Nasim", "Mosi", "Hasi");
