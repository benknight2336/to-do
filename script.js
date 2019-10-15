let listNames = [];
let listCount = 0;

$("#createListNames").sortable({
    stop: function(event, ui) {executeCode();}
});

function saveList(event){
    switch(event.which){
        case 13:
            let myval = $("#names").val();
            console.log(myval);
            let tempObj = {};
            tempObj.id = listCount;
            tempObj.listname = myval;
            tempObj.liscol = [];
            listNames.push(tempObj);
            printListNames();
            $("#names").val("");
            listCount++;
            break;
        default:
    }
}

function printListNames(){
    $("#createListNames").html("");
    for(let i = 0; i < listNames.length; i++)
    $("#createListNames").append(`<div class="nameHolder">
                                  <input type="text" id="names" placeholder="Enter List Name...">
                                  <i class="fas fa-trash"></i>
                                  </div>`)
}

function executeCode(){
    console.log("this is working");
    let nameArray = $("#createListNames").children();
    for(let i = 0; i < nameArray.length; i++){
        console.log(nameArray[i]);
        $(nameArray[i]).attr("id", `listnum${i}`);
    }
    //$(nameArray[0]).addClass("activeitem");
}