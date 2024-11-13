const body=document.querySelector("body")
const div=document.querySelector("div")
const span=document.querySelector("span")
const button=document.querySelector("button")

body.addEventListener('click',()=>{
    console.log("body is clicked");
    
})

div.addEventListener("click",()=>{
    console.log("div is clicked");
    
})
span.addEventListener("click",()=>{
    console.log("span is clicked");
    
})
button.addEventListener("click",()=>{
    console.log("button is clicked");
    
})
