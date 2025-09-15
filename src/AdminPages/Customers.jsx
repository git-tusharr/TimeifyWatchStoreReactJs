import axios from "axios";
import { useEffect, useState } from "react";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3000/coustomerData";
    const response = await axios.get(api);
    console.log(response);
    setCustomers(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = customers.map((c) => {
    return (
      <>
      <tr>
        <td>{c.name}</td>
        <td>{c.city}</td>
        <td>{c.address}</td>
        <td>{c.contact}</td>
        <td>{c.pincode}</td>
      </tr>  
      </>  
    )
  })

  return (
    <>
      <h2 align="center">All Customers</h2>

      <table border="1" cellPadding={10} align="center" width="80%">
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Pin Code</th>
        </tr>
        {ans}
      </table>
    </>
  );
};

export default Customers;
