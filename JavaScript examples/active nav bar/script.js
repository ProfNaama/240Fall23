function activeNavBar() {
    var navLinks= document.querySelectorAll('nav a');
    var curentLocation =  window.location;
    navLinks.forEach(element => {
        if (element.href == curentLocation) {
            console.log("ok");
            element.classList.add('active');
        }
    });
}

activeNavBar();