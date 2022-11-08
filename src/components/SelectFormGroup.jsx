import React from "react";
import Form from "react-bootstrap/Form";

export default function SelectFormGroup({
  controlId,
  label,
  placeholder,
  type,
  data,
  onChange,
  value,
}) {
  return (
    <div className="col-6">
      <Form.Group className="mb-3" controlId={controlId}>
        <div className="row">
          <div className="col-3">
            <Form.Label>{label}</Form.Label>
          </div>
          <div className="col-6">
            <Form.Select
              value={value}
              onChange={onChange}
              aria-label="Default select example"
            >
              <option>{placeholder}</option>
              {data &&
                data.map((res, index) => {
                  return (
                    <option key={type + index} value={res}>
                      {res}
                    </option>
                  );
                })}
            </Form.Select>
          </div>
        </div>
      </Form.Group>
    </div>
  );
}
