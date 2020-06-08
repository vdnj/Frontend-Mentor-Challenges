function check() {
    let checkBox = document.getElementById("checbox");
    let annually = document.getElementsByClassName("annually");
    let monthly = document.getElementsByClassName("monthly");
  
    for (let i = 0; i < annually.length; i++) {
      if (checkBox.checked == true) {
        annually[i].style.display = "none";
        monthly[i].style.display = "block";
      } else if (checkBox.checked == false) {
        annually[i].style.display = "block";
        monthly[i].style.display = "none";
      }
    }
  }
check();
  