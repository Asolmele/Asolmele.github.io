var filter = null;

function showProject(project){
    showImages(project);
    showContent(project);
    showProjectsList(project,null, 3, selectRandomProj);
}

function showProjectsListHomepage(){
    showProjectsList(null,null, 100, selectProjByOrder);
}

function showImages(project){
    let container = document.getElementById("images");
    if (project["images"]["project_images"].length <1){
        container.style.display = "none";
    }
    for (const projImg of project["images"]["project_images"]) {
        const img = document.createElement("img");
        img.classList.add("my-[5%]", "object-contain", "px-[3%]");
        img.src = project['images']['directory'] + projImg;
        container.appendChild(img);
    }
}

function showContent(project){
    showTitle(project);
    showText(project);
    showInformations(project);
}


function showTitle(project){
    let container = document.getElementById("projectTitle");
    container.innerText = project['title'];
}
function showText(project){
    let container = document.getElementById("projectText");
    container.innerText = project['text'];
}

function showInformations(project){
    let container = document.getElementById("projectInformations");
    let goals, learned, link;
    goals = document.createElement('div');
    goals.innerText = 'Goals of the project: \n\n' + project['informations']['goals'] ;
    goals.classList.add('my-[2%]');

    learned = document.createElement('div');
    learned.innerText = '\nWhat I learned : \n\n' + project['informations']['learned'];
    learned.classList.add('my-[2%]');

    container.appendChild(goals);
    container.appendChild(learned);
}

function selectRandomProj(nb){
    var keys = Object.keys(projects);
    return projects[keys[ keys.length * Math.random() << 0]];
}

function selectProjByOrder(nb){
    if (nb >= Object.keys(projects).length){
        return null;
    }
    return projects[nb+1];
}

function showProjectsList(project, filter, number, selection){
    let container = document.getElementById("projectsList");
    let projs = projectList(project, number, selection);
    if (filter !=null){
        projs.filter(project => project["tags"].includes(filter));
    }
    for (const project of projs) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let a = document.createElement('a');
        let tags = document.createElement('div');

        tags.innerText= "tags :";

        for (const tag of project["tags"]) {
            let currTag = document.createElement("h1");
            currTag.classList.add("font-bold", "mx-[1%]", "px-[1%]", "rounded-lg");
            currTag.style.backgroundColor = colorTags[tag];
            currTag.innerText = tag;
            tags.appendChild(currTag);
        }




        div.classList.add('flex', 'flex-col', "my-[1%]","basis-2/5", "lg:basis-1/4", "grow-0", "shrink-0","max-h-[35%]", "lg:max-h-[70%]", "mx-[2%]", "my-[5%]");
        img.classList.add("my-[2%]", "object-contain", "px-[3%]", "max-h-64", "lg:basis-3/5","basis-auto", "shrink-0", "min-w-[50%]");
        a.classList.add("text-center", "flex","flex-col", "max-h-full", "lg:justify-between", "h-full");
        h1.classList.add("overflow-y-scroll", "lg:overflow-y-hidden", "basis-2/5", "shrink-0", "flex", "flex-col", "lg:justify-around");
        tags.classList.add('font-bold', "flex", "overflow-y-scroll","lg:overflow-y-visible", "flex-wrap");

        img.src = project['images']['directory'] + project['images']['main_image'];
        h1.innerHTML = '<p class="font-bold text-xl">' + project['title'] + ':</p>'+ " \n<p class='overflow-y-scroll lg:overflow-y-hidden'>" + project['overview'] + "</p>";
        a.href = "projectShow.html?id=" + project["id"];

        a.appendChild(img);
        a.appendChild(h1);
        a.appendChild(tags)
        div.appendChild(a);

        container.appendChild(div);
    }
}

function projectList(project, number, selection){
    let projs = [];
    let projList = [];
    if (project !== null){
        projList.push(project["id"]);
    } 
    let max = (number <= Object.keys(projects).length ? number : Object.keys(projects).length); 


    for (let i = 0; i < max; i++) {
        let randomProj = selection(i);
        while (projList.includes(randomProj['id'])){
            randomProj = selection(i);
        }
        projList.push(randomProj['id']);
        projs.push(randomProj);

    }
    return projs;
}