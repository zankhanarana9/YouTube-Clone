const express = require('express');
const path = require('path');
const port = process.env.PORT;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server started!!!");
});
