"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: String,
    image: String,
});
const Product = (0, mongoose_1.model)('Product', ProductSchema);
exports.Product = Product;
//# sourceMappingURL=post.js.map