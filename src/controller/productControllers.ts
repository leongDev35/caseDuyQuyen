import {Request, Response} from "express";
import productService from "../service/postService";


class ProductController {
    private productService = productService
    constructor() {
        this.productService = productService
    }

    findAll = async (req: Request, res: Response) => {
        // if (req.session['user']) {
        //
        // } else {
        //     res.redirect(301,'users/login')
        // }
        let products = await this.productService.getAll()
        console.log(products);
        
        res.render('index-2', {products : products})
    }

//     showFormAdd = async (req: Request, res: Response) => {
//         let listProducts = await this.productService.getAll()
//         // let listCategory = await this.categoryService.getAll();

//         res.render('products/create',{products: listProducts})
//         // res.render('products/create', {length: listProducts, categories: listCategory})
//     }

//     showFromEdit = async (req: Request, res: Response) => {
//         let id = req.params.id
//         res.render('products/edit', {products: await this.productService.findById(id)})
//     }
// //! add
//     addProduct = async (req: Request, res: Response) => {
//         // tao ra duwong dan de nhay vao
//         console.log(req.body)
//         await this.productService.add(req.body);
//         res.redirect(301, '/products')
//     }

//     deleteProduct = async (req: Request, res: Response) => {
//         const id = req.body.idDelete;
//         await this.productService.delete(id);
//         res.redirect(301, '/products')
//     }

//     updateProduct = async (req: Request, res: Response) => {
//         let id = req.params.id
//         let updateProduct = req.body
//         await this.productService.update(id, updateProduct)
//         res.redirect(301, '/products')
//     }
}

export default new ProductController();