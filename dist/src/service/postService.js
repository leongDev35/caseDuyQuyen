"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../entity/post");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let products = await post_1.Product.find();
            return products;
        };
        this.findById = async (id) => {
            let product = await post_1.Product.find({ _id: id });
            return product[0];
        };
        this.add = async (product) => {
            await post_1.Product.create(product);
        };
        this.delete = async (id) => {
            await post_1.Product.deleteOne({ _id: id });
        };
        this.update = async (id, updateProduct) => {
            await post_1.Product.updateOne({ _id: id }, updateProduct);
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=postService.js.map