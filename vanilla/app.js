const h1 = document.querySelector("div.hello:first-child h1");


function handleClick() {  
   h1.classList.toggle("click"); 
}


h1.addEventListener("click", handleClick);  