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
            listMembers += `<i class="fas fa-trash-alt" onclick="delitem(${i},${g}, this)"></i></><li class="member" contenteditable="true" onkeydown="editListItem(${i}, ${g}, this.innerText)" >${liName.name}</li>`
        }
        $(".lists").append(`
            <div container>
                <span>${theli.name}</span>
                <input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">
                <ul>${listMembers}</ul>
            </div>
            `)
                  
    }
}

function delitem(listnum, itemnum, el){
    for(let l = 0; l <myList.collection.length; l++){
        let goblist = myList.collection[l]; //reference to a list object
        if(l === listnum){
            console.log(l);
            console.log(myList.collection[l]);
            myList.collection[l].delete(itemnum);
        
            $(el).parent().fadeOut();
            printPage();

            /* for(let i = 0; i < goblist.collection.length; i++){
                if(i === itemnum){
                    goblist.delete(itemnum);
                }
            } */
        }
    }
}