function onkoPalindromi(str){ //funktio ottaa vastaan merkkijonon
    for(let i = 0; i < (str.length/2); i++){ //käy läpi merkkijonon puoleen väliin asti

        //tarkistaen samalla kaikki "vastakkaiset kirjaimet" jotka voi löytää kun merkkijonon lopusta vähentää sen hetkisen laskurin verran
        if(str[i] !== str[str.length - 1 - i]){
            return false;  //jos sattuu niin, ettei merkkit täsmää, niin palautetaan false
        }
    }
    return true; //muuten true
}

let str = prompt("Kirjoita jokin merkkijono ja tarkistan onko se palindromi: ")
onkoPalindromi(str);