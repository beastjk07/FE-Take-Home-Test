import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getApi, postApi } from "../utils/Api";
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [validateData, setValidateData] = useState(true);

  useEffect(() => {
    async function fetchApi() {
      let res = await getApi(
        "https://frontend-take-home.fetchrewards.com/form"
      );

      setOccupation(res.occupations);
      let statesArr = res.states.map((d: any) => d.name);
      setStates(statesArr);
    }
    fetchApi();
  }, []);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const validateInput = () => {
    for (const key in formData) {
      if (formData[key] === null || formData[key] === "") {
        setValidateData(false);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const isValid = validateInput();

    if (!isValid) return;

    setValidateData(true);
    let resStatus = await postApi(
      "https://frontend-take-home.fetchrewards.com/form",
      formData
    );

    if (resStatus === 201) setIsSubmitted(true);
  };

  return (
    <div className="container">
      <Form>
        <div className="row">
          <TextFormGroup
            value={formData?.name}
            onChange={onChange}
            controlId={"name"}
            label={"Full Name"}
            placeholder={"Enter full name"}
          />
        </div>

        <div className="row">
          <TextFormGroup
            value={formData?.email}
            onChange={onChange}
            controlId={"email"}
            label={"Email"}
            placeholder={"Enter email"}
          />
        </div>

        <div className="row">
          <TextFormGroup
            value={formData?.password}
            onChange={onChange}
            controlId={"password"}
            label={"Password"}
            placeholder={"Enter Password"}
          />
        </div>

        <div className="row">
          <SelectFormGroup
            value={formData?.occupation}
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
            value={formData?.state}
            onChange={onChange}
            controlId={"state"}
            label={"State"}
            placeholder={"Select your State"}
            type={"State"}
            data={states}
          />
        </div>
        {!validateData && <p>Please enter all the details</p>}
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        {isSubmitted && (
          <p className="mt-2">Form has been submitted successfully </p>
        )}
      </Form>
    </div>
  );
}
