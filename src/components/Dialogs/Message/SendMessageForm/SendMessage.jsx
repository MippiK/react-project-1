import React from "react";
import sm from './SendMessage.module.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";


const SendMessage = (props) => {

    return (
        <div className={sm.container}>
                <Formik
                    initialValues={{ messageText: ''}}
                    validationSchema={Yup.object({
                        messageText: Yup.string()
                            .max(200, 'Must be 200 characters or less')
                    })}
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
        </div>
    );
}

export default SendMessage;