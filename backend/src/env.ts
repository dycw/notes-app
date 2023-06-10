import "dotenv/config";
import { cleanEnv, str, url } from "envalid";

const env = cleanEnv(process.env, {
  DATABASE_URL: url(),
  NODE_ENV: str({ choices: ["development", "test", "production", "staging"] }),
});

export default env;
