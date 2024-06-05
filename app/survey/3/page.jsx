"use client"
import React from 'react'
import styled from 'styled-components'
import {
    PilatDemi,
    PilatLight,
    PilatWide
  } from "../../../fonts/fonts";

const page = () => {
  return (
    <Container>
        <LogoContainer >
            <LogoSub>
                <img src='/Logo.png'/>
            </LogoSub>

        </LogoContainer>

        <TextContainer>
                <h1 className={PilatWide.className} style={{color:'white',textAlign:'center',lineHeight:'27px'}}>ADAPT
<br/>
& EVOLVE</h1>
            </TextContainer>
            <TextContainer>
                <Text className={PilatDemi.className} style={{color:'white',textAlign:'center',lineHeight:'27px'}}>To start the game, scan the “TO EARN MORE

POINTS” QR Code first!</Text>
            </TextContainer>

            <TextContainer>
                <Text className={PilatDemi.className} style={{color:'white',textAlign:'center',lineHeight:'27px'}}>INSTRUCTIONS: <br/> <span className={PilatLight.className}>This game revolves around memory matching.
Grab a partner and get ready to tap your way to victory!
                This is a head to head physical running race between 2 players.<br/> As you race side by side, keep an eye on your opponent's moves and change your strategy as needed.
                Let the fastest runner take home the win!<br/>
                Ready, set, go!</span></Text>
            </TextContainer>

            <TextContainer>
                <Text className={PilatDemi.className} style={{color:'white',textAlign:'center',lineHeight:'27px'}}>Quick reflexes are your best asset! Let's go!</Text>
            </TextContainer>

    </Container>
  )
}

export default page


const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #211F51;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const LogoContainer = styled.div`
    width: 100vw;
margin: 15px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;


`

const LogoSub = styled.div`
    width: 85vw;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`

const TextContainer = styled.div`
margin: 2vh 0vh;
    color: white;
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`

const Text = styled.div`
    
    width: 85vw;
`
