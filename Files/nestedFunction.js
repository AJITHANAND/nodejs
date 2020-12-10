var num =10
function First(){
    num =20
    function Second() {
        num =30
    }
    First.Second=Second
}
console.log(num)
First()
console.log(num)
First.Second()
console.log(num)
