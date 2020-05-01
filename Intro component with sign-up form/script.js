/* 
Empêcher le browser de se rafraichir lorsqu'on valide
récupérer tous les inputs
checker chaque input et apporter les modifs nécessaires
*/

let [firstName, lastName, email, password] = 
    document.getElementsByTagName('input');

let [small1, small2, small3, small4] = 
    document.getElementsByTagName('small');

let [errIcon1, errIcon2, errIcon3, errIcon4] = 
    document.getElementsByClassName('error-icon');

let [button] = document.getElementsByTagName('button');

let [thankYou] = document.getElementsByClassName('thank-you');
let [container] = document.getElementsByClassName('container');

let check = 0;

button.addEventListener('click', (e)=>{

    check=0;

    // prevent browser to refresh
    e.preventDefault();

    // First Name check and update
    if(!firstName.value){
        small1.style.display = 'block';
        errIcon1.style.display = 'block';
        firstName.style.border = '2px solid hsl(0, 100%, 74%)'
    } else {
        small1.style.display = 'none';
        errIcon1.style.display = 'none';
        firstName.style.border = '1px solid hsl(246, 25%, 77%)'
        check++;
    }

    // Last Name check and update
    if(!lastName.value){
        small2.style.display = 'block';
        errIcon2.style.display = 'block';
        lastName.style.border = '2px solid hsl(0, 100%, 74%)'
    } else {
        small2.style.display = 'none';
        errIcon2.style.display = 'none';
        lastName.style.border = '1px solid hsl(246, 25%, 77%)';
        check++;
    }

    // Email check and update
    if(!ValidateEmail(email.value)){
        small3.style.display = 'block';
        errIcon3.style.display = 'block';
        email.style.border = '2px solid hsl(0, 100%, 74%)'
    } else {
        small3.style.display = 'none';
        errIcon3.style.display = 'none';
        email.style.border = '1px solid hsl(246, 25%, 77%)';
        check++;
    }

    // Password check and update
    if(!password.value){
        small4.style.display = 'block';
        errIcon4.style.display = 'block';
        password.style.border = '2px solid hsl(0, 100%, 74%)'
    } else {
        small4.style.display = 'none';
        errIcon4.style.display = 'none';
        password.style.border = '1px solid hsl(246, 25%, 77%)'
        check++;
    }

    if(check===4){
        thankYou.style.display = 'flex';
        container.style.display = 'none';
    }


})

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}