import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from '../../styles/card.style'

const CFamily = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Urheilija 2</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Urheilija 2</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>JavaScript-palvelinsovellus</BodyHeader>
                            <BodyText>mitä teit, miten teit, miksi teit, mitä opit, mitä jäi vielä oppimatta, sekä erityisesti: miten mielestäsi onnistuit tässä tehtävässä ja mitä tekisit nyt toisin (jos mitään)?
                                Tehtävänä oli luoda JavaScript-palvelinsovellus, joka tarjoaa REST-rajapinnan kautta tiedon urheilijoista. Oli suunniteltava sovellus niin että siinä toimii datan haku,lisäys, poisto ja päivitys mariadb-tietokantaan.
                                Käyttöliittymä tuli toteuttaa Reactilla ja käyttää hyväkseen ContextAPI arkkitehtuuria jos mahdollista. Myös bootstrap komponentteja kehotettiin käyttämään.
                                Tehtävä oli pitkä ja työläs mutta onnistuin mielestäni loppujaan ihan hyvin.
                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/urheilija2"}>Linkki Projektiin</a>
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default CFamily