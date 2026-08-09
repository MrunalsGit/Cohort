// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("../../../../../readme.txt", "utf8", (err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        data = data.split("");
        let final = "";
        for(let i = 0; i < data.length; i++){
            final += data[i];
            if(data[i] == " "){
                while(i+1 < data.length && data[i+1] == " ")i++;
            }
        }

        fs.writeFile("../../../../../readme.txt", final, (err)=>{
            if(err) console.log("Error uploading");
        })
    }
})