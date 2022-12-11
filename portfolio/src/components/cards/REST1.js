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
                    <CardName>Rest API</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Rest API</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Rest API harjoitus</BodyHeader>
                            <BodyText>Tehtävänä oli luoda rest API rajapintaa hyödyödyntävä sovellus. Sovellus oli siis yksinkertainen backend sanakirja josta pystyy hakemaan sanoja tai lisäämään niitä.
                                Tehtävä oli erittäin haastava mutta myös hyvin mielenkiintoinen ja opettavainen. Harmillisesti en kerinnyt vielä kovin syvällisesti perehtyä Restiin, mutta sain hieman tuntumaa ja aijon opiskella sitä vielä vähän jouluna ymmärtääkseni sitä paremmin.
                            
                                <br/><br/> <a href={'https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/REST1'}>Linkki Projektiin</a> <br/>
                            
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