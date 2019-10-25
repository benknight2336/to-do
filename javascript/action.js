function addListParent(listName) {

    myList.add(listName);
    printPage();

    // console.log("This is working");
}

function addListChild(event, itemName, listNum) {
    switch (event.which) {
        case 13: //enter key
        // $(".createListNames").val("");
        myList.collection[listNum].add(itemName, "Name of the List Items");
        printPage();
        break;
    }
}

function editListItem(listNum, itemnumber, name) {
    switch (event.which) {
        case 13: //enter key
        let thename = name;
        // myList.add(thename)
        printPage();
        break;
    }
}

function printPage() {
    console.log("printPage function");

    $(".lists").html("");
    $(".todoItems").html("");

    for (let i = 0; i < myList.collection.length; i++) {
        let theli = myList.collection[i];
        let listMembers = "";
        for (let g = 0; g < theli.collection.length; g++) {
            let liName = theli.collection[g];
            listMembers += `<li class="member" contenteditable="true" onkeydown="editListItem(${i}, ${g}, this.innerText)" >${liName.name}</li>`
        }
        $(".lists").append(`
            <div>
                <span>${theli.name}</span>
                <input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">
                <ul>${listMembers}</ul>
            </div>
            `)
                  
    }
}