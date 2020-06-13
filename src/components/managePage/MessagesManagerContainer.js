import React, { useState, useCallback, useEffect } from "react";
import messagesService from "../../services/messages.service";
import { message as popMessage } from "antd";
import MessagesManager from "./MessagesManager";

const MessagesManagerContainer = () => {
  const [userId, setUserId] = useState(null);
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userId) loadMessages(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const loadMessages = useCallback((userId) => {
    setIsLoading(true);
    messagesService
      .get(userId)
      .then((messages) => {
        setSentMessages(messages.sent);
        setReceivedMessages(messages.received);
        return 1;
      })
      .catch(() => popMessage.error("Failed to get messages"))
      .finally(() => setIsLoading(false));
  }, []);

  const deleteMessage = useCallback((messageId) => {
    messagesService
      .deleteMessage(messageId)
      .then(() => {
        popMessage.success("message deleted");
        const filterFunc = (current) =>
          current.filter((m) => m.id !== messageId);
        setSentMessages(filterFunc);
        setReceivedMessages(filterFunc);
        return 1;
      })
      .catch(() => popMessage.error("Failed to delete message"));
  }, []);

  return (
    <MessagesManager
      userId={userId}
      isLoading={isLoading}
      onUserChange={setUserId}
      sentMessages={sentMessages}
      receivedMessages={receivedMessages}
      onMessageDelete={deleteMessage}
    />
  );
};

export default MessagesManagerContainer;
