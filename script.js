// setInterval(() => {
//     console.log("Hello");
// }, 3000);

// setInterval(() => {
//     console.log("Haii");
// }, 4000);

// setTimeout(() => {
//     console.log("Hai");
// }, 1000);

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// setTimeout(() => {
//     console.log("Hiii");
// }, 3000);

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

//Call Back
// var btn = document.getElementById("btn1")
// btn.addEventListener("click",()=>{     
//     alert("Button Clicked")
// })


//Add two numbers using a FUNCTION=>normal function
// function sum(a,b){
//    var sum = a+b
//    return sum
// }

// function display(val){
// document.getElementById("text").innerText=`The sum is ${val}`
// }

// var result = sum(5,10)
// display(result)



// function mutl(a,b){
//     var mut1 = a*b
//     return mut1
//  }
 
//  function display(val){
//  document.getElementById("text").innerText=`The product is ${val}`
//  }
 
//  var result = mutl(5,18)
//  display(result)


 //Call Back function
//  function add1(a,b,callback){
//     var sum = a+b
//     callback(sum)
//  }

//  function display(val) {
//     document.getElementById("text").innerText=`The sum is ${val}`
//  }

//  add1(20,45,display)


//Promises
// function add1(a,b) {
//     return promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Sum is not greater than 10")
//         }
//     })
// }
//     // console.log(promise)
//     add1(10,25)
//     promise.then((val)=>{
//         document.getElementById("text").innerText=`The sum is ${val}`
//     })
//    .catch((err)=>{
//         document.getElementById("text").innerText=`The error message is ${err}`
//     })

// function add1(a,b) {
//         let promise = new Promise((resolve,reject)=>{
//             var sum = a+b
//             if(sum>10){
//                 resolve(sum)
//             }
//             else{
//                 reject("Sum is not greater than 10")
//             }
//         })
    
//         // console.log(promise)
      
//         promise.then((val)=>{
//             document.getElementById("sum").innerText=`The sum is ${val}`
//         })
//        .catch((err)=>{
//             document.getElementById("sumt").innerText=`The error message is ${err}`
//         })
//     }
//     add1(10,25)   
    
//     function add2(a,b) {
//         let promise = new Promise((resolve,reject)=>{
//             var subt = a-b
//             if(subt>10){
//                 resolve(subt)
//             }
//             else{
//                 reject("Sum is not greater than 10")
//             }
//         })
    
//         // console.log(promise)
      
//         promise.then((val)=>{
//             document.getElementById("sub").innerText=`The difference is ${val}`
//         })
//        .catch((err)=>{
//             document.getElementById("sub").innerText=`The error message is ${err}`
//         })
//     }
//     add2(50,20) 

//     function add3(a,b) {
//         let promise = new Promise((resolve,reject)=>{
//             var mult = a*b
//             if(mult>10){
//                 resolve(mult)
//             }
//             else{
//                 reject("Sum is not greater than 10")
//             }
//         })
    
//         // console.log(promise)
      
//         promise.then((val)=>{
//             document.getElementById("mult").innerText=`The product is ${val}`
//         })
//        .catch((err)=>{
//             document.getElementById("mult").innerText=`The error message is ${err}`
//         })
//     }
//     add3(5,10) 

//     function add4(a,b) {
//         let promise = new Promise((resolve,reject)=>{
//             var div = a/b
//             if(div>10){
//                 resolve(div)
//             }
//             else{
//                 reject("Sum is not greater than 10")
//             }
//         })
    
//         // console.log(promise)
      
//         promise.then((val)=>{
//             document.getElementById("div").innerText=`The division is ${val}`
//         })
//        .catch((err)=>{
//             document.getElementById("div").innerText=`The error message is ${err}`
//         })
//     }
//     add4(100,4)



// Async await
//async fn by default returns a promise
//await only executes after async

// async function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("text").innerHTML=`The sum is ${ans}`
// }
// add1(10,2)

// async function add2(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sub = a-b
//         if(sub>10){
//             resolve(sub)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("sub").innerHTML=`The difference is ${ans}`
// }
// add2(50,20)

// async function add3(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var mult = a*b
//         if(mult>10){
//             resolve(mult)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("mult").innerHTML=`The product is ${ans}`
// }
// add3(5,10)

// async function add4(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             resolve(div)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("div").innerHTML=`The division is ${ans}`
// }
// add4(100,4)




// async function add4(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             resolve(div)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("div").innerHTML=`The division is ${ans}`
// }
// add4(100,4)

// function getData(){
//     console.log("Button clicked");

// var xhr = new XMLHttpRequest();
//     console.log("unsent",xhr.readyState);

// xhr.open("GET","https://jsonplaceholder.typicode.com/users",true)
// console.log("open",xhr.readyState);  

// xhr.send();
// }


function ajaxcall() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true)
    xhttp.send();
    xhttp.onreadystatechange = function(){
        let promise = new Promise((resolve,reject)=>{  
            if(this.readyState==4 && this.status ==200){
              resolve("it is done")  
            }
    })
    promise.then((val)=>{
        document.getElementById("text").innerHTML=`The result is ${val}`
    })
}
}
ajaxcall()








