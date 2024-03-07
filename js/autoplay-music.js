let audio = document.getElementById("myAudio")

function playMySong(){
    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
}