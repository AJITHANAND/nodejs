var r=require('readline-sync')
var no1=r.question('enter two numbers')
var no2=r.question()
if (no1 >no2){
    console.log("larger is  :"+no1)
}
else if (no1===no2){
    console.log("two number are equal")
}
else{
    console.log("larger is :"+no2)
}