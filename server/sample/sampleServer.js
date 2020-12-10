var http=require('http')
/*
http.createServer(server).listen(7000)

function server(req,res){
    res.write('Response')
    res.end()    
}

*/
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('sampleHTML.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()

    })
}).listen(7000)
