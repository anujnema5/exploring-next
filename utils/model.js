import mongoose, {models,model} from "mongoose";

const productsSchema = new mongoose.Schema({
    name : String,
    price : Number,
    category : String
})

const Product = models.Product || mongoose.model('Product', productsSchema)
export default Product;