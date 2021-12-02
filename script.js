//test
//console.log("hello !!")

//DOM Exercise 1
function main() {
    let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    let inline = document.querySelectorAll("li");
    for (let i = 0; i < inline.length; i++) {
    console.log(inline[i]); }

   //function thelink() {
    let thatlink = document.querySelector(".link").setAttribute("href","https://www.example.com"); 

    let newname = document.querySelector("a").innerText = "Somewhere"; 
        
    let hideMe = document.getElementById("hide-me").style.display = "none";

    let showMe = document.getElementById("show-me").style.display = "block";

    //let enterName = document.getElementById("name").name;
        //document.getElementById("name").innerHTML = "Welcome Grant!";
    
    const enterName = document.getElementById("name").value;
    console.log(enterName);
    let welcomeMsg = document.querySelector("h1");
    welcomeMsg.innerText = "Welcome___" + enterName;
    //document.getElementById("name").innerHTML = "Welcome Grant!";
    //enterName.innerText = "Welcome Grant"

}
