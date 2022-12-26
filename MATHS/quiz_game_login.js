document.getElementById("hr1a").style.width = "0px";
document.getElementById("hr1b").style.width = "0px";
for (let i = 0; i < 100; i++){
    glass(i);
}

function glass(i){
    setTimeout(function(){
        document.getElementById("hr1a").style.width = i + "px";
        document.getElementById("hr1b").style.width = i + "px";
    }, 25*i)
}