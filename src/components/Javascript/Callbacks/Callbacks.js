// console.log("Running1")
// setTimeout(()=>{
//     console.log("test")
// },[5000])
// console.log("Running2")


// function executeData(cb){
//     console.log("triggered")
//     setTimeout(()=>{
//     cb()
//     },2000)
// }

// function printName(){
//     console.log("Razeen")
// }

// executeData(printName)

// const promise = new Promise((res,rej)=>{
//     let name = "razeen"
//     if(name=="razeen"){
//         res("success")
//     }else(
//         rej("failed")
//     )
// })

// promise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// shallowcopy vs Deepcopy in JS 

// let x = 100
// y = x 

// y = 676
// console.log(y)
// console.log(x)

// let org = {
//     name:'ronak',
//     age:20,
//     data:{
//         address:'test'
//     }
// }
// let copied = org
// let copiedData = {...org}

// console.log(org)
// console.log(copied)

// copied.name ="petr"
// copiedData.data.address ="bengaluru"

// console.log(org)
// console.log(copied)
// console.log(copiedData)


// ---> CLOSURES <-------

// function outer(out){
//     return function inner(inn){
//         console.log("outer--->"+out)
//         console.log("inner--->"+inn)
//     }
// }

// outer("hello")("world")

// function outerside(out) {
//     function inner(inn) {
//         console.log("outer--->" + out);
//         console.log("inner--->" + inn);
//     }
    
//     // Call `inner` directly within `outer`
//     inner("World");
// }

// // Call the `outer` function
// outerside("Hello");

let count ={}
const arr = [1,2,3,4,5,6,7,8,9]
arr.forEach((item,index)=>{
    console.log(item,index)
})

let newData = Array.from(new Set(arr));
console.log(newData);

let doubled = arr.map((item)=> {return item*item})
console.log(doubled) 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 3, 3, 3, 3];

let unique = arr.filter((item, index, data) => {
    return data.indexOf(item) === data.lastIndexOf(item)
});

console.log(unique);


