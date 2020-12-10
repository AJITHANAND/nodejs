var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
  //  console.log(q.pathname)
    
    if(q.pathname==='/'){
        fs.readFile('sampleHTML.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
    })
    }else if(q.pathname==='/signup'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
    else if(q.pathname==='/signupaction'){
        console.log(q.query)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>AJITH </h1>')
        res.end()
    }
    else{
        res.write('error')
        res.end()
    }
}).listen(7000,()=>console.log('server started at 7000'))