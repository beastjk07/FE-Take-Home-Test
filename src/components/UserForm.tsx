import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { api } from "../utils/Api";
import SelectFormGroup from "./SelectFormGroup";
import TextFormGroup from "./TextFormGroup";

export default function UserForm() {
  const [occupation, setOccupation] = useState([]);
  const [states, setStates] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  useEffect(() => {
    async function fetchApi() {
      let res = await api("https://frontend-take-home.fetchrewards.com/form");

      setOccupation(res.occupations);
      let statesArr = res.states.map((d: any) => d.name);
      setStates(statesArr);
    }
    fetchApi();
  }, []);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <Form>
        <div className="row">
          <TextFormGroup
            onChange={onChange}
            controlId={"name"}
            label={"Full Name"}
            placeholder={"Enter full name"}
          />
        </div>

        <div className="row">
          <TextFormGroup
            onChange={onChange}
            controlId={"email"}
            label={"Email"}
            placeholder={"Enter email"}
          />
        </div>

        <div className="row">
          <TextFormGroup
            onChange={onChange}
            controlId={"password"}
            label={"Password"}
            placeholder={"Enter Password"}
          />
        </div>

        <div className="row">
          <SelectFormGroup
            onChange={onChange}
            controlId={"occupation"}
            label={"Occupation"}
            placeholder={"Select your occupation"}
            type={"Occupation"}
            data={occupation}
          />
        </div>
        <div className="row">
          <SelectFormGroup
            onChange={onChange}
            controlId={"state"}
            label={"State"}
            placeholder={"Select your State"}
            type={"State"}
            data={states}
          />
        </div>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
