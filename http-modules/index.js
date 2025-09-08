import http from "http"

const server = http.createServer((req , res)=>{
    // res.setHeader("content-type" , "text/html");
    // res.statusCode = 404;
    // res.statusMessage = "bad request";
    res.writeHead(202 , "Content-type" , "text/html")
    res.write("<h1> hi iam new on node js</h1>");
})

server.listen(8000 , ()=> console.log('server up'))

