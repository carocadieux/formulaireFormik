
import BsForm from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from 'formik';
import { Input } from "../input/Input";
import { Stack } from "react-bootstrap";

const SuscribeForm = () => {
  

  return (
    
    <Form as={BsForm}  noValidate>
      <Row className="bg-white mb-3 pt-3 rounded-1">
        <Col>
          <Stack gap={3} className="border-dark"> 
            <Input
              label="name" 
              type="text"
              placeholder='e.g.John' 
              id="name" 
              />
          

        
            <Input 
              label="lastname" 
              type="text"
              placeholder='e.g. Doe' 
              id="lastname" 
              />
          

          
            <Input 
              label="email" 
              type="email"
              placeholder='e.g. johndoe@123'  
              id="email" 
              />
          

          
            <Input 
              label="password" 
              type="password"
              placeholder='****'  
              id="password" 
              />

          </Stack>
          <Button className="w-100 my-3" type="submit" variant="success">
            Login
          </Button>
        </Col>
      </Row>
      
      

    </Form>
    
  );
};

export default SuscribeForm;
