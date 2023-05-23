const fs = require("fs");
const os = require("os")

const [ , ,arg1] = process.argv
const calculator = (num1, num2, operation) => {
    switch (operation){
        case "add" :
            return +num1+ +num2;
        case "sub" :
            return +num1 - +num2;
        case "mul" :
            return num1*num2;
        case "div" :
            return num1/num2;
        default :
            return "Please specify the arguments properly";
    }
}
let result;


// read a file 
fs.readFile(`./${arg1}`, "utf-8", (err, data)=>{
    if(err){
        console.log("error :", err)
    }else{
        console.log(typeof(data))
        console.log(data);
        const config = JSON.parse(data)
        console.log(typeof(config));
        console.log(config)
         result = calculator(config.num1, config.num2, config.operation);
        console.log("Result : ", result)
    }
})

// write a new file

const content = "New file content"
fs.writeFile(`./results.txt`, content, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("file written sucessfulyy")
    }
} )

// edit a file
const newContent = "\n New line content"
fs.appendFile("./results.txt", newContent, (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("file updated sucessfulyy")
    }
});

//delete a file
fs.unlink("./results.txt", (err)=>{
    if(err){
        console.log("error ", err)
    }else {
        console.log("file deleted sucessfulyy")
    } 
})

//const result = calculator(arg1, arg2, arg3);
// console.log(process,)
// console.log(result);


console.log("Os version----",os.version())
console.log("OS total memory---", os.totalmem())
console.log("OS free  memory---", os.freemem())
console.log("CPU info ---", os.cpus())