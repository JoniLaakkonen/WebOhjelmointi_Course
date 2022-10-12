class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymävuosi){
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymävuosi = syntymävuosi;
    }
  }
  
  class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymävuosi, linkki_kuvaan, omapaino, laji, saavutukset) {
        super(etunimet, sukunimi, kutsumanimi, syntymävuosi);
        this.linkki_kuvaan = linkki_kuvaan;
        this.omapaino = omapaino;
        this.laji = laji;
        this.saavutukset = [saavutukset];
      }
    setEtuSukuNimi(etunimet, sukunimi){
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
    }
    setOmaPaino(omapaino){
        this.omapaino = omapaino;
    }
    setNewSaavutus(saavutus){
        this.saavutukset.push(saavutus);
    }
    setLaji(laji){
        this.laji = laji;
    }
    setLinkkiKuvaan(linkki_kuvaan){
        this.linkki_kuvaan = linkki_kuvaan;
    }
    getEtuSukuNimi(){
        return this.etunimet + " " + this.sukunimi ;
    }
    getLaji(){
        return this.laji;
    }
    getSaavutukset(){
        return this.saavutukset;
    }
    getLinkkiKuvaan(){
        return this.linkki_kuvaan;
    }
    getOmaPaino(){
        return this.omapaino;
    }
  }


  function testi(){
    let h1 = new Urheilija('Joni','Laakkonen','Joni',1999,'#linkki','85kg','Kilpa syönti','MaailmanMestari');

    console.log('Urheilija: ' + h1.getEtuSukuNimi() + ' on saavuttanut ' + h1.getSaavutukset() + ' painosarjassa ' + h1.getOmaPaino());

    h1.setOmaPaino('95kg');

    console.log('Päivitetty paino: ' + h1.getOmaPaino());

    h1.setNewSaavutus('HotOnes Champ');

    console.log('Päivitetyt saavutukset: ' + h1.getSaavutukset());
  }
  testi();