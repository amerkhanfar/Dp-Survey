"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function DemoPage() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const attendance = await axios.get(
        "https://sdg-signture-default-rtdb.firebaseio.com/Principels.json",
      );
      const attendanceData = attendance.data;

      const transformedData = Object.keys(attendanceData).map((key) => {
        const item = attendanceData[key];

        return {
          id: key.slice(1), // Assuming you want to remove the '-' from the id
          name: item.name,
          email: item.email,
          question1: item.question1,
          question2: item.question2,
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
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Question 1</Th>
          <Th>Question 2</Th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <Td>{index + 1}</Td>
              <Td
                style={{
                  border: "1px solid white",
                  borderCollapse: "collapse",
                }}>
                {item.name}
              </Td>
              <Td>{item.email}</Td>
              <Td>{item.question1}</Td>
              <Td>{item.question2}</Td>
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
  background-color: #35224c;

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
