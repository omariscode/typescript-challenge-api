import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect("mongodb://root:password@localhost:27017")
    } catch (error) {
        process.exit(1)
    }
};