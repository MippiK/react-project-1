import {Field, Form, Formik} from "formik";
import {dialogsValidatorSchema} from "../FormValidators/formValidators";
import React from "react";

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
                <Form>
                    <div>
                        <Field placeholder='your message' name="messageText" type="text" />
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
    );
}

export default DialogsForm;