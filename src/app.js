/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["El perro ", "Mi tia ", "Mi vecino ", "Mi hermano pequeño "];

  let action = [
    "se comió ",
    "orinó encima de ",
    "rompió ",
    "derramó cerveza sobre "
  ];

  let what = ["mi cuaderno ", "mi móvil ", "el coche ", "mi portatil "];

  let when = [
    "justo antes de la clase.",
    "mientras estaba echando una siesta.",
    "esta mañana.",
    "mientras yo estaba el ducha.",
    "mientras estaba comiendo."
  ];

  let randomWho = who[Math.floor(Math.random() * 4)];
  let randomAction = action[Math.floor(Math.random() * 4)];
  let randomWhat = what[Math.floor(Math.random() * 4)];
  let randomWhen = when[Math.floor(Math.random() * 4)];

  let randomPhrase = randomWho + randomAction + randomWhat + randomWhen;

  document.getElementById("excusas").innerHTML = randomPhrase;
};
