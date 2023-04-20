import {Product} from "../entity/post";

class ProductService {
    constructor() {
    }

    getAll = async () => {
        let products = await Product.find()
        return products;
    }
    findById = async (id) => {
        let product = await Product.find({_id: id})
        return product[0];
    }
    add = async (product) => {
        await Product.create(product)
    }
    delete = async (id) => {
        await Product.deleteOne({_id: id})
    }
    update = async (id, updateProduct) => {
        await Product.updateOne({_id: id}, updateProduct)
    }
}

export default new ProductService()