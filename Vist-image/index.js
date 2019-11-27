const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({host:"redis-server",port:6379});
app.get('/',(req,res)=>{
    client.get('visits',(err,visits)=>{
        process.exit(0)
        res.send(`Number of visits is ` + visits);
        (visits == null || visits == undefined || isNaN(visits) )?visits = 0 :''; 
        client.set('visits',parseInt(visits)+1)
    });
});


app.listen(8081,()=>{
    console.log("Listening on port ")
})