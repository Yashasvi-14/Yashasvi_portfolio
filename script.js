function showResumeAlert(){
    alert("My resume is under construction and will be added soon. Stay tuned!");
}
/*class toggling*/
const toggleBtn= document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});

const topBtn=document.getElementById("topBtn");
window.onscroll=function(){
    if(document.body.scrollTop>200 || document.documentElement.scrollTop > 200)
    {
        topBtn.style.display="block";//show the button
    }
    else{
        topBtn.style.display="none";
    }
};

function scrollToTop(){
    window.scrollTo({top: 0,behavior: 'smooth'});
}