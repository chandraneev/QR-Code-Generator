let userinput=document.querySelector("#userin");
let imagediv=document.querySelector("#imgdiv");
let qrimage=document.querySelector("#qrimage");

function generateqr(){
    if(userinput.value===""){
       alert("*QR Code Not Found, Please Retry");
    }
    else{
        qrimage.style.display="block"
        qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (userinput.value);
    }
}


function downloadqr(){
    if(qrimage.src.includes("https://api.qrserver.com") && qrimage.style.display!=="none"){
        let link=document.createElement("a");
        link.href=qrimage.src;
        link.download="qr_code.png";
        link.click();
    }
    else{
        alert("Generate QR Code First");
    }
}