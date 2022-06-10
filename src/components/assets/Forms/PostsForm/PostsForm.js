import {Form, Formik} from "formik";
import {postsValidatorSchema} from "../../FormValidators/formValidators";
import React from "react";
import FormInput from "../assets/FormInput/FormInput";
import FormButton from "../assets/FormButton/FormButton";
import paf from './PostAddForm.module.css'

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
                <Form className={paf.profile_upload_news}>
                    <FormInput placeholder='news' name="postText" type="text"/>
                    <FormButton>Submit</FormButton>
                </Form>
            </Formik>
    );
}

export default PostForm