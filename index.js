
var burger = document.querySelector("#burger");
var navigation = document.querySelector("#navigation");
//var burger = document.getElementById("#burger");

burger.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    navigation.classList.toggle('open');
    
    // if (navigation.className === "nav") {
    //     //vår menys klass är just nu nav och då vill vi lägga till 'open'
    //     navigation.className += "open"
    // } else {
    //     //vår menys klass är just nu nav open och då vill vi bara ha 'nav'
    //     navigation.className = "nav"
    // }
}