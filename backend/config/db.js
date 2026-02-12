import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Error:", err.message);
        process.exit(1);
    }
};

export default connectDB;


// 27wqDTx4vwel2n7R PASS