const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8000;


//import routes
const postDelivery = require('./routes/DeliveryRoute');
const postProduct = require('./routes/ProductRoute'); 
const postRepair = require('./routes/RepairRoute');
//const postReg = require('./routes/registration');
const postWarrenty = require('./routes/WarrentyRoute');
const postRent = require('./routes/RentRoute');
const postfinance = require('./routes/FinanceRoute');
const postcategory = require('./routes/CategoryRoute');
const postreturn = require('./routes/ReturnRoute');
const postsupplier = require('./routes/SupplierRoute');
const poststock = require('./routes/StockRoute');
const postorder = require('./routes/OrderRoute');
const postpayment = require('./routes/PaymentRoute');

//app middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//routes middelware
app.use(postDelivery);
app.use(postProduct);
app.use(postRepair);
//app.use(postReg);
app.use(postWarrenty);
app.use(postRent);
app.use(postfinance);
app.use(postcategory);
app.use(postreturn);
app.use(postsupplier);
app.use(poststock);
app.use(postorder);
app.use(postpayment);


app.get("/",(req,res)=>{
    res.send("upload file")
})

const DB_URL='mongodb+srv://user:12345@itp.ogh5vn4.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=> console.log('DB connection error',err));

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})

