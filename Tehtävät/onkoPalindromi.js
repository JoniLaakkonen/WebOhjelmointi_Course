function onkoPalindromi(str){
    let str = prompt("Kirjoita jokin merkkijono ja tarkistan onko se palindromi: ")
    let teststr = str.split('').reverse().join('');
    if(str == teststr){
        return true;
    }
    return false;
}
onkoPalindromi();