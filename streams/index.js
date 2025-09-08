import {createReadStream} from "fs"

const stream = createReadStream("./copy.txt" , {encoding : "utf8"})


stream.on("data" , (data)=>{
    console.log(data)
})