"use client";
import React from "react";
import styled from "styled-components";
import { PilatDemi, PilatLight, PilatWide } from "../../../fonts/fonts";

const page = () => {
  return (
    <Container>
      <Branding />
      <Branding2 />
      <ContentContainer>
        <LogoContainer>
          <LogoSub>
            <img src='/Logo.png' width={140} />
          </LogoSub>
        </LogoContainer>
        <TextContainer>
          <Text
            className={PilatDemi.className}
            style={{
              color: "white",
              textAlign: "center",
              lineHeight: "27px",
              fontSize: "20px",
            }}>
            Describe this principle in 3 words
          </Text>
        </TextContainer>

        <FormContainer>
          <div style={{ width: "80vw" }}>
            <Input
              className={PilatDemi.className}
              placeholder='Share Your Thoughts...'
              style={{ paddingLeft: "10px" }}
            />
          </div>

          <div>
            <Button className={PilatDemi.className}>NEXT</Button>
          </div>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default page;

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #35224c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ContentContainer = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
`;

const Branding = styled.div`
  width: 35vw;
  height: 100vh;
  background-image: url("/branding.png");
  background-size: cover;
  position: absolute;
  right: 0;
  top: 0;
`;

const Branding2 = styled.div`
  width: 25vw;
  height: 100vh;
  background-image: url("/branding2.png");
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
`;

const LogoContainer = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const LogoSub = styled.div`
  width: 85vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 60vh;
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
  width: 75vw;
  text-align: left;
  margin-left: 14px;
`;

const Input = styled.input`
  width: 90%;
  height: 70px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  width: 150px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  border: none;
`;
