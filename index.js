const fs=require('fs')
const http=require('http')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html',(err,data)=>{
        if(err)
        throw err;
        resp.write(data);
        resp.end();
    })
}).listen(5000,()=>{
    console.log('app is running');
})