var http=require('http')
/*
http.createServer(server).listen(7000)

function server(req,res){
    res.write('Response')
    res.end()    
}

*/

http.createServer(function(req,res){
    res.write('welcome')
    res.end()
}).listen(7000)
