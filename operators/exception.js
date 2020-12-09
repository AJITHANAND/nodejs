try{
    throw "test"
}
catch(err){
    console.log(err)
}
finally{
    console.log("Finally block always get excecuted")
}