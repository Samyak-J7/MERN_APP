import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connecttionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log('connected',connecttionInstance.connection.host);
    } catch (error) {
        console.log("db error",error);
        process.exit(1);
    }
}
export default connectDB
