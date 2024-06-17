var ArrowButton = document.querySelectorAll(".buttonBox");
var ScrollBox = document.getElementById("iconContainer");

document.addEventListener("DOMContentLoaded",()=>{
    validate_scroll();
})

ArrowButton[0].addEventListener("click",()=>{
    ScrollBox.scrollBy({left:-150,behavior:'smooth'});
    validate_scroll();
});

ArrowButton[1].addEventListener("click",()=>{
    ScrollBox.scrollBy({left:150,behavior:'smooth'});
    validate_scroll();
});

let validate_scroll = ()=>{
    if(ScrollBox.scrollLeft == 0){
        ArrowButton[0].style.visibility = "hidden";  
    }else{
        ArrowButton[0].style.visibility = "visible";
    }

    if(ScrollBox.scrollLeft >= 1150){
        ArrowButton[1].style.visibility = "hidden";  
    }else{
        ArrowButton[1].style.visibility = "visible";
    }
}


