window.addEventListener('load', function() {

  const count = document.getElementById('count');
  const container = document.getElementById('container');

  /*** FETCH WITH TRADITIONAL SYNTAX ***/

  // fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
  //   response.json().then(function(data) {
  //   console.log(data);

  //     count.innerHTML = `There are ${data.length} astronauts!`;

  //     data.sort(function(a, b) {
  //       return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
  //     });

  //     for (let i=0; i < data.length; i++) {
  //       let astronaut = data[i];
  //       container.innerHTML += `
  //         <div class="astronaut">
  //           <div class="bio">
  //             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
  //             <ul>
  //               <li>Hours in space: ${astronaut.hoursInSpace}</li>
  //               <li class="${astronaut.active ? "green" : ""}">Active: ${astronaut.active}</li>
  //               <li>Skills: ${astronaut.skills.join(", ")}</li>
  //             </ul>
  //           </div>
  //           <img class="avatar" src="${astronaut.picture}">
  //         </div>
  //       `
  //     }
  //   });
  // })

  /*** FETCH WITH MODERN ASYNC/AWAIT SYNTAX ***/

  async function fetchAndDisplayAstronauts() {
    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
    let data = await response.json();
    
    count.innerHTML = `These ${data.length} extraordinary people are a few of the handful of humankind who have had the privilege of looking down on our beautiful planet from the quiet darkness of outer space.`;

    data.sort(function(a, b) {
      return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    for (let i=0; i < data.length; i++) {
      let astronaut = data[i];
      container.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li class="${astronaut.active ? "green" : ""}">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}">
        </div>
      `
    }
  }

  // Don't forget to call your async function after you define it
  fetchAndDisplayAstronauts();
});