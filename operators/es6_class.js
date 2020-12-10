class test{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log("Hello World, \nvalues:"+this.num1,this.num2)
    }
}
let obj =new test(10,20)
obj.hello()


class sample extends test{
    constructor(num1,num2){
        super(num1,num2)
    }
    hello(){
        super.hello()
    }
}
let io=new sample(5,5)
io.hello()