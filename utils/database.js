import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect('mongodb+srv://nextjs:anujnema@cluster0.dgqxfas.mongodb.net/?retryWrites=true', {dbName : "NextJSPractice"})
        console.log(`Database connected ${connection.host}`);
    }
    catch (err) {
        throw err;
    }
}