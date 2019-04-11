const fs = require("fs");

/*
fs.readFile("./package.json",(err,data)=>{
    if(err) return console.log(err)
    data = JSON.parse(data);
    console.log(data);
})
*/
//第一阶段
/*
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
*/


//第二阶段

/*
function readFile(path) {
    return new Promise((resolve,reject)=>{
        fs.readFile(path,(err,data)=>{
            if(err) return reject(err);
            resolve(data)
        })
    })
}

readFile("./package.json").then(data=>{
    data = JSON.parse(data);
    console.log(data.name);
}).catch(err=>{
    console.log(err)
});
*/


//第三阶段 co + generator function + promise
const co = require("co");
const util = require("util");

co(function *() {
    let data = yield util.promisify(fs.readFile)("./package.json");

    data = JSON.parse(data);

    console.log(data.name);
})
