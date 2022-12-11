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
                    <CardName>Node.js ja MariaDB</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Node.js ja MariaDB</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>tietokantasovellus </BodyHeader>
                            <BodyText>mitä teit, miten teit, miksi teit, mitä opit, mitä jäi vielä oppimatta, sekä erityisesti: miten mielestäsi onnistuit tässä tehtävässä ja mitä tekisit nyt toisin (jos mitään)?
                                Tehtävänä oli luoda tietokanta ja siihen sovellus node.js:sään. Tietokantasovellukseen oli jo valmis alkuu, mutta siihen täytyi vielä lisätä put ja delete metodit.
                                Mielestäni tehtävä oli mukava ja opettevainen, sekä sopivasti rennompi lähestyminen aiheeseen ja koodia oli mukava kyetä tutkimaan ja siihen sen jälkeen lisäämään omien päätelmien perusteella.

                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/Task5_Node_MariaDB"}>Linkki Projektiin</a><br/>
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