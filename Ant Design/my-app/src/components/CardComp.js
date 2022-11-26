import React, { useState } from "react";
import { Avatar, Card } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Paragraph } = Typography;
const { Meta } = Card;
const CardComp = ({ Name, RollNO }) => {
  console.log(Name, RollNO);
  return (
    <>
      <Card
        style={{
          width: "200px",
          marginTop: 16,
        }}
        bordered={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar size={74} src={require(`../EncodedImages/${Name}.jpeg`)} />
          <Title level={4} style={{ margin: "10px 0 0px 0" }}>
            {Name}
          </Title>
          <Paragraph style={{ margin: 0 }}>{RollNO}</Paragraph>
        </div>
      </Card>
    </>
  );
};
export default CardComp;
