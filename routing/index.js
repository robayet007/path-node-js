import http from "http"
// import { escape } from "querystring"

const server = http.createServer((req , res) =>{
    console.log(req.url)
    if(req.url === "/"){
        res.end("<h1>home page</h1>")
    }else if(req.url === "/about"){
        res.setHeader("content-type" , "text/html")
        res.end("<h1>about page</h1>")
    }else if(req.url == "/contact"){
        res.end(`<a href="/about">contact page</a>`)
    }else{
        res.setHeader("content-type" , "text/html")

        res.writeHead(404 , "bad")
        res.end("<h2> 404 page</h2>")
    }
})

server.listen(8000, ()=> console.log('server created'))