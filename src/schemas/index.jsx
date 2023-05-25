import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


export const basicSchema=yup.object().shape({
    email:yup.string().email('Error - Please enter a valid Email address')
    .required('Error - Please enter a valid Email address'),
    password:yup.string().min(8, 'Error - A minimum of 8 characters required').matches
    (passwordRules, {
        message: 'Error - At least 1 special character required'
    }).required('Error - A minimum of 8 characters required'),
    confirmPassword:yup.string().oneOf([yup.ref('password')], 'Error - Please ensure these fields match').required('Error - Please ensure these fields match')   
})