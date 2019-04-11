const fs = require("fs");

fs.readFile("./package.json",(err,data)=>{
    if (err) console.log(err)
    data = JSON.parse(data);
    console.log(data.name);
})
