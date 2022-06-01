import {Field, Form, Formik} from "formik";
import {postsValidatorSchema} from "../FormValidators/formValidators";
import React from "react";

const PostForm = (props) => {
    return (
            <Formik
                initialValues={{ postText: ''}}
                validationSchema={postsValidatorSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    props.addPost(values.postText)
                    resetForm({values: ''})
                }}>
                <Form>
                    <div>
                        <Field placeholder='news' name="postText" type="text" />
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
    );
}

export default PostForm