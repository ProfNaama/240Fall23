function activeNavBar() {
    var navLinks= document.querySelectorAll('nav a');
    var curentLocation =  window.location;
    console.log(curentLocation, navLinks);
    navLinks.forEach(element => {
        if (element.href == curentLocation) {
            console.log("ok");
            element.classList.add('active');
        }
    });
}

activeNavBar();

function rotateLogo() {
    var elementToRotate = document.getElementsByClassName("logo");
    console.log(elementToRotate); 
    elementToRotate.classList.toggle("rotated90");
  }

rotateLogo();
