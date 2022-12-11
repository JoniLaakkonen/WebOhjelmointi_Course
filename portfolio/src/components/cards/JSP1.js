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
                            <BodyHeader>Palindromi funktio</BodyHeader>
                            <BodyText>Tehtävänä oli luoda sovellus joka testaa onko sana palindromi. "ts. sana on sama toisinpäin.
                                    Esim. sana saippuakauppias on palindromi."<br/><br/> Tehtävä oli helppo mutta oikaisin ensimmäisellä kerralla sitä tehdessähieman ja jouduin sitä sen takia korjaamaan.
                                    Tarkoituksena oli harjoitella Javascript kieltä joten valmiit funtiot ei olisi ollut sallittuja. Olen nyt korjannut ja palauttanut korjatun version opettajalle.
                                    <br/><br/><a href={"https://github.com/JoniLaakkonen/WebOhjelmointi_Course/tree/main/Javascript_perusteet1"}>Linkki Projektiin</a> <br/>
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