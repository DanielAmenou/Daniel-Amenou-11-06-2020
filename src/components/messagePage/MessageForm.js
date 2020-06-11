import React from "react";
import types from "prop-types";
import { Input, Button } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { ErrorMessage } from "formik";
const { TextArea } = Input;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SenderReceiverSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 26px;
`;

const SendButton = styled(Button)`
  margin-top: 40px;
  width: 140px;
  max-width: 100%;
`;

const StyledInput = styled(Input)`
  margin: 8px;
`;

const StyledError = styled.div`
  color: red;
`;

const MessageForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <SenderReceiverSection>
        <StyledInput
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.sender}
          placeholder="From"
          name="sender"
          prefix={<UserOutlined />}
        />
        <ErrorMessage component={StyledError} name="sender" />
        <StyledInput
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.receiver}
          placeholder="To"
          name="receiver"
          prefix={<UserOutlined />}
        />
        <ErrorMessage component={StyledError} name="receiver" />
      </SenderReceiverSection>
      <StyledInput
        size="large"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.subject}
        placeholder="Subject"
        name="subject"
      />
      <ErrorMessage component={StyledError} name="subject" />
      <TextArea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.message}
        placeholder="Message"
        name="message"
        size="large"
        autoSize={{ minRows: 4, maxRows: 10 }}
      />
      <ErrorMessage component={StyledError} name="message" />
      <SendButton htmlType="submit" loading={isSubmitting}>
        Send
      </SendButton>
    </Form>
  );
};

MessageForm.propTypes = {
  handleSubmit: types.func.isRequired,
  handleChange: types.func.isRequired,
  handleBlur: types.func.isRequired,
  values: types.object.isRequired,
  isSubmitting: types.bool.isRequired,
};

export default MessageForm;
