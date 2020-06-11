import React, { useCallback } from "react";
import * as Yup from "yup";
import { message } from "antd";
import { Formik } from "formik";
import MessageForm from "./MessageForm";
import messagesService from "../../services/messages.service";

const initialValues = { subject: "", sender: "", receiver: "", message: "" };

const validationSchema = Yup.object().shape({
  subject: Yup.string().required("Required"),
  sender: Yup.string().required("Required"),
  receiver: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

const MessageFormContainer = () => {
  const handleSubmit = useCallback((values, actions) => {
    messagesService
      .send(values)
      .then(() => {
        actions.resetForm();
        message.success("Message sent successfully");
        return 1;
      })
      .catch(() => {
        message.error("Failed to send message");
      })
      .finally(() => actions.setSubmitting(false));
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {MessageForm}
    </Formik>
  );
};

export default MessageFormContainer;
