window.addEventListener('load', function () {
  const container = document.getElementById('container');

  /*** FETCH WITH TRADITIONAL SYNTAX (WITHOUT BONUS MISSIONS) ***/

  // fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
  //   response.json().then(function(data) {
  //     console.log(data);

  //     for (let i=0; i < data.length; i++) {
  //       let astronaut = data[i];
  //       container.innerHTML += `
  //         <div class="astronaut">
  //           <div class="bio">
  //             <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
  //             <ul>
  //               <li>Hours in space: ${astronaut.hoursInSpace}</li>
  //               <li>Active: ${astronaut.active}</li>
  //               <li>Skills: ${astronaut.skills.join(", ")}</li>
  //             </ul>
  //           </div>
  //           <img class="avatar" src="${astronaut.picture}">
  //         </div>
  //       `
  //     }
  //   });
  // });

  /*** FETCH WITH MODERN ASYNC/AWAIT SYNTAX & BONUS MISSIONS ***/

  async function fetchAndDisplayAstronauts() {
    let response = await fetch(
      'https://handlers.education.launchcode.org/static/astronauts.json'
    );
    let data = await response.json();

    // Bonus mission 1
    data.sort(function (a, b) {
      return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    // Bonus mission 3
    const count = document.getElementById('count');
    count.innerHTML = `These ${data.length} extraordinary people are a few of the handful of humankind who have had the privilege of looking down on our beautiful planet from the quiet darkness of outer space.`;

    for (let i = 0; i < data.length; i++) {
      let astronaut = data[i];

      // Bonus mission 2
      let activeClass = astronaut.active ? 'active' : ''; // ternary

      container.innerHTML += `
        <div class="astronaut">
          <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
              <li>Hours in space: ${astronaut.hoursInSpace}</li>
              <li class="${activeClass}">Active: ${astronaut.active}</li>
              <li>Skills: ${astronaut.skills.join(', ')}</li>
            </ul>
          </div>
          <img class="avatar" src="${astronaut.picture}">
        </div>
      `;
    }
  }

  // Don't forget to call your async function after you define it
  fetchAndDisplayAstronauts();
});
