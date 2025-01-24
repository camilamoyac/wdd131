const input = document.querySelector("#favchap");
const button = document.querySelector("button");  //add chapter
const list = document.querySelector("#list");  //list of scriptures

function addChapter(){
    if (input.value.trim() === ""){
        alert("Please enter a value.");
        input.focus();
        return;
    }
    else{
        const li = document.createElement("li");  //creating list items
        const deleteButton = document.createElement("button");  //❌ button

        li.textContent = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();
        })

        input.value = "";
        input.focus();
    }
};

button.addEventListener("click", addChapter);

input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addChapter();
    }
});