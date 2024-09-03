import express from "express";


const app = express();
const port = 4000;
app.use(express.json());
app.use(express.static("public"));

app.use("/", (req, res)=>{
    res.sendFile('public/index.html');
})


app.listen(port,()=>{
    console.log(`app is running port ${port}`)
})