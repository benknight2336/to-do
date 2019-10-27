function addListParent(listName) {
    myList.add(listName);
    printPage();
    updateStorage();

    // console.log("This is working");
}

function addListChild(event, itemName, listNum) {
    switch (event.which) {
        case 13: //enter key
        // $(".createListNames").val("");
        myList.collection[listNum].add(itemName, "Name of the List Items");
        printPage();
        updateStorage();
        break;
    }
}

function completeListItem(listNum, itemNumber) {
    list = myList.collection[listNum];
    $(`#checkbox${listNum}Item${itemNumber}`).hide();
    $(`#delete${listNum}Item${itemNumber}`).hide();
    $(`#list${listNum}Item${itemNumber}`).html(`<span style="text-decoration:line-through">${list.collection[itemNumber].name}</span>`);
    list.delete(itemNumber);
    updateStorage();
}

function editListItem(listNum, itemNumber, name) {
    switch (event.which) {
        case 13: //enter key
        
        console.log(name)
        // let theName = name;
        myList.edit(listNum, itemNumber, name);
        //myList.add(thename)
        printPage();
        updateStorage();
        break;
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
            updateStorage();

            /* for(let i = 0; i < goblist.collection.length; i++){
                if(i === itemnum){
                    goblist.delete(itemnum);
                }
            } */
        }
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
            listMembers += `
                
                <div class="listMember">
                <input id="checkbox${i}Item${g}" class="checkbox" type="checkbox" onclick="completeListItem(${i}, ${g})" />
                <span id="list${i}Item${g}" contenteditable="true" onkeydown="editListItem(${i}, ${g}, this.innerHTML)">${liName.name}</span>
                <i id="delete${i}Item${g}" class="fas fa-trash-alt" onclick="delitem(${i},${g}, this)"></i>
                </div>`
                
        }
        $(".lists").append(`
            <div container>
                <span>${theli.name}</span>
                <input type="text" class="listparent" contenteditable="true" placeholder="Type To-DO, Hit Enter..." onkeyup="addListChild(event, this.value, ${i})">
                <div class="listMembers">${listMembers}</div>
                
            </div>
            `)
                  
    }
}

function updateStorage(){
    localStorage.setItem("myList", JSON.stringify(myList.collection));
}