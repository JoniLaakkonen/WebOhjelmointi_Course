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
                    <CardName>PostsApp</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>PostsApp</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Otsikko</BodyHeader>
                            <BodyText>Tehtävänä oli luoda Posts-app sovelluksen käyttöliittymään yksittäinen Post komponentti ja upottaa se Posts komponentin sisälle. Palautin tehtävän "Raaka" version opettajalle aijemmin ja sitä ei sen takia muokkaamattomana hyväksytty,
                                mutta olen nyt palauttanut uuden toimivan version opettajalle.
                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/postsApp"}>Linkki Projektiin</a> <br/>
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