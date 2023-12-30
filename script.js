document.addEventListener("DOMContentLoaded", ()=>{
    // alert("Still under development!")
    showSection(document.getElementById("home"));
    window.onscroll = ()=>{
        let distanceScrolled = window.scrollY;
        let arrowBtn = document.getElementById("arrow")
        if (distanceScrolled>10)
        {
            arrowBtn.style.visibility = "visible";
        }
        else{
            arrowBtn.style.visibility = "hidden";
        }
        // console.log(distanceScrolled)
    };
    function showSection(section){
        const sections = document.getElementsByClassName("section");
        Array.from(sections).forEach((section)=>{
            section.style.display = "none";
        });
        
        section.style.display = "block";
    };

    const links = document.getElementsByClassName("nav-link");
    Array.from(links).forEach((nav)=>
    {
        
        let section = nav.dataset.section;
        nav.addEventListener("click", ()=>
        {   
            // history.pushState({section: section}, "", `section${section}`);
            showSection(document.getElementById(section));

            Array.from(links).forEach((link)=>{
                if (link!==nav)
                {
                    link.style.backgroundColor = "";
                };
            });

            nav.style.backgroundColor = "rgb(166, 225, 249)";
        });
        
    })    
        
    });