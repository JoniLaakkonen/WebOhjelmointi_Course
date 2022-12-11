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
                    <CardName>Urheilu 1</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Urheilu 1</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kehitystehtävänä</BodyHeader>
                            <BodyText>Tehtävänä oli luoda yliluokka henkilö, ja sille perijä luokka urheilija omine lisä atrribuutteineen.
                                Nämä tehtynä täytyi toteuttaa lisäksi saantifunktiot (get- ja set-) Urheilija-luokalle merkityksellisiin attribuutteihin.
                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/Urheilu1"}>Linkki Projektiin</a> <br/>

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