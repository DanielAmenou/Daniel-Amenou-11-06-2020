import React from "react";
import dayjs from "dayjs";
import types from "prop-types";
import styled from "styled-components";
import { Button, Collapse, Popconfirm } from "antd";

const DATE_FORMAT = "DD/MM/YYYY HH:mm:ss";

const { Panel } = Collapse;

const MessageText = styled.div`
  white-space: pre-line;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageDate = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Message = ({ message, onDelete, userId }) => {
  const header =
    userId === message.receiver
      ? `${message.sender}: ${message.subject}`
      : `to ${message.receiver}: ${message.subject}`;
  return (
    <>
      <Collapse>
        <Panel
          header={header}
          extra={
            <Popconfirm
              title="Are you sure you want to delete this message?"
              okText="Yes"
              cancelText="No"
              onConfirm={(e) => {
                e.stopPropagation();
                onDelete(message.id);
              }}
              onCancel={(e) => e.stopPropagation()}
            >
              <Button type="text" onClick={(e) => e.stopPropagation()}>
                Delete
              </Button>
            </Popconfirm>
          }
        >
          <MessageBox>
            <MessageDate>
              {dayjs(message.createdAt).format(DATE_FORMAT)}
            </MessageDate>
            <MessageText>{message.message}</MessageText>
          </MessageBox>
        </Panel>
      </Collapse>
    </>
  );
};

Message.propTypes = {
  userId: types.string.isRequired,
  onDelete: types.func.isRequired,
  message: types.shape({
    id: types.string.isRequired,
    subject: types.string.isRequired,
    sender: types.string.isRequired,
    receiver: types.string.isRequired,
    message: types.string.isRequired,
    createdAt: types.string.isRequired,
  }),
};

export default Message;
