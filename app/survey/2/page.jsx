"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PilatDemi } from "../../../fonts/fonts";
import axios from "axios";

const page = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setName(savedData.name);
      setEmail(savedData.email);
      setQuestion1(savedData.question1);
      setQuestion2(savedData.question2);
      setStep(2);
    }
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const saveToLocalStorage = () => {
    const formData = { name, email, question1, question2 };
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, question1, question2 };

    try {
      await axios.post(
        "https://sdg-signture-default-rtdb.firebaseio.com/Principels.json",
        formData,
      );

      console.log("success");

      setStep(step + 1);
    } catch {
      console.error("Error submitting form");
    }
  };

  const isFormIncomplete = !name || !email;
  const isQuestion1Complete = !question1;
  const isQuestion2Complete = !question2;

  return (
    <Container>
      <Branding style={{ zIndex: 1 }} />
      <Branding2 style={{ zIndex: 1 }} />

      {(() => {
        switch (step) {
          case 1:
            return (
              <ContentContainer>
                <LogoContainer>
                  <LogoSub>
                    <img src='/Logo.png' width={140} />
                  </LogoSub>
                </LogoContainer>
                <FormContainer>
                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Name:
                    </Text>
                    <Input
                      type='text'
                      value={name}
                      name='name'
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Email:
                    </Text>
                    <Input
                      type='email'
                      value={email}
                      name='email'
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <Button
                      disabled={isFormIncomplete}
                      className={PilatDemi.className}
                      onClick={() => {
                        saveToLocalStorage();
                        setStep(step + 1);
                      }}>
                      START SURVEY
                    </Button>
                  </div>
                </FormContainer>
              </ContentContainer>
            );
          case 2:
            return (
              <ContentContainer>
                <Counter>
                  <Text
                    className={PilatDemi.className}
                    style={{ color: "white" }}>
                    {step - 1}/15
                  </Text>
                </Counter>
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
                    Describe this principle in 3 words.
                  </Text>
                </TextContainer>

                <FormContainer>
                  <div style={{ width: "80vw" }}>
                    <Inputs
                      className={PilatDemi.className}
                      placeholder='Share Your Thoughts...'
                      style={{ paddingLeft: "10px" }}
                      type='text'
                      value={question1}
                      name='Q1'
                      onChange={(e) => {
                        setQuestion1(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <NextButton
                      disabled={isQuestion1Complete}
                      className={PilatDemi.className}
                      onClick={() => {
                        setStep(step + 1);
                      }}>
                      NEXT
                    </NextButton>
                  </div>
                </FormContainer>
              </ContentContainer>
            );
          case 3:
            return (
              <ContentContainer style={{ zIndex: 10000 }}>
                <Counter>
                  <Text
                    className={PilatDemi.className}
                    style={{ color: "white" }}>
                    {step - 1}/15
                  </Text>
                </Counter>
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
                      width: "100vw",
                    }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Text>
                </TextContainer>

                <FormContainer>
                  <div style={{ width: "80vw" }}>
                    <RadioContainer style={{ alignSelf: "flex-start" }}>
                      <RadioInput
                        type='radio'
                        value='Option 1'
                        name='Q2'
                        onChange={(e) => setQuestion2(e.target.value)}
                      />
                      <Label className={PilatDemi.className} htmlFor=''>
                        Option 1
                      </Label>
                    </RadioContainer>
                    <RadioContainer>
                      <RadioInput
                        type='radio'
                        value='Option 2'
                        name='Q2'
                        onChange={(e) => setQuestion2(e.target.value)}
                      />
                      <Label className={PilatDemi.className} htmlFor=''>
                        Option 2
                      </Label>
                    </RadioContainer>
                    <RadioContainer>
                      <RadioInput
                        type='radio'
                        value='Option 3'
                        name='Q2'
                        onChange={(e) => setQuestion2(e.target.value)}
                      />
                      <Label className={PilatDemi.className} htmlFor=''>
                        Option 3
                      </Label>
                    </RadioContainer>
                  </div>

                  <div>
                    <NextButton
                      disabled={isQuestion2Complete}
                      className={PilatDemi.className}
                      onClick={handleSubmit}>
                      SUBMIT
                    </NextButton>
                  </div>
                </FormContainer>
              </ContentContainer>
            );
          default:
            return (
              <ContentContainer style={{ justifyContent: "center" }}>
                <TextContainer>
                  <Text
                    className={PilatDemi.className}
                    style={{
                      color: "white",
                      textAlign: "center",
                      lineHeight: "27px",
                      fontSize: "50px",
                    }}>
                    Thank You!
                  </Text>
                </TextContainer>
              </ContentContainer>
            );
        }
      })()}
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
  justify-content: space-between;
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
  height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 5px;
  color: white;
  font-size: 16px;
  padding-left: 10px;
`;

const Inputs = styled.input`
  width: 90%;
  height: 70px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 5px;
  color: white;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  width: 150px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  border: none;
  transition: background-color 1s;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const NextButton = styled.button`
  background-color: transparent;
  color: black;
  width: 150px;
  height: 50px;
  text-align: center;
  border-radius: 10px;
  color: white;
  border: 1px solid white;
  transition: background-color 1s;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Counter = styled.div`
  position: absolute;
  left: 0;
  top: 250px;
  color: white;
`;

const Label = styled.label`
  color: white;
  font-size: 18px;
  margin-top: 20px;
`;

const RadioInput = styled.input`
  padding: 7px;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: 1px solid white;
  margin-top: 20px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;
