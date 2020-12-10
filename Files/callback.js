
/*
var dt=new Date()
console.log("hello")
for(i=0;i<1000;i++){
    console.log("loop")
}
console.log("end")
var diff=new Date() -dt
console.log(diff)

*/

console.log("Synchronous")  
function longTask(mst){
    dt=new Date()
    while((new Date()-dt) <= mst){

    }
}
console.log("Started")
longTask(2000)
console.log("end")

console.log("Started")
longTask(2000)
console.log("end")

console.log("Started")
longTask(2000)
console.log("end")

console.log("Asynchronous")

function longTasks(mst){
    dt=new Date()
    while((new Date()-dt) <=mst){

    }
}
function showEnd()
{
    console.log("End")
}

console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)

console.log("started")
setTimeout(showEnd,2000)