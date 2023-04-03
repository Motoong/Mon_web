document.addEventListener("DOMContentLoaded", function(e) {
    let btn = document.querySelector("#mybtn");
    let cog = document.querySelector("#cog");

    function overF(e) {
        e.target.style.backgroundColor = "#ffff00"
        console.log("mouse over")
        e.target.style.color = "#000000"
    }
    
    function outF(e) {
        e.target.style.backgroundColor = "#ffffff"
        console.log("mouse out")
        e.target.style.color = "#000000"
    }
    
    function clickF(e) {
        e.target.style.backgroundColor = "#000000"
        e.target.style.color = "#ffffff"
        console.log("Clicked")
    }

    function cogRoll(e){
        e.target.setAttribute("class","far fa-cog fa-spin")
    }
    function cogRollStop(e){
        e.target.setAttribute("class","far fa-cog")
    }
    
    btn.addEventListener("mouseover", overF);
    btn.addEventListener("mouseout", outF);
    btn.addEventListener("click", clickF);

    cog.addEventListener("mouseover",cogRoll );
    cog.addEventListener("mouseout",cogRollStop );
});

