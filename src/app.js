import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //Arreglos con excusas
        let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
        let action = ['ate', 'peed', 'crushed', 'broke'];
        let what = ['my homework', 'my phone', 'the car'];
        let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

        function generateExcuse() {
            // Generar numeros randoms para tomar una parte de cada array al azar
            let whoIndex = Math.floor(Math.random() * who.length);
            let actionIndex = Math.floor(Math.random() * action.length);
            let whatIndex = Math.floor(Math.random() * what.length);
            let whenIndex = Math.floor(Math.random() * when.length);

            // Construct the sentence
            let sentence = who[whoIndex] + " " + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];

            // Return the sentence
            return sentence;
        }

        // Tomar el button the html
        let button = document.getElementById("ExcuseButton");

        // Add the click event listener
        button.addEventListener("click", function() {
            // Tomar el html y ejecutar la funcion
            document.getElementById("excuse").innerHTML = generateExcuse();
        });
};
