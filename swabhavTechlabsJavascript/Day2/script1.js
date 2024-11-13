taskArray=[]
doneArray=[]

const inputRef=document.querySelector("input")
const ulRef=document.body.appendChild(document.createElement("ul"))


function addTask(){
    taskArray.push(inputRef.value)
    inputRef.innerText
    console.log(inputRef.value);
 
    let liRef= ulRef.appendChild(document.createElement("li")).innerText=inputRef.value
   let done= ulRef.appendChild(document.createElement("button")).innerText=("task done")
   let remove= ulRef.appendChild(document.createElement("button")).innerText=("remove task ")
   taskArray.pop()

   done.push
}

// function DisplayTask(){
// taskArray.forEach((element) => {
//    let liRef= ulRef.appendChild(document.createElement("li")).innerText=`${element}`
//    let done= ulRef.appendChild(document.createElement("button")).innerText=("task done")
//    let remove= ulRef.appendChild(document.createElement("button")).innerText=("remove task ")

//    taskArray.pop()
    
// });
// }


