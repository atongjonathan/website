document.addEventListener("DOMContentLoaded", ()=>{
    window.onscroll = ()=>{
        let distanceScrolled = window.scrollY;
        let arrowBtn = document.getElementById("arrow")
        if (distanceScrolled>0)
        {
            arrowBtn.style.visibility = "visible";
        }
        else{
            arrowBtn.style.visibility = "hidden";
        }
    };
});