var inputvalue = document.getElementById('fname');
var body = document.getElementById('body');
function Add(){
    let a = inputvalue.value;
    let paragraph = document.createElement('p');
    paragraph.innerHTML = a;
    body.append(paragraph);
    inputvalue.value = ''
}