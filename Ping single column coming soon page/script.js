let [email] = document.getElementsByTagName('input');
let [errMessage] = document.getElementsByTagName('small');
let [button] = document.getElementsByTagName('button');
let [container] = document.getElementsByClassName('container');
let [thankYou] = document.getElementsByClassName('thank-you');

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

button.addEventListener('click', (e)=>{
    // prevent browser to refresh
    e.preventDefault();

    // Email check and update
    if(!ValidateEmail(email.value)){
        errMessage.style.display = 'block';
        email.style.border = '2px solid hsl(354, 100%, 66%)'
    } else {
        container.style.display = 'none'
        thankYou.style.display = 'flex';
    }
})
