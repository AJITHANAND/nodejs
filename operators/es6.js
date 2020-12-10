var num =10
var num =20
console.log(num)


function dateE(){
    let num=10
   // let num=20 //error
    console.log(num)

}

dateE()

//var - scope inside  side of the function 
// let - only inside the block 

function scope(){
    test=true
    var i=0
    if(test){
        var data=10
        let data2=30
        var i =200
    }
    console.log(data)
   // console.log(data2) //error not defined 
   console.log(i) // override...always take latest 

   function sample(){
    var i =300
    // i=300 // i become 300 
}
sample()
console.log(i)
}
scope()





const hello=200 // constant 

const array=[1,2,3,4,5,6]  // push possible 
array.push(6)
 //array =[0] // not possible
console.log(array)

