import { useState } from "react";
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";
import Input from "../input/Input";
import { Stack } from "react-bootstrap";

const Form = () => {
  const [formInfo, setFormInfo] = useState({
    name: "John",
    lastname: "Doe",
    email: "JohnDoe@123",
    password: "****",
    })


  const initialValues = ({

    name: "John",
    lastname: "Doe",
    email: "JohnDoe@123",
    password: "****",
  });



  const onSubmit = (values) => {
    setFormInfo(values)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange>
    <BsForm  noValidate>
      <Row className="bg-white mb-3 pt-3 rounded-1">
        <Col>
          <Stack gap={3} className="border-dark"> 
            <Input label="name" type="text" id="name" />
          

        
            <Input label="lastname" type="text" id="lastname" />
          

          
            <Input label="email" type="email"  id="email" />
          

          
            <Input label="password" type="password"  id="password" />
          </Stack>
          <Button className="w-100 my-3" type="submit" variant="success">
            Login
          </Button>
        </Col>
      </Row>
      
      

    </BsForm>
    </Formik>
  );
};

export default Form;
