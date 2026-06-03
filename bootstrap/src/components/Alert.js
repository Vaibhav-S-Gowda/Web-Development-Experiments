import React from "react";
import Alert from "react-bootstrap/Alert";

function MyAlert() {
  return (
    <div className="m-3">

      <Alert variant="success">
        Data saved successfully!
      </Alert>

      <Alert variant="danger">
        Error while saving data!
      </Alert>

      <Alert variant="warning">
        Warning: Check your input.
      </Alert>

      <Alert variant="info">
        Information message.
      </Alert>

    </div>
  );
}

export default MyAlert;