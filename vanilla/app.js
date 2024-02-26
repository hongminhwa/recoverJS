const loginForm = document.querySelector("#login-form");


const loginInput =  document.querySelector("#login-form input"); 
const greeting = document.querySelector("#greeting");

const HidingClass = "hidden";

const USERNAME_KEY = "username";


function handleLogin(event) {
   event.preventDefault(); 
   loginForm.classList.add(HidingClass); 
   const username = loginInput.value; 
   localStorage.setItem(USERNAME_KEY, username); 
   console.log(username); 
   paintGreetings(username);

}; 



function paintGreetings(username) {
   greeting.innerText = `hello ${username}`
   greeting.classList.remove(HidingClass); 
   
};




const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null) { 
   loginForm.classList.remove(HidingClass);
   loginForm.addEventListener("submit", handleLogin);
   //show form 
}else {
   //delete form
  paintGreetings(savedUsername);  
}



