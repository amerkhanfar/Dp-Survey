"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { PilatDemi, PilatLight, PilatWide } from "../../../fonts/fonts";
import axios from "axios";

const page = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");
  const [department, setDepartment] = useState("");
  const [level, setLevel] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");
  const [question11, setQuestion11] = useState("");
  const [question12, setQuestion12] = useState("");
  const [question13, setQuestion13] = useState("");
  const [question14, setQuestion14] = useState("");
  const [question15, setQuestion15] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  async function FormSubmit(event) {
    console.log("amer");
    event.preventDefault();

    try {
      await axios.post(
        "https://sdg-signture-default-rtdb.firebaseio.com/Day1.json",
        {
          firstName,
          lastName,
          region,
          department,
          level,
          question1,
          question2,
          question3,
          question4,
          question5,
          question6,
          question7,
          question8,
          question9,
          question10,
          question11,
          question12,
          question13,
          question14,
          question15,
        },
      );

      console.log("success");
      setStep(step + 1);
    } catch (err) {
      console.log(err);
    }
  }

  const isFormIncomplete =
    !firstName || !lastName || !region || !department || !level;
  const isQuestion1Complete = !question1;
  const isQuestion2Complete = !question2;
  const isQuestion3Complete = !question3;
  const isQuestion4Complete = !question4;
  const isQuestion5Complete = !question5;
  const isQuestion6Complete = !question6;
  const isQuestion7Complete = !question7;
  const isQuestion8Complete = !question8;
  const isQuestion9Complete = !question9;
  const isQuestion10Complete = !question10;
  const isQuestion11Complete = !question11;
  const isQuestion12Complete = !question12;
  const isQuestion13Complete = !question13;
  const isQuestion14Complete = !question14;
  const isQuestion15Complete = !question15;

  return (
    <Container>
      <Branding style={{ zIndex: 1 }} />
      <Branding2 style={{ zIndex: 1 }} />

      {(() => {
        switch (step) {
          case 1:
            return (
              <ContentContainer
                style={{
                  justifyContent: "center",
                  alignSelf: "flex-start",
                }}>
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
                      marginLeft: "0px",
                    }}>
                    Dear participants, thank you for participating in our
                    Principles survey.
                    <br /> Please be honest in your answer as your responses
                    will help us to support you and your team members to
                    leverage our Principles in our day-to-day activities.
                  </Text>
                </TextContainer>
                <div>
                  <Button
                    className={PilatDemi.className}
                    onClick={() => {
                      setStep(step + 1);
                    }}>
                    START SURVEY
                  </Button>
                </div>
              </ContentContainer>
            );
          case 2:
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
                      First Name:
                    </Text>
                    <Input
                      type='text'
                      value={firstName}
                      name='FirstName'
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Last Name:
                    </Text>
                    <Input
                      type='text'
                      value={lastName}
                      name='LastName'
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Region:
                    </Text>
                    <Select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}>
                      <option value='' disabled>
                        Select Region
                      </option>
                      <option value='AMR'>AMR</option>
                      <option value='EUROPE'>EUROPE</option>
                      <option value='Region 3'>SCO-MENA</option>
                      <option value='CHO'>CHO</option>
                      <option value='GCC'>GCC</option>
                      <option value='APAC'>APAC</option>
                      <option value='SSA'>SSA</option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Departments:
                    </Text>
                    <Select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}>
                      <option value='' disabled>
                        Select Department
                      </option>
                      <option value='Commercial'>Commercial</option>
                      <option value='Freight Forwarding'>
                        Freight Forwarding
                      </option>
                      <option value='Market Access'>Market Access</option>
                      <option value='Contract Logistics'>
                        Contract Logistics
                      </option>
                      <option value='Functions'>Functions</option>
                      <option value='Others (precise)'>Others (precise)</option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      Our Principles Level:
                    </Text>
                    <Select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}>
                      <option value='' disabled>
                        Select Level
                      </option>
                      <option value='Individual contributor'>
                        Individual contributor
                      </option>
                      <option value='Professionals & Team Leaders'>
                        Professionals & Team Leaders
                      </option>
                      <option value='Senior Leaders'>Senior Leaders</option>
                      <option value='Executives'>Executives</option>
                    </Select>
                  </div>

                  <div>
                    <Button
                      disabled={isFormIncomplete}
                      className={PilatDemi.className}
                      onClick={() => {
                        setStep(step + 1);
                      }}>
                      Next
                    </Button>
                  </div>
                </FormContainer>
              </ContentContainer>
            );
          case 3:
            return (
              <ColorContainer style={{ backgroundColor: "#e73264" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      PRIORITIZE
                      <br />
                      CUSTOMERS
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Anticipating customer needs proactively'
                          name='Q1'
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Anticipating customer needs proactively
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Gathering comprehensive customer feedback'
                          name='Q1'
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Gathering comprehensive customer feedback
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Maintaining consistent communication with key customers'
                          name='Q1'
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Maintaining consistent communication with key
                          customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring seamless customer experience through internal coordination'
                          name='Q1'
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion1Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          case 4:
            return (
              <ColorContainer style={{ backgroundColor: "#e73264" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      PRIORITIZE
                      <br />
                      CUSTOMERS
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      What behaviour would you like your team to focus on more?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Establishing partnerships with key customers'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying new business opportunities based on changing customer needs'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying new business opportunities based on
                          changing customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting the team to overcome setbacks to ensure
                          customer needs are met
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Improving metrics used to determine customer satisfaction'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion2Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 5:
            return (
              <ColorContainer style={{ backgroundColor: "#e73264" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      PRIORITIZE
                      <br />
                      CUSTOMERS
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "70vw",
                      }}>
                      Which behaviour is most critical for the Logistics
                      business?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Listening to customers and anticipating their needs'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Making improvements to business processes to better meet customer needs'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making improvements to business processes to better
                          meet customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying opportunities that result in business
                          growth
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring the team delivers a seamless customer experience'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion3Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 6:
            return (
              <ColorContainer style={{ backgroundColor: "#5fb87e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      BUILD FOR A<br /> BETTER FUTURE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Anticipating customer needs proactively'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Anticipating customer needs proactively
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Gathering comprehensive customer feedback'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Gathering comprehensive customer feedback
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Maintaining consistent communication with key customers'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Maintaining consistent communication with key
                          customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring seamless customer experience through internal coordination'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion4Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          case 7:
            return (
              <ColorContainer style={{ backgroundColor: "#5fb87e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      BUILD FOR A<br /> BETTER FUTURE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      What behaviour would you like your team to focus on more?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Establishing partnerships with key customers'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying new business opportunities based on changing customer needs'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying new business opportunities based on
                          changing customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting the team to overcome setbacks to ensure
                          customer needs are met
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Improving metrics used to determine customer satisfaction'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion5Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 8:
            return (
              <ColorContainer style={{ backgroundColor: "#5fb87e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      BUILD FOR A<br /> BETTER FUTURE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "70vw",
                      }}>
                      Which behaviour is most critical for the Logistics
                      business?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Listening to customers and anticipating their needs'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Making improvements to business processes to better meet customer needs'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making improvements to business processes to better
                          meet customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying opportunities that result in business
                          growth
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring the team delivers a seamless customer experience'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion6Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 9:
            return (
              <ColorContainer style={{ backgroundColor: "#384595" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      ADAPT & <br />
                      EVOLVE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Anticipating customer needs proactively'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Anticipating customer needs proactively
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Gathering comprehensive customer feedback'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Gathering comprehensive customer feedback
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Maintaining consistent communication with key customers'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Maintaining consistent communication with key
                          customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring seamless customer experience through internal coordination'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion7Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          case 10:
            return (
              <ColorContainer style={{ backgroundColor: "#384595" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      ADAPT & <br />
                      EVOLVE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      What behaviour would you like your team to focus on more?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Establishing partnerships with key customers'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying new business opportunities based on changing customer needs'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying new business opportunities based on
                          changing customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting the team to overcome setbacks to ensure
                          customer needs are met
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Improving metrics used to determine customer satisfaction'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion8Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 11:
            return (
              <ColorContainer style={{ backgroundColor: "#384595" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      ADAPT & <br />
                      EVOLVE
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "70vw",
                      }}>
                      Which behaviour is most critical for the Logistics
                      business?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Listening to customers and anticipating their needs'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Making improvements to business processes to better meet customer needs'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making improvements to business processes to better
                          meet customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying opportunities that result in business
                          growth
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring the team delivers a seamless customer experience'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion9Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 12:
            return (
              <ColorContainer style={{ backgroundColor: "#e95d0c" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      COLLABORATE <br />
                      TO WIN
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Anticipating customer needs proactively'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Anticipating customer needs proactively
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Gathering comprehensive customer feedback'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Gathering comprehensive customer feedback
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Maintaining consistent communication with key customers'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Maintaining consistent communication with key
                          customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring seamless customer experience through internal coordination'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion10Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          case 13:
            return (
              <ColorContainer style={{ backgroundColor: "#e95d0c" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      COLLABORATE <br />
                      TO WIN
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      What behaviour would you like your team to focus on more?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Establishing partnerships with key customers'
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying new business opportunities based on changing customer needs'
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying new business opportunities based on
                          changing customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting the team to overcome setbacks to ensure
                          customer needs are met
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Improving metrics used to determine customer satisfaction'
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion11Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 14:
            return (
              <ColorContainer style={{ backgroundColor: "#e95d0c" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      COLLABORATE <br />
                      TO WIN
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "70vw",
                      }}>
                      Which behaviour is most critical for the Logistics
                      business?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Listening to customers and anticipating their needs'
                          name='Q12'
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Making improvements to business processes to better meet customer needs'
                          name='Q12'
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making improvements to business processes to better
                          meet customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q12'
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying opportunities that result in business
                          growth
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring the team delivers a seamless customer experience'
                          name='Q12'
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion12Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 15:
            return (
              <ColorContainer style={{ backgroundColor: "#27224e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      DELIVER <br />
                      GROWTH
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Anticipating customer needs proactively'
                          name='Q13'
                          onChange={(e) => setQuestion13(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Anticipating customer needs proactively
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Gathering comprehensive customer feedback'
                          name='Q13'
                          onChange={(e) => setQuestion13(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Gathering comprehensive customer feedback
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Maintaining consistent communication with key customers'
                          name='Q13'
                          onChange={(e) => setQuestion13(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Maintaining consistent communication with key
                          customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring seamless customer experience through internal coordination'
                          name='Q13'
                          onChange={(e) => setQuestion13(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion13Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          case 16:
            return (
              <ColorContainer style={{ backgroundColor: "#27224e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      DELIVER <br />
                      GROWTH
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "80vw",
                      }}>
                      What behaviour would you like your team to focus on more?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Establishing partnerships with key customers'
                          name='Q14'
                          onChange={(e) => setQuestion14(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying new business opportunities based on changing customer needs'
                          name='Q14'
                          onChange={(e) => setQuestion14(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying new business opportunities based on
                          changing customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q14'
                          onChange={(e) => setQuestion14(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting the team to overcome setbacks to ensure
                          customer needs are met
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Improving metrics used to determine customer satisfaction'
                          name='Q14'
                          onChange={(e) => setQuestion14(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion14Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 17:
            return (
              <ColorContainer style={{ backgroundColor: "#27224e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <Counter>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white" }}>
                      {step - 2}/15
                    </Text>
                  </Counter>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      DELIVER <br />
                      GROWTH
                    </h1>
                  </TextContainer>
                  <TextContainer>
                    <Text
                      className={PilatDemi.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                        fontSize: "20px",
                        width: "70vw",
                      }}>
                      Which behaviour is most critical for the Logistics
                      business?
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Listening to customers and anticipating their needs'
                          name='Q15'
                          onChange={(e) => setQuestion15(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Making improvements to business processes to better meet customer needs'
                          name='Q15'
                          onChange={(e) => setQuestion15(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making improvements to business processes to better
                          meet customer needs
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q15'
                          onChange={(e) => setQuestion15(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Identifying opportunities that result in business
                          growth
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Ensuring the team delivers a seamless customer experience'
                          name='Q15'
                          onChange={(e) => setQuestion15(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <div>
                      <NextButton
                        disabled={isQuestion15Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={FormSubmit}>
                        Submit
                      </NextButton>
                    </div>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );
          default:
            return (
              <ContentContainer style={{ justifyContent: "center" }}>
                {/* <LogoContainer>
                  <LogoSub>
                    <img src='/Logo.png' width={140} />
                  </LogoSub>
                </LogoContainer> */}
                <TextContainer>
                  <Text
                    className={PilatWide.className}
                    style={{
                      color: "white",
                      textAlign: "center",
                      lineHeight: "50px",
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
  background-color: #27224e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ColorContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #5fb87e;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ContentContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-self: "center";
  gap: 50px;
  z-index: 50;
`;

const Branding = styled.div`
  width: 35vw;
  height: 100vh;
  background-image: url("/branding.png");
  background-size: cover;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

const Branding2 = styled.div`
  width: 25vw;
  height: 100vh;
  background-image: url("/branding2.png");
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
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
  gap: 15px;
  height: auto;
  padding-bottom: 50px;
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
  min-width: 90%;
  min-height: 50px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 5px;
  color: white;
  font-size: 16px;
  padding-left: 10px;
`;

const Select = styled.select`
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
  top: 200px;
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
  min-width: 25px;
  min-height: 25px;
  background-color: red;
  border: 1px solid white;
  margin-top: 20px;
`;

const RadioContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
