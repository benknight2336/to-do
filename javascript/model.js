
let myList = new ListCollection();

function ListCollection(){
    this.collection = [];
    this.add = function(listName){
        return this.collection.push(new List(listName));
    };
    
    localStorage.setItem("name", "color");
}

function List(name){
    this.name = name;
    this.collection = [];
    this.add = function (name, color) {
        this.collection.push(new ListItem(name, color));
    };
    this.delete = function(item){
        this.collection.splice(item, 1);
        console.log(`${item} was to delete`)
    }
}

function ListItem(name, color){
    this.name = name;
    this.color = color;
}

