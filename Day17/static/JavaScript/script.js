var x = document.getElementById("one");
console.log("x is: ", x);

var y = document.querySelector('li');
console.log("Y is: ", y);


var z = document.querySelectorAll('li');
console.log("z is: ", z);

console.log(x.innerHTML);

x.innerHTML = "figs";

var hotItems = document.querySelectorAll("li.hot");
console.log(hotItems);

for (let index = 0; index < hotItems.length; index++) {
    hotItems[index].className = "cool";    
} 

z[3].classList.add("hot");

z[2].style.display = "none";