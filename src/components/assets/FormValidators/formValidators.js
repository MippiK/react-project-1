import * as Yup from "yup";

export const loginValidatorSchema = Yup.object({
    email: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('Required'),
    password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
})

export const postsValidatorSchema = Yup.object({
    postText: Yup.string()
        .max(200, 'Must be 200 characters or less')
})

export const dialogsValidatorSchema = Yup.object({
    messageText: Yup.string()
        .max(200, 'Must be 200 characters or less')
})