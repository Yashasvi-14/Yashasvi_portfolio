function showResumeAlert(){
    alert("My resume is under construction and will be added soon. Stay tuned!");
}
/*class toggling*/
const toggleBtn= document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});