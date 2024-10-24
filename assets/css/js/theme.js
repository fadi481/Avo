const counterE1 = document.querySelector('.counter');
let counterNumber = 0;

const updateCounter = setInterval(function(){
    counterNumber++;
    counterE1.textContent = counterNumber;

    if(counterNumber >= 400){
        clearInterval(updateCounter)
    }
},1)

const projectE1 = document.querySelector('.projects');
let projectsNumber = 0; 

const updateProjects = setInterval(function(){
    projectsNumber++;
    projectE1.textContent = projectsNumber;
     
    if(projectsNumber >= 21){
        clearInterval(updateProjects)
    }
},2)