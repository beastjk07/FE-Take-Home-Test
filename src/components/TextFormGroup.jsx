import React from "react";
import Form from "react-bootstrap/Form";

export default function TextFormGroup({
  controlId,
  label,
  placeholder,
  onChange,
}) {
  return (
    <div className="col-6">
      <Form.Group className="mb-3" controlId={controlId}>
        <div className="row">
          <div className="col-3">
            <Form.Label>{label}</Form.Label>
          </div>
          <div className="col-5">
            <Form.Control
              onChange={onChange}
              type="text"
              placeholder={placeholder}
            />
          </div>
        </div>
      </Form.Group>
    </div>
  );
}
