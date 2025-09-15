import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { toast } from 'react-toastify';

import { useState } from 'react';
import axios from 'axios';
const AddProducts=()=>{
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");

  const handleInput=(e)=>{
     let name=e.target.name;
     let value=e.target.value;

     setInput(values=>({...values, [name]:value}));
     console.log(input);
  }
  const handleImage=(e)=>{
          setImage(e.target.files[0]);
  }


 const handleSubmit=async(e)=>{
       e.preventDefault();
       let cloudApi="https://api.cloudinary.com/v1_1/dksfrrypv/image/upload"
       const formData = new FormData();
       formData.append("file", image);
        formData.append("upload_preset", "watchwebsite");
        const response = await axios.post(cloudApi, formData);
        console.log(response.data.url);
   
        let api="http://localhost:3000/products";
        const response1 = await axios.post(api, {...input, images:response.data.url});

        toast.success("Product added Succesfully!");

 }





  return(
        <>
         <h2> Add New Product</h2>
          <Form style={{width:"500px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Brand</Form.Label>
        <Form.Select name="brand" aria-label="Default select example" onChange={handleInput}>
      <option>Select Brand</option>
      <option value="Titan">Titan</option>
<option value="Sonata">Sonata</option>
<option value="Fossil">Fossil</option>
<option value="Rolex">Rolex</option>
<option value="Casio">Casio</option>
<option value="Timex">Timex</option>
<option value="Seiko">Seiko</option>
<option value="Omega">Omega</option>
<option value="Tissot">Tissot</option>
<option value="Daniel Wellington">Daniel Wellington</option>
<option value="Rado">Rado</option>
<option value="Tag Heuer">Tag Heuer</option>
<option value="Hublot">Hublot</option>
<option value="Citizen">Citizen</option>
<option value="Diesel">Diesel</option>
<option value="Armani Exchange">Armani Exchange</option>
<option value="Longines">Longines</option>
<option value="Cartier">Cartier</option>
<option value="Movado">Movado</option>
<option value="IWC Schaffhausen">IWC Schaffhausen</option>
<option value="Jaeger-LeCoultre">Jaeger-LeCoultre</option>
<option value="Patek Philippe">Patek Philippe</option>
<option value="Audemars Piguet">Audemars Piguet</option>
<option value="Michael Kors">Michael Kors</option>
<option value="Apple">Apple</option>
<option value="Samsung">Samsung</option>

        
    </Form.Select>
      </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
       
       <Form.Select name="category" aria-label="Default select example" onChange={handleInput}>
      <option>Select Category</option>
      <option value="male">Male Watch</option>
      <option value="female">Female Watch</option>
      <option value="kids">Kids Watch</option>
    </Form.Select>
      </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price </Form.Label>
        <Form.Control type="text" name="price"  onChange={handleInput}/>
      </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Product Image</Form.Label>
        <Form.Control type="file" name="file"  onChange={handleImage} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default AddProducts;