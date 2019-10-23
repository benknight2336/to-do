

function addListParent(event, listName){
    switch(event.which){
        case 13: //enter key
            myList.add(listName);
            $(".createListNames").val("");
            printPage();
            break;
    }
}
function addListChild(event, itemName, listNum) {
    switch (event.which) {
        case 13: //enter key
            $(".createListNames").val("");
            myList.collection[listNum].add(itemName, "green");
            printPage();
            break;
    }
}

function editList(listNum, itemnumber, name){
    switch(event.which){
        case 13:
            let thename = myList.collection[listNum].collection[itemnumber].name;
            thename = name;
            printPage();
            break;
    }
}


function printPage(){
    $(".names").html("");

    for(let i = 0; i < myList.collection.length; i++ ){
        let theli = myList.collection[i];
        let listmembers = "";
        for( let g = 0; g < theli.collection.length; g++){
            let liName = theli.collection[g];
            listmembers += `<div class="member" contenteditable="true" onkeydown="editList(${i}, ${g}, this.innerText)" >${liName.name}</div>`
        }
        $(".names").append(`<div>
                    <div>
                        <span>${theli.name}</span>
                        <input type="text" class="listparent" onkeyup="addListChild(event, this.value, ${i})">
                    </div>
                    <div class="listchildren">${listmembers}</div>
                    </div>`)
    }
}