const express = require('express');
const app = express();

const PORT = 8080;

app.get('/admin', (req,res,next)=>{
	console.log('ADMIN made request')
})
app.listen(PORT,()=>{
	console.log(`server is listening on Port ${PORT}`);
})
