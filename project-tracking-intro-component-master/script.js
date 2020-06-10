let hambBtn = document.getElementById('hamburger');
let closeBtn = document.getElementById('close');
let [mobileNav] = document.getElementsByClassName('mobile-navigation');

let displayMobNav = function(){
    if(mobileNav.style.display === 'block'){
        mobileNav.style.display = 'none';
        hambBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
        hambBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }  

}

hambBtn.addEventListener('click', displayMobNav);
closeBtn.addEventListener('click', displayMobNav);