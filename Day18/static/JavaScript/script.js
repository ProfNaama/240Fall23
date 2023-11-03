/* this function does three things if the list is hidden:
1 -- Shows the list.
2 -- Changes the text on the button.
3 -- Displays the sort button.
If the list is not hidden, it performs the opposite actions. */
function ShowList() {
    // select the relevant elements: first button, list, second button
    var list = document.getElementById("NameList");
    var ShowListBTN = document.getElementById("ShowListBTN");
    var ShowSortBTN = document.getElementById("sortBTN");
    // get the computed style of the list (otherwise dosn't work)
    var listStyle = getComputedStyle(list);
    //perform if the list is hidden
    if (listStyle.display=="none") {
        list.style.display = "block";
        ShowListBTN.innerText = "October 31 attendance list"
        ShowSortBTN.style.display = "inline-block";
    } 
    // otherwise perform the opposite
    else {
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
    //set time out is a function the is called automatically after x milisc (in this case 2000)
    setTimeout(() => {
        document.getElementById("help").style.display="block";
    }, 2000);
};
NeedHelp();

/*This function sorts the names in the list*/
function sortNameList(sortedNames) {
    // creating an array of all the li elements
    var namesLI = document.querySelectorAll('li');
    console.log(namesLI);
    // creating an empty array
    var Names = [];
    // looping through the array namesLI to extract the inner html of each element and to push into the empty array 
    for (let index = 0; index < namesLI.length; index++) {
    const element = namesLI[index];
    Names.push(element.innerHTML); 
    }
    console.log(Names);
    // sort the array that contains the innerHtmls
    var sortedNames = Names.sort();
    console.log(sortedNames);
    // replace the innerhtml of the li with sorted innerhtml
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




