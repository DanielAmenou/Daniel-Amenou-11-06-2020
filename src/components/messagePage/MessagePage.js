import React from "react";
import styled from "styled-components";
import MessageFormContainer from "./MessageFormContainer";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  max-width: 600px;
  min-width: 280px;
  width: 50%;
  padding: 4%;
  margin-top: 4%;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
`;

const MessagePage = () => {
  return (
    <Container>
      <ContentContainer>
        <MessageFormContainer />
      </ContentContainer>
    </Container>
  );
};

export default MessagePage;
