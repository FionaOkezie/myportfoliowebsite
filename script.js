var tabtitles =document.getElementsByClassName("tab-title");
var tabcontents = document.getElementsByClassName("tab-contents");

// Create function Onclick


function opentab(tabname){

    for (tabtitle of tabtitles){
        tabtitle.classList.remove("active-link");
    }

    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

