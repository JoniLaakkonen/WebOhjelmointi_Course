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
                    <CardName>Javascript -perusteet, teht 1</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <HeaderText>Javascript -perusteet, teht 1</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Puhelinluettelo</BodyHeader>
                            <BodyText>Tehtävä oli luoda puhelinluettelo joka sisältää henkilö olioita. Lisäksi tehtävään kuului haku toiminnon luonti, jossa käyttäjä hakee puhelinnumeroa nimen perusteella.
                                Onnistuin mielestäni tehtävässä hyvin ja se oli mukava muistuttelu js olio ohjelmointiin. 
                                <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/Javascript_perusteet2"}>Linkki Projektiin</a> <br/>
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