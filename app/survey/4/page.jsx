"use client";
import React from "react";
import styled from "styled-components";
import { PilatDemi, PilatLight, PilatWide } from "../../../fonts/fonts";

const page = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoSub>
          <img src="/Logo.png" />
        </LogoSub>
      </LogoContainer>

      <TextContainer>
        <h1
          className={PilatWide.className}
          style={{ color: "white", textAlign: "center", lineHeight: "27px" }}
        >
          BUILD FOR A
          <br />
          BETTER FUTURE
        </h1>
      </TextContainer>
      <TextContainer>
        <Text
          className={PilatDemi.className}
          style={{ color: "white", textAlign: "center", lineHeight: "27px" }}
        >
          To start the game, scan the “TO EARN MORE POINTS” QR Code first!
        </Text>
      </TextContainer>

      <TextContainer>
        <Text
          className={PilatDemi.className}
          style={{ color: "white", textAlign: "center", lineHeight: "27px", width:'80%' }}
        >
          INSTRUCTIONS: <br /> Welcome to 'Bridge to Wellbeing'! <br />{" "}
          <span className={PilatLight.className}>
            <span className={PilatDemi.className}>Objective:</span> At the heart of our business lies a strong commitment to
            Health, Safety, and Sustainability, not just for us but also for our
            communities. In this game, your mission is to construct a bridge
            that will enable a young girl to cross over to a safer, cleaner, and
            healthier environment.
          </span>
        </Text>
      </TextContainer>

      <TextContainer>
        <h4
          className={PilatWide.className}
          style={{ color: "white", textAlign: "center", lineHeight: "27px" }}
        >
How to Play?
        </h4>
      </TextContainer>

      <TextContainer>
        <Text
          className={PilatDemi.className}
          style={{ color: "white", textAlign: "center", lineHeight: "27px", width:'80%' }}
        >
            <How>
            <div>
          Building the Bridge: <br /> 
          <span className={PilatLight.className}>
          Use 6 to 9 magnetic blocks to construct a bridge. The challenge is to
build a sturdy and reliable bridge using only one block at a time.
          </span>
          </div>
          <div>
          Strategic Thinking: <br /> 
          <span className={PilatLight.className}>
          Plan your bridge carefully. Each block represents an element of
health, safety, or sustainability. Your choices determine the

strength and sustainability of the bridge.
          </span>
          </div>

          <div>
          Time is of the Essence: <br /> 
          <span className={PilatLight.className}>
          You need to build the bridge quickly. The faster you complete

the bridge, the sooner the girl reaches safety.
          </span>
          </div>

          <div>
          Safe Passage: <br /> 
          <span className={PilatLight.className}>
          Once your bridge is built, the girl will begin her journey across.
Ensure the bridge is stable enough for her to cross safely.
          </span>
          </div>

          <div>
          Winning the Game: <br /> 
          <span className={PilatLight.className}>
          Successfully helping the girl reach the other side in the shortest
time possible while ensuring a stable and sustainable bridge

structure will earn you top scores.
          </span>
          </div>

          <div>
          Are you ready to take on the challenge and create a path to a
better environment? Let's build a bridge to wellbeing!
          </div>
          </How>
        </Text>
      </TextContainer>

      
    </Container>
  );
};

export default page;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #211f51;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LogoContainer = styled.div`
  width: 100vw;
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const LogoSub = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  margin: 2vh 0vh;
  color: white;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 85vw;
`;


const How = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

`
