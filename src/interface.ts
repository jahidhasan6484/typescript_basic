interface IUser {
  name: string;
  email: string;
  age: number;
}

const user: IUser = {
  name: "Jahid Hasan",
  email: "jahidhasan6484@gmail.com",
  age: 30,
};

interface IExtendedUser extends IUser {
  role: string;
}

const newUser: IExtendedUser = {
  name: "Jahid Hasan",
  email: "jahidhasan6484@gmail.com",
  age: 30,
  role: "guest",
};

// Better to use interface with object. Primitive type must take type

type age = number;
// interface age2 = number // Not possible

type addNumbers = (a: number, b: number) => number;
interface IaddNumbers {
  (a: number, b: number): number;
}

type rollNumbersType = number[];
interface IRollNumbersType {
  [index: number]: number;
}

const rollNumbers: rollNumbersType = [1, 2, 3];
const rollNumbersWithInterface: IRollNumbersType = [1, 2, 3];
