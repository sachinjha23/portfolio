var homes = document.getElementById("home");
var works = document.getElementById("work");
var resumes = document.getElementById("resume");
var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");

function work(){
    homes.style.display = "none"
    works.style.display = "block"
    resumes.style.display = "none"
    works.style.transition = "0.5s"
    homes.style.transition = "0s"
    resumes.style.transition = "0s"
    item1.style.color = "orangered"
    item2.style.color = "white"
    item3.style.color = "orangered"

}
function home(){
    homes.style.display = "block"
    works.style.display = "none"
    resumes.style.display = "none"
    works.style.transition = "0s"
    homes.style.transition = "0.5s"
    resumes.style.transition = "0s"
    item1.style.color = "white"
    item2.style.color = "orangered"
    item3.style.color = "orangered"

}
function resume(){
    homes.style.display = "none"
    works.style.display = "none"
    resumes.style.display = "block"
    works.style.transition = "0s"
    homes.style.transition = "0s"
    resumes.style.transition = "0.5s"
    item1.style.color = "orangered"
    item2.style.color = "orangered"
    item3.style.color = "white"

}



var toggleIcon = document.getElementById("toggle-icon");
var toggleList = document.getElementById("toggle-list");

function slide(){
    if (toggleList.style.display != "block"){
        toggleList.style.display = "block"
        toggleList.style.transition = "0.3s"
    }
    else{
        toggleList.style.display = "none"
        toggleList.style.transition = "0.3s"

    }
}
