import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const PaymentDone = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
          <Spinner animation="border" variant="primary" role="status" />
        </div>
      ) : (
        <>
          <h1 className="text-center">Payment Done</h1>
          <h3 className="text-center">Your order has been successfully placed!</h3>
        </>
      )}
    </>
  );
};

export default PaymentDone;
