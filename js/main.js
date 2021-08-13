import {projects} from "./projects.js";


// This section takes a list of projects and adds them as nice boxes in the portfolio page
// Ideally instead of taking a hand-coded list, it would pull dynamically from an API, but I'm not making one for this class
function addProject(project) {
  let section = document.querySelector('#project-tiles');
  let tile = document.createElement('div');
  tile.className = 'project-tile m2';
  let box = document.createElement('div');
  box.className = 'textbox';
  let link = document.createElement('a');
  link.href = project.URL;
  link.target = "_blank"
  let img = document.createElement('img');
  img.src = project.image;
  img.alt = project.name;
  let title = document.createElement('span');
  title.innerText = project.name;

  link.append(img);
  box.append(link);
  tile.append(box, title);
  section.append(tile);
}

projects.forEach(project => {addProject(project)})


console.log('running')

