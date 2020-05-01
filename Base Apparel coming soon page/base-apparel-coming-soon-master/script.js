let form = document.getElementsByTagName('form')[0];
let small = document.getElementsByTagName('small')[0]
let errorIcon = document.getElementsByClassName('error-icon')[0];
let input = document.getElementsByTagName('input')[0];
let content;
let isEmail=true;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    content = input.value;
    isEmail = content.includes("@")? true : false;
    small.style.display = isEmail ? "none" : "block";
    errorIcon.style.display = isEmail ? "none" : "block";
    input.style.border = isEmail ? "1px solid hsl(0, 36%, 70%)" : "2px solid hsl(0, 93%, 68%)";
})

/*let small = document.getElementsByTagName('small')[0];
let content;

const checkInput = () => {

    content = document.getElementsByTagName("input")[0].value;
    
    content.includes("@")? console.log('input is an email') : small.style.display = "block";

}*/