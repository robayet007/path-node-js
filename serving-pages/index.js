import http from "http"
import fs from 'fs'
import { error } from "console"

const server = http.createServer((req , res)=>{
    console.log(req.url);
   if(req.url === "/"){
    res.writeHead(200 , "ok" , {"content-type": "text/html"});
    fs.readFile("./public/index.html" , (error , data)=>{
        if(error) throw error;
        res.end(data)
    })
   }else if ( req.url === "/about"){
    res.writeHead(200 , "ok" , {"content-type": "text/html"});
    fs.readFile("./public/about.html", (error , data)=>{
        if(error) throw error;
        res.end(data)
    })
   }
})

server.listen(8000 , ()=> console.log('server up'))