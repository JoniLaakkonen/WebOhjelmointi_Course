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
                    <CardName>Rest UI</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Rest UI</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Sanakirja</BodyHeader>
                            <BodyText>Tehtävänä oli luoda käyttöliittymä REST1 projektille jolla pystyy lisäämään ja hakemaan sanoja sanakirjasta. Tehtävä avasi silmät backend monimutkaisuuteen ja sai ymmärtämään suunnitelmien tärkeyden backendiä luodessa. 
                                En edelleenkään ole saanut get metodia täysin toimivaksi projektiin, vaikka ymmärrän mielestäni sen jo melko hyvin, voi olla että joku selainsuoja häritsee sanojen lähettämistä oikeassa muodossa.

                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/REST1_UI"}>Linkki Projektiin</a>
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