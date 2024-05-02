const fs=require('fs');

const path=require('path');

//read file with utf8 
fs.readFile(path.join(__dirname,'specialevents.txt'),'utf8',(err,data)=>{  // readfilesync for synchronous
    if(err){
        console.log("error has occured");
    }
    else{
        console.log(data);
    }
});
//read file with toString
fs.readFile(path.join(__dirname,'specialevents.txt'),(err,data)=>{
    if(err){
        console.log("error has occured");
    }
    else{
        console.log(data.toString());
    }     
});

//write file
 let data='cake cutting ceremony , games, mimicry, bouncing castle';
fs.writeFile('birthday.txt', data, ()=>{                                  // writefilesync for synchronous
     console.log("these are events will be performed...");
});