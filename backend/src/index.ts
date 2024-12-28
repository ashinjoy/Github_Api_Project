import app from "./app";
import dbConnect from "./config/dbConfig";
import secrets from "./constants/secrets";
const PORT = secrets.PORT;
dbConnect();
app.listen(PORT, () => {
  console.info(`Server Running on ${PORT}`);
});
