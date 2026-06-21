const textInput=document.getElementById("textInput");
const countDisplay=document.getElementById("count");

textInput.addEventListener("input",function(){
    const text=textInput.value;
    const characters=text.length;
    
    countDisplay.textContent =`Characters: ${characters}`;
    
});