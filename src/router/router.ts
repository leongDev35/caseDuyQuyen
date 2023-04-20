import { Router } from "express";
import productControllers from "../controller/productControllers";

const router = Router();
//! đọc file dựa vào đường dẫn
router.get('/profile/:id', productControllers.findAll)
  //! 1st arg là router, 2nd là trình xử lý
router.get('/profile/', productControllers.findAll) //! 1st arg là router, 2nd là trình xử lý

export default router;