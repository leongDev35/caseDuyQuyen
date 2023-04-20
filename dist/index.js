"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./src/router/router"));
const app = (0, express_1.default)();
const PORT = 3700 || process.env.PORT;
const url = 'mongodb://127.0.0.1:27017/admin';
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(url).then(() => {
    console.log('connect success');
}).catch((err) => {
    console.log(err.message);
});
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('', router_1.default);
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map