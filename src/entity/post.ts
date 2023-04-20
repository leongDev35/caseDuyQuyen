import {Schema, model} from 'mongoose';
export interface IPost {
    name ?: string,
    image ?: string
}

const ProductSchema = new Schema<IPost> ({
    name : String,
    image: String,
    // category : {
    //     // type: Schema.Types.ObjectId,
    //     type: String,
    //     // tham chieu den bang nao
    //     ref: 'Category'
    // }
})

// ket noi toi database
const Product = model('Product', ProductSchema)
export {Product}