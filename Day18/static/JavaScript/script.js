/* this function does three things if the list is hidden:
1 -- Shows the list.
2 -- Changes the text on the button.
3 -- Displays the sort button.
If the list is not hidden, it performs the opposite actions. */
function ShowList() {
    var list = document.getElementById("NameList");
    var ShowListBTN = document.getElementById("ShowListBTN");
    var ShowSortBTN = document.getElementById("sortBTN");
    var listStyle = getComputedStyle(list);
    if (listStyle.display=="none") {
        list.style.display = "block";
        ShowListBTN.innerText = "October 31 attendance list"
        ShowSortBTN.style.display = "inline-block";
    } else {
        document.getElementById("NameList").style.display = "none";
        ShowListBTN.innerText = "Who was in class on October 31?";
        ShowSortBTN.style.display = "none";
    }
}

/*this prints the time into the consol*/
var Time = new Date().getTime();
console.log(Time);


/*this function show the hidden element "need help" after 2000 milisecond from loading*/
function NeedHelp() {
    setTimeout(() => {
        document.getElementById("help").style.display="block";
    }, 2000);
};
NeedHelp();

/*This function sorts the names in the list*/
function sortNameList(sortedNames) {
    var namesLI = document.querySelectorAll('li');
    console.log(namesLI);
    var Names = [];
    for (let index = 0; index < namesLI.length; index++) {
    const element = namesLI[index];
    Names.push(element.innerHTML); 
    }
    console.log(Names);
    var sortedNames = Names.sort();
    console.log(sortedNames);
    for (let index = 0; index < namesLI.length; index++) {
        const element = namesLI[index];
        console.log(sortedNames[index]);;
        namesLI[index].innerHTML=sortedNames[index];
    }
}

/* These 2 staemeents alert hello on loading of the body */
//document.getElementsByName('body').onload = alert('hello');
document.getElementsByName('body').addEventListener('load',alert('hello again'))

/*Here I first created an array of all li elements & then looped through to add onclick event for each li*/
var lis = document.querySelectorAll("li");
lis.forEach(element => {
    element.addEventListener('click', (element)=>{
        console.log(element.target.style);
        element.target.style.color = "red";
    })
});




