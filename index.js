function setFrame(url){
    document.getElementById("DynamicFrame").src = url;
    toggleMainMenu();
}

function toggleMainMenu(){
    var mainMenuElement = document.getElementById("MainMenu");
    var currentClass = mainMenuElement.getAttribute("class");
    if(currentClass=="HideWhenSmall"){
        mainMenuElement.setAttribute("class", "")
    }
    else{
        mainMenuElement.setAttribute("class", "HideWhenSmall")
    }
}