let userinput=document.querySelector("#userin");
let imagediv=document.querySelector("#imgdiv");
let qrimage=document.querySelector("#qrimage");

function generateqr(){
    qrimage.style.display="block"
    qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userinput.value; 
}