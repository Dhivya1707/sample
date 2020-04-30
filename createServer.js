const http=require('http');
const server=http.createServer((request,response)=>{

    response.end("Hello");

})

server.listen(4242,()=>{
    console.log("server rnning");
});