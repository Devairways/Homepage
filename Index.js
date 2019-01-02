const team = document.getElementById("wrapper");
const producten = document.getElementById("tools");
const contact = document.getElementById("adv");
const home = document.getElementById("home");
const omhoog = document.getElementById("up");
const wie = document.querySelector("#Who");
const products = document.querySelector("#products");
const contacts = document.querySelector("#contacts");
const nav = document.querySelector("nav");




const scroll = (element) => {
	element.scrollIntoView({behavior: "smooth", block: "start"});
	}

home.addEventListener ("click", function(){alert("Hier ben je Thuis :)")})	
up.addEventListener("click", function(){scroll(nav)});
wie.addEventListener("click", function(){ scroll(team)});
products.addEventListener("click", function(){ scroll(producten)});
contacts.addEventListener("click", function(){ scroll(contact)});