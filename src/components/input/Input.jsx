import React from "react";
import BsInput from "react-bootstrap/FormControl";
import { useField } from "formik";


const Input = ({ label, id, type = "text", ...rest }) => {
    const [field, meta] = useField(id);
    const isError = meta.touched && meta.error;

  return (
    <Form.Group>
        {label && <Form.label htmlFor={id}></Form.label>}
        <BsInput
        isInvalid={isError}
        id={id}
        type={type}
        {...field}
        {...rest}
        />
        {isError && 
        <BsInput.Feedback type="invalid">{meta.error}</BsInput.Feedback>}
    </Form.Group>
  );
};

export default Input;