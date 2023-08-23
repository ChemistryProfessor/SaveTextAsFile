const $ = document;
const textarea = $.querySelector("textarea"),
fileNameInput = $.querySelector(".file-name input"),
selectMenu = $.querySelector(".save-as select"),
saveBtn = $.querySelector(".save-btn");

selectMenu.addEventListener("change" , () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click" , () => {
    const blob = new Blob([textarea.value] , {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = $.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click(); 
});

















