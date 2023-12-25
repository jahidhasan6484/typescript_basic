enum Level {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
}

type Developer = {
  full_name: string;
  year_of_experience: number;
  level: Level;
};

type Frontend_Developer = Developer & {
  know_nextJS: boolean;
};

type Backend_Developer = Developer & {
  know_prisma: boolean;
};

const myself: Frontend_Developer | Backend_Developer = {
  full_name: "Jahid Hasan",
  year_of_experience: 1,
  level: Level.Mid,
  know_nextJS: false,
  know_prisma: true,
};
