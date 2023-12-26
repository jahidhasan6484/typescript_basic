// Ternary operator
const my_age: number = 21;

const isAdult: string = my_age > 18 ? "Yes" : "No";
console.log(isAdult);

// Nulish Coalesnace Operator (Null and Undefined)
const isUserAuthenticate = null;
const username = isUserAuthenticate ?? "Guest";

console.log(username);

type Human = {
  name: string;
  address: {
    city: string;
    road: number;
    house_number?: string;
  };
};

const myDetails: Human = {
  name: "Jahid Hasan",
  address: {
    city: "Chapainawabganj",
    road: 1,
  },
};

console.log(myDetails.address.house_number ?? "House number is N/A");
