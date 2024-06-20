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
  const [otherDepartment, setOtherDepartment] = useState("");
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

  const [selectedOption, setSelectedOption] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const renderOtherDepartmentInput = () => {
    if (department === "Other") {
      return (
        <div>
          <DataText className={PilatDemi.className}>
            Please specify Other Department:
          </DataText>
          <Input
            type='text'
            value={otherDepartment}
            name='OtherDepartment'
            onChange={(e) => setOtherDepartment(e.target.value)}
          />
        </div>
      );
    }
    return null;
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  async function FormSubmit(event) {
    console.log("amer");
    event.preventDefault();
    setIsButtonDisabled(true);

    try {
      await axios.post(
        "https://sdg-signture-default-rtdb.firebaseio.com/Day1.json",
        {
          firstName,
          lastName,
          region,
          department,
          otherDepartment,
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
  const isQuestion10Complete = !question10 || isButtonDisabled;

  return (
    <Container>
      <Branding style={{ zIndex: 1 }} />
      <Branding1 style={{ zIndex: 1 }} />
      <Branding2 style={{ zIndex: 1 }} />

      {(() => {
        switch (step) {
          case 1:
            return (
              <ContentContainer
                style={{
                  justifyContent: "center",
                  alignSelf: "flex-start",
                  marginBottom: "100px",
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
                    Thank you for participating in this survey.
                    <br />
                    <br /> Your responses will help us support you and your team
                    members in leveraging Our Principles in your day-to-day
                    activities.
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
                    <img src='/Logo.png' width={140} alt='Logo' />
                  </LogoSub>
                </LogoContainer>
                <FormContainer>
                  <div>
                    <DataText className={PilatDemi.className}>
                      First Name:
                    </DataText>
                    <Input
                      type='text'
                      value={firstName}
                      name='FirstName'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <DataText className={PilatDemi.className}>
                      Last Name:
                    </DataText>
                    <Input
                      type='text'
                      value={lastName}
                      name='LastName'
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div>
                    <DataText className={PilatDemi.className}>Region:</DataText>
                    <Select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}>
                      <option value='' disabled>
                        Select Region
                      </option>
                      <option value='AMR'>AMR</option>
                      <option value='Central Asia'>Central Asia</option>
                      <option value='Europe'>Europe</option>
                      <option value='SCO-MENA'>SCO-MENA</option>
                      <option value='GLOBAL'>GLOBAL</option>
                      <option value='GCC'>GCC</option>
                      <option value='APAC'>APAC</option>
                      <option value='SSA'>SSA</option>
                      <option value='Corporate Head Office'>
                        Corporate Head Office
                      </option>
                    </Select>
                  </div>

                  <div>
                    <DataText className={PilatDemi.className}>
                      Departments:
                    </DataText>
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
                      <option value='Support Functions'>
                        Support Functions
                      </option>
                      <option value='Other'>Other</option>
                    </Select>
                  </div>

                  {renderOtherDepartmentInput()}

                  <div>
                    <DataText className={PilatDemi.className}>
                      Our Principles Level:
                    </DataText>
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
              <ColorContainer style={{ backgroundColor: "#27224e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                          value='Helping others recover momentum and confidence after failures or setbacks'
                          name='Q1'
                          checked={
                            question1 ===
                            "Helping others recover momentum and confidence after failures or setbacks"
                          }
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Helping others recover momentum and confidence after
                          failures or setbacks
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Creating an environment where people are supported and recognised in implementing new initiatives'
                          name='Q1'
                          checked={
                            question1 ===
                            "Creating an environment where people are supported and recognised in implementing new initiatives"
                          }
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating an environment where people are supported and
                          recognised in implementing new initiatives
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Using financial data to identify opportunities for value creation and improved profitability'
                          name='Q1'
                          checked={
                            question1 ===
                            "Using financial data to identify opportunities for value creation and improved profitability"
                          }
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Using financial data to identify opportunities for
                          value creation and improved profitability
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question1}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 4:
            return (
              <ColorContainer style={{ backgroundColor: "#27224e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                          value='Making appropriate trade-offs between immediate financial opportunities and long-term benefits'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                          checked={
                            question2 ===
                            "Making appropriate trade-offs between immediate financial opportunities and long-term benefits"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Making appropriate trade-offs between immediate
                          financial opportunities and long-term benefits
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Investing in research to support strategic decision-making'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                          checked={
                            question2 ===
                            "Investing in research to support strategic decision-making"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Investing in research to support strategic
                          decision-making
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Creating an environment where people are supported and recognized in implementing new initiatives'
                          name='Q2'
                          onChange={(e) => setQuestion2(e.target.value)}
                          checked={
                            question2 ===
                            "Creating an environment where people are supported and recognized in implementing new initiatives"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating an environment where people are supported and
                          recognized in implementing new initiatives
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question2}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 5:
            return (
              <ColorContainer style={{ backgroundColor: "#e95d0c" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Encouraging others to seek out diverse perspectives and cross-functional problem-solving'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
                            "Encouraging others to seek out diverse perspectives and cross-functional problem-solving"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Encouraging others to seek out diverse perspectives
                          and cross-functional problem-solving
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Effectively balancing focusing on people and focusing on tasks'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
                            "Effectively balancing focusing on people and focusing on tasks"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Effectively balancing focusing on people and focusing
                          on tasks
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Challenging individuals and processes to ensure an inclusive work environment'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
                            "Challenging individuals and processes to ensure an inclusive work environment"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Challenging individuals and processes to ensure an
                          inclusive work environment
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question3}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 6:
            return (
              <ColorContainer style={{ backgroundColor: "#e95d0c" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                          value='Driving higher performance through collaboration'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Driving higher performance through collaboration"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Driving higher performance through collaboration
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Building an inclusive environment of trust and empowerment'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Building an inclusive environment of trust and empowerment"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Building an inclusive environment of trust and
                          empowerment
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value="Organising team-building activities that consider people's skills, interests, and experiences"
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Organising team-building activities that consider people's skills, interests, and experiences"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Organising team-building activities that consider
                          people's skills, interests, and experiences
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question4}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 7:
            return (
              <ColorContainer style={{ backgroundColor: "#384595" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                          value='Staying curious, being present, and constantly developing'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
                            "Staying curious, being present, and constantly developing"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Staying curious, being present, and constantly
                          developing
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Remaining adaptable by continuously developing interpersonal, communication, creative thinking, and problem-solving skills'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
                            "Remaining adaptable by continuously developing interpersonal, communication, creative thinking, and problem-solving skills"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Remaining adaptable by continuously developing
                          interpersonal, communication, creative thinking, and
                          problem-solving skills
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Actively seeking out information on industry innovations'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
                            "Actively seeking out information on industry innovations"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Actively seeking out information on industry
                          innovations
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question5}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 8:
            return (
              <ColorContainer style={{ backgroundColor: "#384595" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
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
                          value='Taking calculated risks to try new approaches, even if they are untested or unconventional'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
                            "Taking calculated risks to try new approaches, even if they are untested or unconventional"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Taking calculated risks to try new approaches, even if
                          they are untested or unconventional
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Building and nurturing partnerships to support innovation'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
                            "Building and nurturing partnerships to support innovation"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Building and nurturing partnerships to support
                          innovation
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Encouraging others to adopt an agile, curious mindset and approach'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
                            "Encouraging others to adopt an agile, curious mindset and approach"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Encouraging others to adopt an agile, curious mindset
                          and approach
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question6}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 9:
            return (
              <ColorContainer style={{ backgroundColor: "#5fb87e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      BUILD FOR A <br /> BETTER FUTURE
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
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Setting clear Health, Safety, and Sustainability goals for self and teams'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
                            "Setting clear Health, Safety, and Sustainability goals for self and teams"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Setting clear Health, Safety, and Sustainability goals
                          for self and teams
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting and engaging in local, regional, and global partnerships'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
                            "Supporting and engaging in local, regional, and global partnerships"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting and engaging in local, regional, and global
                          partnerships
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Using management by walking around to engage employees active participation in creating a safety culture (i.e., Gemba Walks)'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
                            "Using management by walking around to engage employees active participation in creating a safety culture (i.e., Gemba Walks)"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Using management by walking around to engage employees
                          active participation in creating a safety culture
                          (i.e., Gemba Walks)
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question7}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 10:
            return (
              <ColorContainer style={{ backgroundColor: "#5fb87e" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      BUILD FOR A <br /> BETTER FUTURE
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
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value="Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          name='Q8'
                          checked={
                            question8 ===
                            "Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          }
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating a sense of pride and ownership in the
                          organization's success and continuous improvement
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations'
                          name='Q8'
                          checked={
                            question8 ===
                            "Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations"
                          }
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Providing opportunities for professional development,
                          such as mentoring programs, training and development
                          workshops, and job rotations
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Recognising and rewarding individuals for their achievements and contributions'
                          name='Q8'
                          checked={
                            question8 ===
                            "Recognising and rewarding individuals for their achievements and contributions"
                          }
                          onChange={(e) => setQuestion8(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Recognising and rewarding individuals for their
                          achievements and contributions
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question8}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 11:
            return (
              <ColorContainer style={{ backgroundColor: " #e73264" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      PRIORITIZE <br />
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
                          name='Q9'
                          checked={
                            question9 ===
                            "Establishing partnerships with key customers"
                          }
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Establishing partnerships with key customers
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting the team to overcome setbacks to ensure customer needs are met'
                          name='Q9'
                          checked={
                            question9 ===
                            "Supporting the team to overcome setbacks to ensure customer needs are met"
                          }
                          onChange={(e) => setQuestion9(e.target.value)}
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
                          name='Q9'
                          checked={
                            question9 ===
                            "Improving metrics used to determine customer satisfaction"
                          }
                          onChange={(e) => setQuestion9(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Improving metrics used to determine customer
                          satisfaction
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>
                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={!question9}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step + 1);
                          }}>
                          NEXT
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 12:
            return (
              <ColorContainer style={{ backgroundColor: " #e73264" }}>
                <Branding style={{ zIndex: 1 }} />
                <Branding1 style={{ zIndex: 1 }} />
                <Branding2 style={{ zIndex: 1 }} />
                <ContentContainer
                  style={{
                    zIndex: 10000,
                    justifyContent: "center",
                    height: "60vh",
                    gap: "10px",
                  }}>
                  <TextContainer>
                    <h1
                      className={PilatWide.className}
                      style={{
                        color: "white",
                        textAlign: "center",
                        lineHeight: "27px",
                      }}>
                      PRIORITIZE <br />
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
                          name='Q10'
                          checked={
                            question10 ===
                            "Listening to customers and anticipating their needs"
                          }
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Listening to customers and anticipating their needs
                        </Label>
                      </RadioContainer>

                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Identifying opportunities that result in business growth'
                          name='Q10'
                          checked={
                            question10 ===
                            "Identifying opportunities that result in business growth"
                          }
                          onChange={(e) => setQuestion10(e.target.value)}
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
                          name='Q10'
                          checked={
                            question10 ===
                            "Ensuring the team delivers a seamless customer experience"
                          }
                          onChange={(e) => setQuestion10(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring the team delivers a seamless customer
                          experience
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/10
                      </div>

                      <NextContainer>
                        <NextButton
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={() => {
                            setStep(step - 1);
                          }}>
                          BACK
                        </NextButton>
                        <NextButton
                          disabled={isQuestion10Complete}
                          className={PilatDemi.className}
                          style={{ marginTop: "20px" }}
                          onClick={FormSubmit}>
                          Submit
                        </NextButton>
                      </NextContainer>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          default:
            return (
              <ContentContainer style={{ justifyContent: "center" }}>
                <LogoContainer>
                  <LogoSub>
                    <img src='/Logo.png' width={140} />
                  </LogoSub>
                </LogoContainer>
                <TextContainer>
                  <h1
                    className={PilatWide.className}
                    style={{
                      color: "white",
                      textAlign: "center",
                      lineHeight: "27px",
                    }}>
                    THANK YOU
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
                    Your participation is appreciated.
                  </Text>
                </TextContainer>

                <div>
                  <a href='/principels.pdf' target='_blank'>
                    <Button
                      className={PilatDemi.className}
                      style={{ width: "50vw", padding: "10px" }}
                      onClick={() => {
                        setStep(step + 1);
                      }}>
                      Click to learn more about Our Principles
                    </Button>
                  </a>
                </div>
                <TextContainer>
                  <Text
                    className={PilatDemi.className}
                    style={{
                      color: "white",
                      textAlign: "center",
                      lineHeight: "27px",
                      fontSize: "14px",
                      width: "70vw",
                    }}>
                    Tip: Save the file on your phone or send it to yourself and
                    your team members.
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
  overflow-y: hidden;
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
  width: 20vw;
  height: 30vh;
  background-image: url("/bottomright.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  right: 0;
  bottom: -30px;
  z-index: 1;
`;

const Branding1 = styled.div`
  width: 20vw;
  height: 30vh;
  background-image: url("/topright.png");
  background-size: cover;
  background-repeat: no-repeat;
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
  /* margin-left: 14px; */
`;

const DataText = styled.div`
  width: 75vw;
  text-align: left;
  margin-left: 14px;
  color: white;
  @media (min-width: 750px) {
    margin-left: 32px;
  }
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
  width: 100px;
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
  left: 20px;
  top: 220px;
  color: white;
`;

const Label = styled.label`
  color: white;
  font-size: 16px;
  margin-top: 20px;

  @media (min-width: 750px) {
    font-size: 22px;
  }
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

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: "center";
  align-items: center;
  margin-top: 20px;
`;

const NextContainer = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`;
