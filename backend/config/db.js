import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://saurbhsrivastav6_db_user:27wqDTx4vwel2n7R@cluster0.jlzghcs.mongodb.net/?appName=Cluster0");
        console.log("DB Connected");
    } catch (err) {
        console.log("DB Error:", err.message);
        process.exit(1);
    }
};

export default connectDB;

// 27wqDTx4vwel2n7R PASS