function myFunction(method,url,body=null){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()

        xhr.addEventListener('load',()=>{
            if(xhr.status<=400){
                resolve(JSON.parse(xhr.response))
            } else{
                reject()
            }
        })
        xhr.send(JSON.stringify(body))
    })
}

const url="https://jsonplaceholder.typicode.com/users"
myFunction("GET",url,{
    name:"raj",
    age:"22"
}).then(()=>{

}).catch(()=>{
    
})