import React from 'react'

export default function userFormValidation(initState, validate){

    const [values, setValues] = React.useState(initState)
    const [errors, setErrors] = React.useState([])
    const [isSubmitting, setSubmitting] = React.useState(false)

    React.useEffect(() => {
        if (isSubmitting){
            if (Object.keys(errors).length === 0){
                //TODO: API CALLS
                alert("done")
                setSubmitting(false)
            }else{
                setSubmitting(false)
            }
        }
    }, [errors])


    function handleChange(name, value) {
        setValues({
            ...values,
            [name]: value,
        })
    }

    function handleBlur(){
        const validationErrors = validate(values);
        setErrors(validationErrors)
    }

    function handleSubmit() {
        setSubmitting(true)
        const validationErrors = validate(values);
        setErrors(validationErrors)
    }

    return {handleChange, handleSubmit, isSubmitting, errors, values}
}