"use client";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { PilatDemi, PilatLight, PilatWide } from "../../../fonts/fonts";


const page = () => {

    const [random, setRandom] = useState(1); // Initial state of 1

    useEffect(() => {
      // Function to generate a random number between 1 and 3
      const getRandomNumber = () => {
        return Math.floor(Math.random() * 3) + 1;
      };
  
      // Update the state with a random number between 1 and 3
      setRandom(getRandomNumber());
    }, []); // Empty dependency array to run only once when component mounts


    let content;

  if (random === 1) {
    content = <div>      <TextContainer>
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
        Read Carefully: <br /> 
      <span className={PilatLight.className}>
      Each level starts with a storyline. Pay close attention to
understand your customer's specific requirements.
      </span>
      </div>
      <div>
      Pack It Right: <br /> 
      <span className={PilatLight.className}>
      Based on the storyline, you'll select and pack the items that
best fulfill the customer's needs. Accuracy is key!

Choose the Correct Pigeon Hole:

Once packed, you must place the shipment in the correct
pigeon hole to send it off to the customer. Make sure it's the

right one!
      </span>
      </div>

      <div>
      Speed Counts: <br /> 
      <span className={PilatLight.className}>
      The faster you complete these tasks, the more points you earn.
Keep an eye out for opportunities to earn bonus points by

exceeding expectations.
      </span>
      </div>

      <div>
      Are you ready to meet and exceed our customers' needs?

Ready, set, fulfil!
      </div>

      <div>
      THE STORY LINE: <br /> 
      <span className={PilatLight.className}>
      Jack is repatriating from Dubai to Japan and he needs to move
the following items prior to him arriving in Japan on the 5th of
March. Please assist Jack in filling and shipping the
containers so he can receive these items on time.


      </span>
      </div>
      <div style={{width:'50%' ,alignSelf:'center'}}>  
      <ul>
    <li>2 Kitchen appliances</li>
    <li>1 TV</li>
    <li>1 Bed</li>
</ul>

</div>

 
      </How>
    </Text>
  </TextContainer></div>;
  } else if (random === 2) {
    content = <div>      <TextContainer>
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
        Read Carefully: <br /> 
      <span className={PilatLight.className}>
      Each level starts with a storyline. Pay close attention to
understand your customer's specific requirements.
      </span>
      </div>
      <div>
      Pack It Right: <br /> 
      <span className={PilatLight.className}>
      Based on the storyline, you'll select and pack the items that
best fulfill the customer's needs. Accuracy is key!

Choose the Correct Pigeon Hole:

Once packed, you must place the shipment in the correct
pigeon hole to send it off to the customer. Make sure it's the

right one!
      </span>
      </div>

      <div>
      Speed Counts: <br /> 
      <span className={PilatLight.className}>
      The faster you complete these tasks, the more points you earn.
Keep an eye out for opportunities to earn bonus points by

exceeding expectations.
      </span>
      </div>

      <div>
      Are you ready to meet and exceed our customers' needs?

Ready, set, fulfil!
      </div>

      <div>
      THE STORY LINE: <br /> 
      <span className={PilatLight.className}>
      Jane is relocating from Rome to Dubai day after tomorrow and
she urgently needs the below items to be shipped as she is
short on time. Please help Jane pack the containers as she is

stressed out. Hurry! Time is running out!


      </span>
      </div>
<div style={{width:'30%' ,alignSelf:'center'}}>
<ul >
    <li>3 furniture</li>
    <li>2 TVs</li>
    <li>1 pet</li>
    <li>1 car</li>
</ul>

</div>



 
      </How>
    </Text>
  </TextContainer></div>;
  } else {
    content = <div>      <TextContainer>
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
        Read Carefully: <br /> 
      <span className={PilatLight.className}>
      Each level starts with a storyline. Pay close attention to
understand your customer's specific requirements.
      </span>
      </div>
      <div>
      Pack It Right: <br /> 
      <span className={PilatLight.className}>
      Based on the storyline, you'll select and pack the items that
best fulfill the customer's needs. Accuracy is key!

Choose the Correct Pigeon Hole:

Once packed, you must place the shipment in the correct
pigeon hole to send it off to the customer. Make sure it's the

right one!
      </span>
      </div>

      <div>
      Speed Counts: <br /> 
      <span className={PilatLight.className}>
      The faster you complete these tasks, the more points you earn.
Keep an eye out for opportunities to earn bonus points by

exceeding expectations.
      </span>
      </div>

      <div>
      Are you ready to meet and exceed our customers' needs?

Ready, set, fulfil!
      </div>

      <div>
      THE STORY LINE: <br /> 
      <span className={PilatLight.className}>
      Marc, currently living in Dubai, is planning a surprise for his parents,
who are relocating to Germany on Sunday the 10th of March. With
the move coming close, Marc can only prepare the boxes for
shipment on Saturday. Advise him on the best day of shipping in
order to make sure these arrive the day after his parents


      </span>
      </div>
      <div style={{width:'30%' ,alignSelf:'center'}}> 
      
      <ul >
    <li>1 Sofa Bed</li>
    <li>1 Cutlery Set</li>
    <li>1 Lamp</li>
    <li>3 Blankets</li>
</ul>
      </div>


 
      </How>
    </Text>
  </TextContainer></div>;
  }

  
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
          PRIORITIZE

          <br />
          CUSTOMER
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
          style={{ color: "white", textAlign: "center", lineHeight: "27px" }}
        >
          INSTRUCTIONS: <br /> 
          <span className={PilatLight.className}>
            <span className={PilatDemi.className}>Objective:</span> Our mission is to always listen attentively to our
customers' needs. In this interactive game, you'll dive into
various customer storylines. Your goal? To quickly and
accurately identify what each customer needs and ensure
those needs are met with precision - extra points for those

who go above and beyond!
          </span>
        </Text>
      </TextContainer>

      
<div>
{content}

      </div>

      
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
