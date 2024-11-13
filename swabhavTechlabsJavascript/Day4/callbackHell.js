const  login=(email,password,callback1)=>{
    setTimeout(()=>{
     callback1(email)
    },2000)
}

const getVideos=(email,callback2)=>{
    setTimeout(()=>{
        callback2(['video1','video2'])
    })
}

const getactors=(videos,callback3)=>{
    setTimeout(()=>{
        callback3("mahua singh")
    })
}

login("john@gmail.com",1234,(email)=>{
    console.log(email);
    getVideos(email,(videos)=>{
        console.log(videos);
        getactors(videos,(actor)=>{
            console.log(actor);
            
        })
        
    })
    
})