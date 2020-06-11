import React from "react";
import types from "prop-types";
import { Input, Tabs, Empty } from "antd";
import styled from "styled-components";
import Message from "./Message";

const MessagesList = ({ messages, userId, onMessageDelete }) => {
  if (messages.length === 0)
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

  return (
    <>
      {messages.map((message) => (
        <Message
          userId={userId}
          message={message}
          onDelete={onMessageDelete}
          key={message.id}
        />
      ))}
    </>
  );
};

MessagesList.propTypes = {
  userId: types.string.isRequired,
  onMessageDelete: types.func.isRequired,
  messages: types.array.isRequired,
};

export default MessagesList;
