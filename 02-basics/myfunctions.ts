//any
function calNumber(num: number): number {
  //num.toUpperCase(); // but when s someone add this, is the problem
  return num + 3;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function singUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser;

calNumber(5); // not problem
// getUpper(5);
singUpUser("jo", "jo@gmail.com", false);
loginUser("nikolas", "nikolas@gmail.com");

// function getValue(myValue: number): boolean {
//   if (myValue > 5) {
//     return true;
//   }
//   return "200 OK!";
// }

const getHello = (s: string): string => {
  return "";
};

// const heros = [1, 2, 3];
const heros = ["thor", "spiderman", "ironman"];

// infrensi type
heros.map((hero) => {
  return `hero is ${hero}`;
});
// Maybe TypeScript has type inference, but my preference is to always declare types explicitly. This is important in case situations change.
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function logPrintError(msg: string): void {
  console.log(msg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}
