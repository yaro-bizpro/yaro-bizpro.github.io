
var run = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
run(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
});

function pacmenRepo(){
    window.open("https://github.com/yaro-bizpro/PacMenExcercise");
}

function eyeRepo(){
    window.open("https://github.com/yaro-bizpro/EyeExercise");
}
function gitlink(){
    window.open("https://github.com/yaro-bizpro/");
}
function linkedin(){
    window.open("https://github.com/yaro-bizpro/");
}