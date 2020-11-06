const express =require('express');
const app=express();
const apiroters =require('./router');

app.use(express.json());

app.use('/api/get',apiroters);


app.listen('3000' ,()=> {
    console.log('server run up')

});