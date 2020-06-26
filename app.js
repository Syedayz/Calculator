function getinput(num) {
    var takinginput=document.getElementById("takinginput");
    takinginput.value+=num
    
}
function clearR(){
    var takinginput=document.getElementById("takinginput");
    takinginput.value=""
}
function equalsto(){
    var takinginput=document.getElementById("takinginput");
    takinginput.value=eval(takinginput.value)
}

