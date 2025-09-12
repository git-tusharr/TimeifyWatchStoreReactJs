import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

        alert("Product Succesfully Added!");

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
        <option value="Omega">Omega</option>
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