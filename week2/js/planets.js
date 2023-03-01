"Mercury","Venus","Earth"

////Theranos - the destroyer of worlds...

function initPlanets() {
    return [
        "Mercury",
        "Venus",
        "Earth"
    ];

    
}



function DestroyAllPlanets(planets) {

  while(planets.length > 0 ) {
        let planet = planets.pop();
        console.log(`Destroying ${planet}`);
        console.log(`There are now ${planets.length} left to destroy`);
    }


}

DestroyAllPlanets( initPlanets()) ;