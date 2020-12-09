function dataE(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name :"+this.name)
        console.log("Age:"+this.age)
    }
}

var ajith=new dataE("Ajith Anand",20,"Kacherikadavu")
var sini=new dataE("Sini S",20,"Mattannur")

ajith.display()
sini.display()
console.log(ajith.place)


var d=new  Date("10 march 2020")
console.log(d.getDate())
