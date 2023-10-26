var cat = {
    name: 'Mitzy',
    age: 18,
    furColor: 'grey',
    meow: function () {
        console.log("mwowwwwwww");
    },
    eat: (food)=>{
        console.log("I love " + food);
    },
    sleep: (NumMints)=>{
        for (let index = 0; index < NumMints; index++) {
            console.log("z" + index);            
        }
    }
}

console.log(cat);
console.log(cat.name);
console.log(cat.meow());
console.log(cat.eat("fish"));
console.log(cat.sleep(1));


var dogs = ["Fibi", "Lets", "Fluffy"];

var cats = [{name: 'Pitzy', age:2}, {name: "Flitzy", age:4}, {name: 'Kitsy', age:18}];

var books = {
    nama: "book name",
    author: "author name",
    alreadyRead: true
}

function book(bName, aName, R) {
    this.BookName = bName;
    this.authorName = aName;
    this.alreadyRead = R
};

var b1 = new book("The Hobbit", "Tolkien", true);
var b2 = new book("War and Peace", "Tolstoy", false);
var b3 = new book("Anna Karenina", "Dostyovskt", true);

console.log(b1);

var booksArray = [b1,b2,b3]

console.log(booksArray);


for (let index = 0; index < booksArray.length; index++) {
    const element = booksArray[index];
    if (element.alreadyRead == true) {
        console.log("i read " + element.BookName + "by " + element.authorName);
    }     
};


