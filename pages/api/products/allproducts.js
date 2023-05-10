import { connectDB } from "@/utils/database";
import Product from "@/utils/model";

export default async function handler(req, res) {
    // res.status(200).json({Success : true, msg : "Hey"})
    if (req.method !== "GET") {
        res.status(400).send({ Message: "Please use GET Method" })
    }

    try {
        await connectDB();
        const products = await Product.find();
        res.status(200).json({Success : true, msg : products})
    }

    catch (err) {
        res.status(401).send(err)
    }
}