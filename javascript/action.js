function addListParent(event, listName) {
    
    myList.add(listName);
    $(".createListNames").val("");
    printPage();
    
    console.log("This is working");
}

function addListChild(event, itemName, listNum) {
    switch (event.which) {
        case 13: //enter key
            $(".createListNames").val("");
            myList.collection[listNum].add(itemName, "Name of the List Items");
            printPage();
            break;
    }
}

function editList(listNum, itemnumber, name) {
    switch (event.which) {
        case 13:
            let thename = myList.collection[listNum].collection[itemnumber].name;
            // thename = name;
            printPage();
            break;
    }
}


function printPage() {
    console.log("printPage function");

    $(".listNames").html("");

    for (let i = 0; i < myList.collection.length; i++) {
        let theli = myList.collection[i];
        let listmembers = "";
        for (let g = 0; g < theli.collection.length; g++) {
            let liName = theli.collection[g];
            listmembers += `<div class="member" contenteditable="true" onkeydown="editList(${i}, ${g}, this.innerText)" >${liName.name}</div>`
        }
        $(".listNames").append(`
                    <div>
                        <span>${theli.name}</span>
                        <input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">
                    </div>
                    `)
                    //Notes for tomorrow... I need the name of the list to stay when i hit the enter key. FurtherMore after the enter key is hit and the parent list and its name has been created, i need the child of the list to appear allowing me to edit as a part of the list.
                    
                    /* this is code that may come in handy later on but im not positive.... 
                    <div class="listchildren">${listmembers}</div> */
    }
}