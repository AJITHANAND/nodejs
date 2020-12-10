function normal(){
    var array=["Ajith","Anand","Moonattu","Kacherikadavu","Kannur","Kerala"]
    console.log(array)
    for( i=0;i<array.length;i++ ){
        console.log(array[i])
    }
}


function num(){
    var numArray=[1,2,3,4,5,6,7,8,9]
    console.log(numArray)
}

function arraySort(){
    var array=[5,7,4,9,8,6,1,2,3]
    console.log("before sorting:"+array)
    array.sort() 
    console.log("after sorting:"+array)
}
normal()
num()
arraySort()