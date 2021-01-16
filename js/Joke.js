/*--------get "box" element and insert in it fresh data from API ----------*/

const box = document.getElementById("box");
const p = document.createElement("P");
 
const url = "https://api.chucknorris.io/jokes/random";

/*--------fetching the data from API and store it in variable ----------*/

function quotegen(){
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
    p.innerHTML = data.value;
    box.appendChild(p);
    })
}