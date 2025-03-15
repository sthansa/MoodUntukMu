document.addEventListener("DOMContentLoaded", function () {
        let audio = document.getElementById("bg-music");
    
        // Cek apakah musik sudah dimainkan sebelumnya
        if (localStorage.getItem("isPlaying") === "true") {
            audio.play();
        }
    
        // Simpan status pemutaran di localStorage
        audio.onplay = function () {
            localStorage.setItem("isPlaying", "true");
        };
    
        audio.onpause = function () {
            localStorage.setItem("isPlaying", "false");
        };
    });
    
onload = () =>{
        document.body.classList.remove("container");
};
