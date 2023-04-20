"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
class ProductController {
    constructor() {
        this.productService = postService_1.default;
        this.findAll = async (req, res) => {
            let products = await this.productService.getAll();
            console.log(products);
            res.render('index-2', { products: products });
        };
        this.productService = postService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productControllers.js.map