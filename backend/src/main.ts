import env from "./env.js";
import { add } from "./foo.js";
import getStars from "./stars.js";

console.log("Welcome");
console.log("Running an import...");
console.log(`1 + 2 = ${add(1, 2)}`);
console.log("Checking environment...");
console.log(env);
console.log(env.NODE_ENV);
console.log("Checking stars... (production only)");
if (env.isProduction) {
  console.log(await getStars());
}
