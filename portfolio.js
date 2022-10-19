function setHeight(){
    if (window.screen.availHeight > 550){
        document.getElementById("homeWindow").style.height = window.screen.availHeight.toString() + "px";
        document.getElementById("projectWindow").style.height = window.screen.availHeight.toString() + "px";
    }else{
        document.getElementById("homeWindow").style.height = "740px";
        document.getElementById("projectWindow").style.height = "740px";
        displaySelector("projName");
    }
        
    
    

}


function displaySelector(classToBeDisplayed){
    elements = document.getElementsByClassName("projName");
    for (let i = 0; i < elements.length; i++) {
        hideElement(elements.item(i));
        }
    iterateElements(classToBeDisplayed);

    
}

function displayProj(projToBeDisplayed){
    document.getElementById("currentProj").style.display = "flex";
    elements = document.getElementsByClassName("project");
    for (let i = 0; i < elements.length; i++) {
        hideElement(elements.item(i));
        }
    document.getElementById(projToBeDisplayed).style.display = "flex";
}



function hideElement(item){
    item.style.display="none";
}

function iterateElements(actualClass){
    var elements = document.getElementsByClassName(actualClass);
    for (let i = 0; i < elements.length; i++) {
        showElement(elements.item(i));
        }
        
}

function showElement(item){
    item.style.display = "block";
}

function checkNav(){
    var doc = document.getElementById("secondHome");
    doc.innerHTML=doc.offsetHeight.toString();
    if (doc.offsetTop >0){
        doc.style.display="block";
        }
    else{doc.style.display="none;"}
}

