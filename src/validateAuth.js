

export default function validateAuth(values) {
    let errors = {};

    //email
    if (!values.username) {
        errors.username = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)) {
        errors.username = 'Invalid email address';
    }

    //password
    if (!values.password) {
        errors.password = 'Password Required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    return errors;
}