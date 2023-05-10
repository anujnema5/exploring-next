import { connectDB } from "@/utils/database";
import Product from "@/utils/model";
import axios from "axios";
import mongoose from "mongoose";

export default async function handler(req, res) {
    console.log("reachng here");
    if (req.method !== "POST") {
        res.status(400).send("Only POST requests are accepted")
    }

    const { name, price, category } = req.body;

    try {
        await connectDB();
        await Product.create({
            name, price, category
        }).then((data) => { res.status(201).send("Successfully send " + data) });
    }

    catch (err) {
        res.status(401).send("Sorry " + err)
    }
}