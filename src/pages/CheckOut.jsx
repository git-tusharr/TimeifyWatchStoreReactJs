import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const CheckOut=()=>{
    const   navigate = useNavigate();
    const CartData = useSelector(state=>state.mycart.cart);  

    let products = "";;
    let totalAmount=0;
     const ans=CartData.map((key)=>{
             products+=",  "+key.name;
             totalAmount+=key.price*key.qnty;
     })

     const handleSubmit=async(e)=>{
        e.preventDefault();

        let api = "http://localhost:3000/coustomerData";
        const response = await axios.post(api, input);  // ✅ direct post
        console.log(response.data);
       navigate("/paydone");
       alert("data submitted");
     }


      const [input, setInput] = useState({});
     
       const handleInput=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
     
          setInput(values=>({...values, [name]:value}));
          console.log(input);
       }
       

    return(
        <>
           <h1> CheckOut</h1>
           <h6 align="center"> Products : {products} </h6>
           <h3 align="center"> Net Payble Amount : {totalAmount} </h3>
            <Form style={{margin:"auto", width:"400px"}}>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city' onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text" name='address' onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact No.</Form.Label>
        <Form.Control type="text" name='contact'onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text" name='pincode' onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>


    </Form>
        </>
    )
}
export default CheckOut;