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
  const [question11, setQuestion11] = useState("");
  const [question12, setQuestion12] = useState("");
  const [question13, setQuestion13] = useState("");
  const [question14, setQuestion14] = useState("");
  const [question15, setQuestion15] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const renderOtherDepartmentInput = () => {
    if (department === "Other") {
      return (
        <div>
          <Text
            className={PilatDemi.className}
            style={{ color: "white", marginLeft: "14px" }}>
            Please specify Other Department:
          </Text>
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
  const isQuestion15Complete = !question15 || isButtonDisabled;

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
                    Dear participants, thank you for participating in our
                    Principles survey.
                    <br />
                    <br /> Please be honest in your responses as they will help
                    us support you and your team members in leveraging these
                    Principles in our day-to-day activities.
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
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white", marginLeft: "14px" }}>
                      First Name:
                    </Text>
                    <Input
                      type='text'
                      value={firstName}
                      name='FirstName'
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white", marginLeft: "14px" }}>
                      Last Name:
                    </Text>
                    <Input
                      type='text'
                      value={lastName}
                      name='LastName'
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white", marginLeft: "14px" }}>
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
                      <option value='GLOBAL'>GLOBAL</option>
                      <option value='GCC'>GCC</option>
                      <option value='APAC'>APAC</option>
                      <option value='SSA'>SSA</option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white", marginLeft: "14px" }}>
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
                      <option value='Other'>Other</option>
                    </Select>
                  </div>

                  {renderOtherDepartmentInput()}

                  <div>
                    <Text
                      className={PilatDemi.className}
                      style={{ color: "white", marginLeft: "14px" }}>
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
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Making appropriate trade-offs between immediate financial opportunities and long-term benefits'
                          name='Q1'
                          checked={
                            question1 ===
                            "Making appropriate trade-offs between immediate financial opportunities and long-term benefits"
                          }
                          onChange={(e) => setQuestion1(e.target.value)}
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
                          name='Q1'
                          checked={
                            question1 ===
                            "Investing in research to support strategic decision-making"
                          }
                          onChange={(e) => setQuestion1(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Investing in research to support strategic
                          decision-making
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
                      <RadioContainer>
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
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>

                      <NextButton
                        disabled={!question1}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          // Case 4
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
                          value='Monitoring financial data and trends'
                          name='Q2'
                          checked={
                            question2 === "Monitoring financial data and trends"
                          }
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Monitoring financial data and trends
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Role modeling the importance of personal wellbeing'
                          name='Q2'
                          checked={
                            question2 ===
                            "Role modeling the importance of personal wellbeing"
                          }
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Role modeling the importance of personal wellbeing
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Creating an environment where people are supported and recognized in implementing new initiatives'
                          name='Q2'
                          checked={
                            question2 ===
                            "Creating an environment where people are supported and recognized in implementing new initiatives"
                          }
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating an environment where people are supported and
                          recognized in implementing new initiatives
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Investing in research to support strategic decision-making'
                          name='Q2'
                          checked={
                            question2 ===
                            "Investing in research to support strategic decision-making"
                          }
                          onChange={(e) => setQuestion2(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Investing in research to support strategic
                          decision-making
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={!question2}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 5:
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
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
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
                          value='Using financial data to identify opportunities for value creation and improved profitability'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
                            "Using financial data to identify opportunities for value creation and improved profitability"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Using financial data to identify opportunities for
                          value creation and improved profitability
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Investing in research to support strategic decision-making'
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
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
                          name='Q3'
                          onChange={(e) => setQuestion3(e.target.value)}
                          checked={
                            question3 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion3Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
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
                          value='Facilitating effective collaboration among different teams and/or external partners'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Facilitating effective collaboration among different teams and/or external partners"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Facilitating effective collaboration among different
                          teams and/or external partners
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Actively collaborating with others to manage change within the organization'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Actively collaborating with others to manage change within the organization"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Actively collaborating with others to manage change
                          within the organization
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value="Organizing team-building activities that consider people's skills, interests, and experiences"
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Organizing team-building activities that consider people's skills, interests, and experiences"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Organizing team-building activities that consider
                          people's skills, interests, and experiences
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Creating a safe space where everyone can bring ideas and opinions'
                          name='Q4'
                          onChange={(e) => setQuestion4(e.target.value)}
                          checked={
                            question4 ===
                            "Creating a safe space where everyone can bring ideas and opinions"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating a safe space where everyone can bring ideas
                          and opinions
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion4Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 7:
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
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Creating a safe space where everyone can bring ideas and opinions'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
                            "Creating a safe space where everyone can bring ideas and opinions"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating a safe space where everyone can bring ideas
                          and opinions
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Encouraging others to seek out diverse perspectives and cross-functional problem-solving'
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
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
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
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
                          name='Q5'
                          onChange={(e) => setQuestion5(e.target.value)}
                          checked={
                            question5 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion5Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 8:
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
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
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
                          value='Encouraging others to seek out diverse perspectives and cross-functional problem-solving'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
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
                          value='Building an inclusive environment of trust and empowerment'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
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
                          value='Actively collaborating with others to manage change within the organization'
                          name='Q6'
                          onChange={(e) => setQuestion6(e.target.value)}
                          checked={
                            question6 ===
                            "Actively collaborating with others to manage change within the organization"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Actively collaborating with others to manage change
                          within the organization
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion6Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 9:
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
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Taking calculated risks to try new approaches, even if they are untested or unconventional'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
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
                          value='Actively seeking out information on industry innovations'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
                            "Actively seeking out information on industry innovations"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Actively seeking out information on industry
                          innovations
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Building and nurturing partnerships to support innovation'
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
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
                          name='Q7'
                          onChange={(e) => setQuestion7(e.target.value)}
                          checked={
                            question7 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion7Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 10:
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
                          value='Encouraging a culture of equity and inclusiveness that allows the team to share improvements and innovations'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                          checked={
                            question8 ===
                            "Encouraging a culture of equity and inclusiveness that allows the team to share improvements and innovations"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Encouraging a culture of equity and inclusiveness that
                          allows the team to share improvements and innovations
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Staying curious, being present, and constantly developing'
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                          checked={
                            question8 ===
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
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                          checked={
                            question8 ===
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
                          name='Q8'
                          onChange={(e) => setQuestion8(e.target.value)}
                          checked={
                            question8 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion8Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 11:
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
                          value='Building and nurturing partnerships to support innovation'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                          checked={
                            question9 ===
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
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                          checked={
                            question9 ===
                            "Encouraging others to adopt an agile, curious mindset and approach"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Encouraging others to adopt an agile, curious mindset
                          and approach
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Remaining adaptable by continuously developing interpersonal, communication, creative thinking, and problem-solving skills'
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                          checked={
                            question9 ===
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
                          name='Q9'
                          onChange={(e) => setQuestion9(e.target.value)}
                          checked={
                            question9 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion9Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 12:
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
                      Choose the behaviour that is challenging for you
                    </Text>
                  </TextContainer>

                  <FormContainer>
                    <div style={{ width: "80vw", textAlign: "left" }}>
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                          checked={
                            question10 ===
                            "Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations"
                          }
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
                          value="Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                          checked={
                            question10 ===
                            "Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating a sense of pride and ownership in the
                          organization's success and continuous improvement
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Building and telling stories of impact of partnerships on collective well-being'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                          checked={
                            question10 ===
                            "Building and telling stories of impact of partnerships on collective well-being"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Building and telling stories of impact of partnerships
                          on collective well-being
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Supporting and engaging in local, regional, and global partnerships'
                          name='Q10'
                          onChange={(e) => setQuestion10(e.target.value)}
                          checked={
                            question10 ===
                            "Supporting and engaging in local, regional, and global partnerships"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Supporting and engaging in local, regional, and global
                          partnerships
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion10Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 13:
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
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value="Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                          checked={
                            question11 ===
                            "Creating a sense of pride and ownership in the organization's success and continuous improvement"
                          }
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Creating a sense of pride and ownership in the
                          organization's success and continuous improvement
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Setting clear Health, Safety, and Sustainability goals for self and teams'
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                          checked={
                            question11 ===
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
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                          checked={
                            question11 ===
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
                          name='Q11'
                          onChange={(e) => setQuestion11(e.target.value)}
                          checked={
                            question11 ===
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion11Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                          setStep(step + 1);
                        }}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 14:
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
                      <RadioContainer style={{ alignSelf: "flex-start" }}>
                        <RadioInput
                          type='radio'
                          value='Driving Health, Safety, and Sustainability mindset and behaviors in their teams'
                          name='Q12'
                          checked={
                            question12 ===
                            "Driving Health, Safety, and Sustainability mindset and behaviors in their teams"
                          }
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Driving Health, Safety, and Sustainability mindset and
                          behaviors in their teams
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Setting clear Health, Safety, and Sustainability goals for self and teams'
                          name='Q12'
                          checked={
                            question12 ===
                            "Setting clear Health, Safety, and Sustainability goals for self and teams"
                          }
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Setting clear Health, Safety, and Sustainability goals
                          for self and teams
                        </Label>
                      </RadioContainer>
                      <RadioContainer>
                        <RadioInput
                          type='radio'
                          value='Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations'
                          name='Q12'
                          checked={
                            question12 ===
                            "Providing opportunities for professional development, such as mentoring programs, training and development workshops, and job rotations"
                          }
                          onChange={(e) => setQuestion12(e.target.value)}
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
                          value='Recognizing and rewarding individuals for their achievements and contributions'
                          name='Q12'
                          checked={
                            question12 ===
                            "Recognizing and rewarding individuals for their achievements and contributions"
                          }
                          onChange={(e) => setQuestion12(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Recognizing and rewarding individuals for their
                          achievements and contributions
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={!question12}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => setStep(step + 1)}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 15:
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
                          checked={
                            question13 ===
                            "Anticipating customer needs proactively"
                          }
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
                          checked={
                            question13 ===
                            "Gathering comprehensive customer feedback"
                          }
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
                          checked={
                            question13 ===
                            "Maintaining consistent communication with key customers"
                          }
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
                          checked={
                            question13 ===
                            "Ensuring seamless customer experience through internal coordination"
                          }
                          onChange={(e) => setQuestion13(e.target.value)}
                        />
                        <Label className={PilatDemi.className} htmlFor=''>
                          Ensuring seamless customer experience through internal
                          coordination
                        </Label>
                      </RadioContainer>
                    </div>

                    <CounterContainer>
                      <div
                        className={PilatDemi.className}
                        style={{ color: "white" }}>
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={!question13}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => setStep(step + 1)}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 16:
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
                          name='Q14'
                          checked={
                            question14 ===
                            "Establishing partnerships with key customers"
                          }
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
                          checked={
                            question14 ===
                            "Identifying new business opportunities based on changing customer needs"
                          }
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
                          checked={
                            question14 ===
                            "Supporting the team to overcome setbacks to ensure customer needs are met"
                          }
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
                          checked={
                            question14 ===
                            "Improving metrics used to determine customer satisfaction"
                          }
                          onChange={(e) => setQuestion14(e.target.value)}
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={!question14}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={() => setStep(step + 1)}>
                        NEXT
                      </NextButton>
                    </CounterContainer>
                  </FormContainer>
                </ContentContainer>
              </ColorContainer>
            );

          case 17:
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
                          name='Q15'
                          checked={
                            question15 ===
                            "Listening to customers and anticipating their needs"
                          }
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
                          checked={
                            question15 ===
                            "Making improvements to business processes to better meet customer needs"
                          }
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
                          checked={
                            question15 ===
                            "Identifying opportunities that result in business growth"
                          }
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
                          checked={
                            question15 ===
                            "Ensuring the team delivers a seamless customer experience"
                          }
                          onChange={(e) => setQuestion15(e.target.value)}
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
                        {step - 2}/15
                      </div>
                      <NextButton
                        disabled={isQuestion15Complete}
                        className={PilatDemi.className}
                        style={{ marginTop: "20px" }}
                        onClick={FormSubmit}>
                        Submit
                      </NextButton>
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
                    Your participation is greatly appreciated. To discover more
                    about the behaviors that align with Our Principles, kindly
                    click below.
                  </Text>
                </TextContainer>
                <div>
                  <a href='/principels.pdf' target='_blank'>
                    <NextButton
                      className={PilatDemi.className}
                      style={{ marginTop: "20px" }}
                      onClick={() => {
                        setStep(step + 1);
                      }}>
                      VIEW PDF
                    </NextButton>
                  </a>
                </div>
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
  left: 20px;
  top: 220px;
  color: white;
`;

const Label = styled.label`
  color: white;
  font-size: 13px;
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

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: "center";
  align-items: center;
  margin-top: 20px;
`;
