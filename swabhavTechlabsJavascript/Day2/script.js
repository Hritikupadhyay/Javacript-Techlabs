//queryselector

// const paragraph =document.querySelector("body>div>p:nth-child(1)")
// console.log(paragraph);

// const pAll=document.querySelectorAll(".test")
// console.log(pAll);

// pAll.forEach((p)=>{
//     p.innerText+=": more"
//     console.log(p);
    
// });
//accessing class
// const div2Refr=document.querySelector("div.error")
// console.log(div2Refr);

// div2Refr.innerHTML+="<p>new parah added</p>"
// console.log(div2Refr);

//accesing anchortag
// aRef=document.querySelector("a")
// console.log(aRef);
// console.log(aRef.getAttribute("href"));


// setTimeout(()=>{
//     aRef.setAttribute("href","http://www.facebook.com")
//     aRef.innerHTML="link to facebook.com"
//     console.log(aRef);
    
// },5000)

//setattribute using class

// const div2Ref=document.querySelector("div.error")

// setTimeout(()=>{
//     div2Ref.setAttribute("class","success")
// },5000)

//toggle,eventlistner
// const div3Ref=document.querySelector("div.error")

// div3Ref.addEventListener('click',(e)=>{
//     div3Ref.classList.toggle("error")
// })


// setTimeout(()=>{
//     div3Ref.classList.add("success")
//     },5000)


//using arrays to make changes

// const articleRef=document.querySelector("article")

// const childRef=articleRef.children;
// console.log([0]);

// Array.from(childRef).forEach((tag)=>{
//      if(tag.tagName==="P"){
//         tag.classList.add("error")
//      }
//      else{
//         tag.classList.add("success")
//      }
// })
