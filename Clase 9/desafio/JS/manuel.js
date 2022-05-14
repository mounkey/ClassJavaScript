let input1 = document.querySelector("#nombre");
let input2 = document.querySelector("#edad");

input1.onkeyup = () => {console.log("keyUp")};
input2.onkeydown = () => {console.log("keyDown")}