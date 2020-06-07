// function to make the nav menu pop up
function popupNav() {
    let [hamburgerBtn] = document.getElementsByClassName("hamburger");
    let [closeBtn] = document.getElementsByClassName("close");
    let [mobileNav] = document.getElementsByClassName("mobile-nav");
    if(hamburgerBtn.style.display === 'none'){
        hamburgerBtn.style.display = "block";
        closeBtn.style.display = "none";
        mobileNav.style.display = "none";        
    } else {
        hamburgerBtn.style.display = "none";
        closeBtn.style.display = "block";
        mobileNav.style.display = "block";
    }
}
  
// ajout d'un écouteur d'évènement au tableau
let [hambBtn] = document.getElementsByClassName("hamburger");
let [closeBtn] = document.getElementsByClassName("close");
hambBtn.addEventListener("click", popupNav);
closeBtn.addEventListener("click", popupNav);

  