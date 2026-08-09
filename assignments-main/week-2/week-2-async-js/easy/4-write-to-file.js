// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

let content;

fs.readFile("../../../../../readme.txt", "utf8", (err,data)=>{
    if(err){
        console.log("Error");
    }
    else{
        data = content;
        fs.writeFile("../../../../../readme.txt", " \n You wrote correctly", (err)=>{
            if(err){
                console.log("Error ");
            }
            else{
                console.log("Done");
            }
        })
    }
})