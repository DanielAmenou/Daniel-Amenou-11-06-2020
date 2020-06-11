import React from "react";
import types from "prop-types";
import { Input, Tabs } from "antd";
import styled from "styled-components";
import MessagesList from "./MessagesList";

const { TabPane } = Tabs;
const { Search } = Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserIdInput = styled(Search)`
  margin-bottom: 40px;
  align-self: center;
  max-width: 400px;
`;

const MessagesManager = ({
  userId,
  onUserChange,
  onMessageDelete,
  receivedMessages,
  sentMessages,
}) => {
  return (
    <Container>
      <UserIdInput
        size="large"
        placeholder="User ID"
        name="userId"
        enterButton="Load"
        onSearch={onUserChange}
      />
      <Tabs defaultActiveKey="1">
        <TabPane tab="Received" key="1">
          <MessagesList
            userId={userId}
            messages={receivedMessages}
            onMessageDelete={onMessageDelete}
          />
        </TabPane>
        <TabPane tab="Sent" key="2">
          <MessagesList
            userId={userId}
            messages={sentMessages}
            onMessageDelete={onMessageDelete}
          />
        </TabPane>
      </Tabs>
    </Container>
  );
};

MessagesManager.propTypes = {
  userId: types.string,
  onUserChange: types.func.isRequired,
  onMessageDelete: types.func.isRequired,
  receivedMessages: types.array.isRequired,
  sentMessages: types.array.isRequired,
};

export default MessagesManager;
