import { configDotenv } from "dotenv";
configDotenv();
const { PORT, DB_USERNAME, DB_PASSWORD, DB_URL } = process.env;
const secrets = {
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_URL: DB_URL,
};
export default secrets;
