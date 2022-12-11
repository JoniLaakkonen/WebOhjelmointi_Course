class Henkilo{
    constructor(nimi, puhelinnumero){
        this.nimi = nimi;
        this.puhelinnumero = puhelinnumero;
    }
    setNimi(nimi){
        this.nimi = nimi;
    }
    setPuh(puh){
        this.puhelinnumero = puh;
    }
    setHenkilo(){
        this.nimi = (prompt("Anna nimi: "));
        this.puhelinnumero = (prompt("Anna puhelinnumero: "));
    }
    getNimi(){
        console.log(this.nimi)
        return this.nimi;
    }
    getPuh(){
        return this.puhelinnumero;
    }
}

function haeNumero(puhelinLuettelo, nimi){
    let numlista = new Array();

    let i = 0;
    while(i < puhelinLuettelo.length) {
        if (puhelinLuettelo[i].getNimi().toLowerCase() == nimi.toLowerCase()){
            numlista.push(puhelinLuettelo[i].getPuh());
        }
        i = i+1;
    };

    if(numlista.length < 1){
        return "ketään ei löytynyt";
    }
    return numlista;
}

const puhLuetteloTesti = () => {
    const puhluettelo = [];
    puhluettelo.push(new Henkilo("Maija", "0100100"));
    puhluettelo.push(new Henkilo("Tomi", "0445180987"));
    console.log(puhluettelo);

    let nimi = prompt("Anna nimi: ");
    let puh = prompt("Anna puhelinnumero: ");
    puhluettelo.push(new Henkilo(nimi,puh));

    console.log(puhluettelo);

    let hNimi = prompt("Anna haettavan henkilön nimi: ");
    return haeNumero(puhluettelo, hNimi);
}
console.log(puhLuetteloTesti());