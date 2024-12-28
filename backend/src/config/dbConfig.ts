import mongoose from "mongoose";
import secrets from "../constants/secrets";

const dbConnect = async () => {
  try {
    const { DB_URL }  = secrets; 
    if(!DB_URL){
      throw new Error('DB Url is not defined')
    }  
    await mongoose.connect(DB_URL);
    console.info("DB Connected SuccessFully")
  } catch (error) {
    console.error(error); 
    throw error;
  } 
};
export default dbConnect;
 