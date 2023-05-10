import { connectDB } from "@/utils/database";

export default async function handler(req, res) {
    const products = [{
        name: "MacBook Pro",
        price: 120000,
        category: "Laptop"
    },
    {
        name: "Xiaomi note 10pro",
        price: 20000,
        category: "Mobile Phones"
    }
    ];

    res.status(200).json({ success: true, products });
}