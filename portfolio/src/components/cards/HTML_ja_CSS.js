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
                    <CardName>HTML ja CSS alkuun tehtävä</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>HTML ja CSS alkuun tehtävä</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Kuvaus</BodyHeader>
                            <BodyText>Tehtävä oli hyvin helppo ja yksinkertainen, jossa haettiin tuntumaa HTML ja CSS. 
                                onnistuin hyvin ehkä olisi voinut antaa enemmän panosta mutta silloin ei ollut niin aikaa hetkellisesti.
                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/simple_html"}>Linkki Projektiin</a> <br/>
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