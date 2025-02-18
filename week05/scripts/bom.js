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

button.addEventListener("click", () => {
    if (input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

input.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        addChapter();
    }
});

let chaptersArray = getChapterList() || []; //assigns result from function or empty array if there's no result

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList(){
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}