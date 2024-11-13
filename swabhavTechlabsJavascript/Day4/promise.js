const login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        if(email!==null){
            resolve(email)
        }else{
            reject("wrong email")
        }
    })
}

getVideos=(email)=>{
    return new Promise((resolve,reject)=>{
        if(email){
            resolve(["video1","video2"])
        }else{
            reject()
        }
    })
  }

  getActors=(videos)=>{
    return new Promise((resolve,reject)=>{
        if(videos!==null){
            resolve("mahua singh")
        }else{
            reject("no actor found")
        }
    })
  }




// login("abc@gmail.com",1234).then((email)=>{
//     console.log(email);
//     return getVideos()
//     }).then((msg)=>{
//         console.log(msg);
//         return getActors()
//     }).then((msg)=>{
//         console.log(msg);
//     }).catch(()=>{
//         console.log(email)
//     }).catch((msg)=>{
//         console.log(msg);
        
//     })

//asynchronous

const userLogin=async ()=>{
try{
    const email=await login("abc@gmail.com",1223)
    console.log(email);
    const videos=await getVideos(email)
    console.log(videos);
    const actor=await getActors(videos)
    console.log(actor);
}
catch(err){
console.log(err);

}
}

userLogin()