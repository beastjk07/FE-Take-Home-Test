import React from "react";
import Form from "react-bootstrap/Form";

export default function TextFormGroup({
  controlId,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="col-12">
      <Form.Group className="mb-3" controlId={controlId}>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <Form.Label>{label}</Form.Label>
          </div>
          <div className="col-lg-6 col-md-12">
            <Form.Control
              value={value}
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
