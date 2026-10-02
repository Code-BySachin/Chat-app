const express =  require('express');
const connectDB = require('./src/config/db')

const port = 3000;
const app =  express();

app.get('/',(req, res)=>{
    res.send('backend working...');
})

async function startServer(){
    try{

        await connectDB();
        
        app.listen(port,()=>{
            console.log(`server is listening... \nat http://localhost:${port}`)
        })
    }catch(error){
        console.error("failed to start server: ", error.message);
        process.exit(1);
    }
}

startServer();