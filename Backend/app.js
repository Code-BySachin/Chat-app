const express =  require('express');
const connectDB = require('./src/config/db')

connectDB();
const port = 3000;
const app =  express();


app.get('/',(req, res)=>{
    res.send('backend working...');
})

app.listen(port,()=>{
    console.log(`server is listening... \nat http://localhost:${port}`)
})