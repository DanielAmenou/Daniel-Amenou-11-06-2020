import React from "react";
import styled from "styled-components";
import MessagesManagerContainer from "./MessagesManagerContainer";

const Container = styled.div`
  justify-content: center;
  display: flex;
`;

const ContentContainer = styled.div`
  width: 80%;
  padding: 4%;
  margin-top: 10%;
  min-width: 280px;
  border-radius: 20px;
`;

const MessagePage = () => {
  return (
    <Container>
      <ContentContainer>
        <MessagesManagerContainer />
      </ContentContainer>
    </Container>
  );
};

export default MessagePage;
