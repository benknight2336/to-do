function addListParent(listName) {

    $("#newTodoDiv").show();
    myList.add(listName);
    printPage();

    console.log("This is working");
}

function addListChild(itemName, listNum) {
    $(".createListNames").val("");
    myList.collection[listNum].add(itemName, "Name of the List Items");
    printPage();
}

function editList(listNum, itemnumber, name) {
    let thename = myList.add(thename)
    // thename = name;
    printPage();
}


function printPage() {
    console.log("printPage function");

    $(".todoList").html("");

    for (let i = 0; i < myList.collection.length; i++) {
        let theli = myList.collection[i];
        let listmembers = "";
        for (let g = 0; g < theli.collection.length; g++) {
            let liName = theli.collection[g];
            listmembers += `<li class="member" contenteditable="true" onkeydown="editList(${i}, ${g}, this.innerText)" >${liName.name}</li>`
        }
        // $(".todoList").append(`<input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">`);
        $(".lists").append(`<li type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">${theli.name}</li>`);
        $(".todoList").append(listmembers);

                    /* this is code that may come in handy later on but im not positive....
                    <div class="listchildren">${listmembers}</div> */
    }
}