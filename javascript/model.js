
let myList = new ListCollection();

function ListCollection(){
    this.collection = [];
    this.add = function(listName){
        return this.collection.push(new List(listName));
    };
}

function List(name){
    this.name = name;
    this.collection = [];
    this.add = function (name, color) {
        this.collection.push(new ListItem(name, color));
    };
}

function ListItem(name, color){
    this.name = name;
    this.color = color;
}