import {planets} from "./planets.js";
import {species} from "./species.js";
import {starships} from "./starships.js";
import {vehicles} from "./vehicles.js";


function addThing(thing, selector, places) {
  let table = document.querySelector(`#${selector}`);
  let row = document.createElement('tr')
  let values = Object.values(thing);
  for (let i = 0; i < places; i++) {
    let cell = document.createElement('td');
    cell.innerText = values[i];
    row.append(cell)
  }

  table.append(row)
}

function addSpecies(species) {
  let table = document.querySelector('#species_table');
  let row = document.createElement('tr')
  let values = Object.values(species);
  for (let i = 0; i < 8; i++) {
    let cell = document.createElement('td');
    cell.innerText = values[i];
    row.append(cell)
  }

  let cell = document.createElement('td');
  cell.innerText = values[9];
  row.append(cell)

  table.append(row)
}

planets.forEach(planet => {
  addThing(planet, 'planet_table', 8)
})

species.forEach(species => {
  addSpecies(species)
})

starships.forEach(starship => {
  addThing(starship, 'starships_table', 13)
})

vehicles.forEach(vehicle => {
  addThing(vehicle, 'vehicle_table', 11)
})


console.log('running')
