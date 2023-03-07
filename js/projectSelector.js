
function selectProjectByName(project_name) {
    return projects[project_name];
}


function selectCurrentProject() {
    let id = searchForIdOrNull();
    let proj = null;
    if (id != null) {
        for (key in projects) {
            if (key == id) {
                proj = projects[key];
            }
        }
    }
    if (proj == null){
        loadBadGateway();
    }
    return proj;
}



function loadBadGateway() {
    $("html").append("<h1>404 bad gateway </h1>");
}

function addProjectOverview(container_id, project_name) {

    proj = selectProjectByName(project_name);
    current_project = $("#empty");
    project_img = $("#empty > img");
    project_description = $("#empty > .description")
    $(container_id).append(
        "<div id='" + project_name + "' class='w-1/12'>" +
        "<a href='./projectShow.html?id=" + proj["id"] + "'>" +
        "<img src='" + proj["images"]["main_image"] + "'>" +
        "</a>" +
        "<a href='./projectShow.html?id=" + proj["id"] + "'>" +
        "<p>" + proj["overview"] + "</p>" +
        "</a>"


    );


}

function showProjectDescriptive(element_clicked, project_name) {

}


function searchForIdOrNull() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')) {
        return searchParams.get('id');
    } else {
        return null;
    }
}

function loadProjectPageFromURLId() {
    proj = selectCurrentProject();
    if (proj == null) {
        return;
    }
    showProject(proj);
}



var x = document.createElement('script');
x.src = './projectsInfo.js';
document.getElementsByTagName("head")[0].appendChild(x);