var info={fname:"Ajith ",lname:"Anand",age:20,place:"kacherikadavu",
    display:function (){
        console.log(this.fname+this.lname)
        for ( x in info){
            if(x=="display"){
                continue
            }
            else{
                console.log(x+":"+info[x])
            }
            
        }
    }
}

//console.log(info['fname'])

console.log(info.display())

info.dob="01-01-2001"
console.log(info.display())