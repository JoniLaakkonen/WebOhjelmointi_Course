import React from 'react'
import Projekti from './cards/HTML_ja_CSS'
import { CardStack, MainContainer } from '../styles/Main.Element'


const Projets = () => {
  return (
    <>
      <MainContainer>
        <CardStack>
          <Projekti />
        </CardStack>
      </MainContainer>
    </>
  )
}

export default Projets