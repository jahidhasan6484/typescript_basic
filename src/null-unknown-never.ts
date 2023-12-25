const searchName = (value: string | null): void => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching...");
  }
};

searchName(null);

// const getMyCarSpeed = (speed: unknown): void => {
//     console.log(`${}`)
// };
