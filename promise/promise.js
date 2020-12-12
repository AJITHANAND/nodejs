const { resourceUsage } = require('process')
const {resolve ,reject }=require('promise')
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ajith")
        },3000) //wait  3 sec
    })
}

function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("97935049406")
        },2000)
    })
}
/* promise
Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})
*/
 
// await - synchronous ,, fun should be async 
async function getUser(){
    let name=await getName()
    console.log(name)
    let mobile= await getMobile()
    console.log(mobile)
}
getUser()