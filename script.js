// var tabtitles =document.getElementsByClassName("tab-title");
// var tabcontents = document.getElementsByClassName("tab-contents");

// // Create function Onclick


// function opentab(tabname){

//     for (tabtitle of tabtitles){
//         tabtitle.classList.remove("active-link");
//     }

//     for (tabcontent of tabcontents){
//         tabcontent.classList.remove("active-tab");
//     }

//     event.currentTarget.classList.add("active-link");

//     document.getElementById(tabname).classList.add("active-tab");
// }

// Get all elements with class "tab-title" and store them in the variable "tabtitles"
const tabtitles = document.querySelectorAll(".tab-title");


// Define a function named "opentab" that takes one parameter named "tabname"
function opentab(tabname) {
    console.log("opentab called with tabname:", tabname);
    // Remove the class "active-link" from all elements with class "tab-title"
    tabtitles.forEach(tabtitle => tabtitle.classList.remove("active-link"));

    // Get all elements with class "tab-contents" and remove the class "active-tab" from them
    const tabcontents = document.querySelectorAll(".tab-contents");
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    // Add the class "active-link" to the clicked tab title
    this.classList.add("active-link");

    // Find the element with the ID equal to the value of "tabname" and add the class "active-tab" to it
    const tabContent = document.getElementById(tabname);
    if (tabContent) {
        tabContent.classList.add("active-tab");
    }
}

// Add event listeners to all elements with class "tab-title"
tabtitles.forEach(tabtitle => {
    // When a tab title is clicked, execute the "opentab" function with the clicked tab's data-tab attribute as argument
    tabtitle.addEventListener("click", function() {
        const tabname = this.getAttribute("data-tab");
        opentab.call(this, tabname);
    });
});

const projecttitles = document.querySelectorAll(".project-title");

function openproject(project){

    projecttitles.forEach(projecttitle => projecttitle.classList.remove("active-link"));

    const projectlists = document.querySelectorAll(".project-lists");
    projectlists.forEach(projectlist => projectlist.classList.remove("active-list"));

    this.classList.add("active-link");

    const projectContent = document.getElementById(project);
    if (projectContent) {
        projectContent.classList.add("active-list");
    }

}

projecttitles.forEach(projecttitle => {

    projecttitle.addEventListener("click", function() {
        const titlename = this.getAttribute("data-tab");
        openproject.call(this, titlename);
    });
});
