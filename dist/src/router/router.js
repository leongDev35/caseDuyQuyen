"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = __importDefault(require("../controller/productControllers"));
const router = (0, express_1.Router)();
router.get('/profile/:id', productControllers_1.default.findAll);
router.get('/profile/', productControllers_1.default.findAll);
exports.default = router;
//# sourceMappingURL=router.js.map