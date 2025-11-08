const fs= require("fs");

console.log("Starting file read");

fs.readFile('Sample.txt','utf-8',(err,data)=>{
    if(err){
        return console.log("Error reading file:",err);
    }
    else{
        console.log("File Content:",data)
    }
});

console.log("File read initiated....")









