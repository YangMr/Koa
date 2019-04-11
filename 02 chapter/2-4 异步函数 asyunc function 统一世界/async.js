const fs = require("fs");

/*
fs.readFile("./package.json",(err,data)=>{
    if(err) return console.log(err)
    data = JSON.parse(data);
    console.log(data);
})
*/

function readFile(cb) {
    fs.readFile("./package.json",(err,data)=>{
        if(err) return cb(err)
        cb(null,data)
    })
}

readFile((err,data)=>{
    if(!err){
        data = JSON.parse(data);
        console.log(data.name);
    }
})
