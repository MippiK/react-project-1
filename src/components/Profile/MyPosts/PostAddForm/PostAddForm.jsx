import React from "react";
import paf from './PostAddForm.module.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

const PostAddForm = (props) => {

    return (
            <div className={paf.profile_upload_news}>
                <Formik
                    initialValues={{ postText: ''}}
                    validationSchema={Yup.object({
                        postText: Yup.string()
                            .max(200, 'Must be 200 characters or less')
                    })}
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
            </div>
    );
}

export default PostAddForm;