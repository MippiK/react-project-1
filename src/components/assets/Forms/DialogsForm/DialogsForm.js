import {Field, Form, Formik} from "formik";
import {dialogsValidatorSchema} from "../../FormValidators/formValidators";
import React from "react";
import sm from "./SendMessage.module.css";
import FormInput from "../assets/FormInput/FormInput";
import FormButton from "../assets/FormButton/FormButton";

const DialogsForm = (props) => {

    return (
            <Formik
                initialValues={{ messageText: ''}}
                validationSchema={dialogsValidatorSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    props.addMessage(values.messageText)
                    resetForm({values: ''})
                }}>
                <Form className={sm.container}>
                    <FormInput placeholder='your message' name="messageText" type="text"/>
                    <FormButton>Submit</FormButton>
                </Form>
            </Formik>
    );
}

export default DialogsForm;