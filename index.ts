import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router/router';
const app = express();
const PORT = 3700 || process.env.PORT;

const url = 'mongodb://127.0.0.1:27017/admin'
import mongoose from "mongoose";
//"mongodb://127.0.0.1:27017/test";
mongoose.set('strictQuery', true);
mongoose.connect(url).then(()=>{
    console.log('connect success')
}).catch((err)=>{
    console.log(err.message)
})

//! config app
app.set('views', './src/view') //! chú ý views là cấu trúc nên phải có s; đọc file html
app.set('view engine', 'ejs'); //! config đọc file ejs // bắt buộc phải giống
app.use(express.static('./public')); //! config đọc css
//! cấu hình body-parser để bắt method POST
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

//! body
app.use('', router);

//! chạy app tại port 3000
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
    
})


// app.get('/', (req, res) => { //! router
//     // res.send('<form method="post"> <input name= "name"></form>')
//     res.render('blog')
// })

// app.get ('/student/:id', (req, res) => { //! bắt tham số trên url
//     res.send('student thu:' + req.params.id)
// })

// app.post('/', (req, res) => { //! bắt method POST
//     console.log(req.body);
    
// })






