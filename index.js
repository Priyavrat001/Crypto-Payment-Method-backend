import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
const port = 4000;
const cryptoMusURi = process.env.CRYPTO_MUS_URI;
const serverURi = process.env.Server_URI;

app.use(express.json());
app.use(express.static("public/index.html"));

app.get("/", (req, res)=>{
    res.sendFile('public/index.html');
});

app.post("/checkout",async(req, res, next)=>{

 try {
    const {product} = req.body;

    const payload = {
        amount:product.amount,
        currency:"usd",
        order_id:"454",
        url_callback:`${serverURi}/payment/success`
    }

    const {data} = awiat axios.post(`${cryptoMusURi}/payment`, payload);
 } catch (error) {
    res.status(400).json({success:false, message:error.message})
 }

});

app.post("/payment/success",(req, res)=>{
    console.log(req.body);
    res.send("payment successfull");
})


app.listen(port,()=>{
    console.log(`app is running port ${port}`)
})