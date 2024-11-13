
let musicPlayer = () => { 
	let playSong = () => { 
	console.log("Song has been played...!!"); 
	}; 

	let pauseSong = () => { 
	console.log("Song Paused...!!"); 
	}; 

	return { 
	playMusic: playSong, 
	pauseMusic: pauseSong, 
	}; 
}; 

let music_system = musicPlayer(); 
music_system.playMusic(); 
music_system.pauseMusic(); 

