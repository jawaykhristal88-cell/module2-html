const themeToggle = document.getElementById("themeToggle");

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dark-mode")) {
 
    document.body.classList.remove("dark-mode");
  }
  themeToggle.textContent = "Dark Mode";
  themeToggle.style.backgroundColor = "#4b3621";
  themeToggle.style.color = "#e8d0b6b7"; 
});


themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
    themeToggle.style.backgroundColor = "#e8d0b6b7";
    themeToggle.style.color = "#4b3621"; 
  } else {
   
    themeToggle.textContent = "Dark Mode";
    themeToggle.style.backgroundColor = "#4b3621"; 
    themeToggle.style.color = "#e8d0b6b7"; 
  }
});

submitBtn.addEventListener("click",function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name===""||email===""){
    alert("Please fill in all required fields.");
    } else{
    alert("Form submitted successfully!");
    }
});