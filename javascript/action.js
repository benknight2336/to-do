function addListParent(listName) {
    
    let listIndex = myList.add(listName) - 1;
    console.log(listIndex);
    $(".listName").val("");
    $(".lists").append("<li class='listItem' data-index='" + listIndex + "'>" + listName + "</li>");


    // printPage();
    
    console.log("This is working");
}

function addListChild(itemName, listNum) {
    // switch (event.which) {
    //     case 13: //enter key
            $(".createListNames").val("");
            myList.collection[listNum].add(itemName, "Name of the List Items");

            // printPage();
            // break;
    // }
}

function editList(listNum, itemnumber, name) {
    switch (event.which) {
        case 13:
            let thename = myList.add(thename)
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
                        <input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">
                    `)
                    
                    /* this is code that may come in handy later on but im not positive.... 
                    <div class="listchildren">${listmembers}</div> */
    }
}