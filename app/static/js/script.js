let allCheckBox = document.querySelectorAll('input[type$="checkbox"]');
let text_block = document.getElementById("symbv");

/* insert new text to input */
function changeValue(text){
    let item = document.getElementById("symbv");
    item.value = "";
    item.value += text;
}

/* see all current checkbox and call newChange */
function showTrue(){
    let text = ""
    for(let item of allCheckBox){
        if(item.checked){
            text += item.value
        }
    } changeValue(text)
}

/* add event for all checkbox */
allCheckBox.forEach(function(elem){
    elem.addEventListener("click", () => {
        showTrue();
    })
})

/* add value to checkbox input */
function newChange(val){
    document.querySelector("#prov").value = val
}

/* started insert value */
showTrue();


let number = document.querySelector("#number");

/* summary how match genre pswd */
function summar(somebody){
    somebody = parseInt(somebody)
    equal_now = parseInt(number.value) 
    if((equal_now + somebody > 0) && (equal_now + somebody) <= 25){
        result = equal_now + somebody
        number.value = result
    }
}

/* set new value when use range 'long password' */
function newAmount(amount) {
    block = document.getElementById("block").innerHTML = amount;
}

/* copy to clipboard when click to password */
function takeText(id_text){
    alert(id_text)
    let item = document.createElement('textarea');
    item.setAttribute('readonly', '');
    item.value = document.getElementById(id_text).value;
    item.style.position = 'absolute';
    item.style.opacity = '0';
    document.body.appendChild(item);
    item.select();
    document.execCommand('copy');
    document.body.removeChild(item);
}