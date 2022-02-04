'use strict';

const addHidden = function(){
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".modal").classList.add("hidden");
}

const removeHidden =  function(){
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}



document.querySelectorAll(".show-modal").forEach(function(x){
    x.addEventListener("click",removeHidden);
});


document.querySelector(".overlay").addEventListener("click", addHidden);
document.querySelector(".close-modal").addEventListener("click", addHidden);

document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && !(document.querySelector(".modal").classList.contains("hidden")) ){
        addHidden();
    }
})