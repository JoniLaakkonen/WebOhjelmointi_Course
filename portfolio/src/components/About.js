import React from 'react'
import { Button, Card } from 'react-bootstrap'
import bs from '../assets/images/bootstrapIcon.svg'
import avatar from '../assets/images/avatar.jpg'
import { CardStack, MainContainer } from '../styles/Main.Element'
import { HTML_ja_CSS, JSP1, JSP2, MySqlNode, PostsApp, REST1, REST_UI, Urheilija2, Urheilu1 } from "./cards/index"

const About = () => {
  return (
    <>
      <header>
        <div className='intro'>
          <h3>Tervetuloa, olen</h3>
          <h1>Joni Laakkonen</h1>
          <span>2006259</span>
          <img id='avatar' src={avatar} alt='cool cartoon cat'/>
          <div className='buttons'>
            <Button variant="success" href='#projects'>Projekteihin</Button>{' '}
            <Button variant="outline-success" href='https://github.com/JoniLaakkonen'>Git-Hub</Button>{' '}
          </div>
        </div>
      </header>
      <section id='projects'>
        <MainContainer>
          <CardStack>
            <HTML_ja_CSS />
            <JSP1 />
            <JSP2 />
            <MySqlNode />
            <PostsApp />
            <REST1 />
            <REST_UI />
            <Urheilija2 />
            <Urheilu1 />
          </CardStack>
        </MainContainer>
      </section>
      <section id='palaute'>
        <Card
            bg="success"
            key="success"
            text="light"
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Web ohjelmointi</Card.Header>
            <Card.Body>
              <Card.Title>Palaute/Itsearvio kurssista</Card.Title>
              <Card.Text>
                Kurssi oli valistava ja opettavainen useassa asiassa. Olen itse jo paljon käyttänyt 
                js, HTML ja CSS kieliä mutta reacti ja backend osaaminen on jäänyt vähäiseksi. Olen tyytyväinen 
                kurssilla oppimaani ja siihen laittamaani panokseen. Aikaa käytin paljon ja varmasti riittävästi 
                saavuttamaan 5op. Jopa enemmän.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="danger"
            key="danger"
            text="light"
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Web ohjelmointi</Card.Header>
            <Card.Body>
              <Card.Title>Palaute/Itsearvio kurssista</Card.Title>
              <Card.Text>
                Alkuun hieman häirihti kun muutamat asiat mitä oli edellisillä kursseilla opetettu, meni ristiin tällä 
                kurssilla opetettujen asioiden kanssa mutta kun ymmärsin ne asiat paremmin niin asiat selkeni ja ei ole ollut enää ongelmia.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="Light"
            key="Light"
            text="dark"
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Web ohjelmointi</Card.Header>
            <Card.Body>
              <Card.Title>Tulevaisuuden suunnitelmat</Card.Title>
              <Card.Text>
                Olen jo aijemmin käynyt mm. front-end kehittäjä kurssilla, saksassa ja pitkään jo tiennyt tykkääväni web 
                ohjelmoinnista. Tavoitteenani onkin päästä työskentelemään web ohjelmoinnin parissa, alkuun front-end kehittäjänä 
                ja myöhemmi full-stack kehittäjänä.
              </Card.Text>
            </Card.Body>
          </Card>
      </section>
      <section id='credits'>
          <h3>Used in this project:</h3>
          <Button variant="success" href='https://www.freepik.com/free-vector/cute-cool-cat-wearing-eyeglasses-hoodie-cartoon-vector-icon-illustration-animal-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_23006693.htm#query=cat%20cartoon&position=4&from_view=keyword'><h3>freepic</h3></Button>
          <Button height='50px'variant="success" href='https://react-bootstrap.github.io/'><img src={bs} height='40px'/></Button>
      </section>
    </>
  )
}

export default About