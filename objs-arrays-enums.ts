// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Zidane",
//   age: 21,
//   hobbies: ["Sports", "Reading"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Zidane",
  age: 21,
  hobbies: ["Sports", "Reading"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin", "user"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // ERROR
}

if (person.role === Role.ADMIN) {
  console.log("Is admin");
}
