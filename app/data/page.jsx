"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function DemoPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const attendance = await axios.get(
        "https://sdg-signture-default-rtdb.firebaseio.com/Day1.json",
      );
      const attendanceData = attendance.data;

      const transformedData = Object.keys(attendanceData).map((key) => {
        const item = attendanceData[key];

        return {
          id: key.slice(1), // Assuming you want to remove the '-' from the id
          firstName: item.firstName,
          lastName: item.lastName,
          department: item.department,
          region: item.region,
          level: item.level,
          question1: item.question1,
          question2: item.question2,
          question3: item.question3,
          question4: item.question4,
          question5: item.question5,
          question6: item.question6,
          question7: item.question7,
          question8: item.question8,
          question9: item.question9,
          question10: item.question10,
          question11: item.question11,
          question12: item.question12,
          question13: item.question13,
          question14: item.question14,
          question15: item.question15,
        };
      });
      console.log(transformedData);
      setData(transformedData);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
    // const interval = setInterval(() => {
    //   getData();
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);
  return (
    <Continer>
      <Table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead>
          <Th>#</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Region</Th>
          <Th>Department</Th>
          <Th>Level</Th>
          <Th>Question 1</Th>
          <Th>Question 2</Th>
          <Th>Question 3</Th>
          <Th>Question 4</Th>
          <Th>Question 5</Th>
          <Th>Question 6</Th>
          <Th>Question 7</Th>
          <Th>Question 8</Th>
          <Th>Question 9</Th>
          <Th>Question 10</Th>
          <Th>Question 11</Th>
          <Th>Question 12</Th>
          <Th>Question 13</Th>
          <Th>Question 14</Th>
          <Th>Question 15</Th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <Td>{index + 1}</Td>

              <Td>{item.firstName}</Td>
              <Td>{item.lastName}</Td>
              <Td>{item.department}</Td>
              <Td>{item.region}</Td>
              <Td>{item.level}</Td>
              <Td>{item.question1}</Td>
              <Td>{item.question2}</Td>
              <Td>{item.question3}</Td>
              <Td>{item.question4}</Td>
              <Td>{item.question5}</Td>
              <Td>{item.question6}</Td>
              <Td>{item.question7}</Td>
              <Td>{item.question8}</Td>
              <Td>{item.question9}</Td>
              <Td>{item.question10}</Td>
              <Td>{item.question11}</Td>
              <Td>{item.question12}</Td>
              <Td>{item.question13}</Td>
              <Td>{item.question14}</Td>
              <Td>{item.question15}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Continer>
  );
}

const Continer = styled.div`
  width: 100vw;
  overflow-x: scroll;
  margin: 0 auto;
  min-height: 100vh;
  font-size: 11px;
  background-color: #27224e;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const Table = styled.table`
  border: 1px solid white;
  overflow-x: scroll;
  border-collapse: collapse;
  width: 100%;
  height: fit-content;
  margin-top: 200px;
  color: white;
`;

const Td = styled.td`
  border: 1px solid white;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  padding: 5px;
  color: white;
`;

const Th = styled.td`
  border: 1px solid white;
  padding: 5px;
  white-space: nowrap;
  color: white;
`;
