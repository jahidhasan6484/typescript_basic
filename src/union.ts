type Noob_Developer = {
  name: string;
};

type Junior_Developer = {
  name: string;
  year_of_experience: number;
};

const new_developer: Noob_Developer | Junior_Developer = {
  name: "Shakil",
  year_of_experience: 3,
};
