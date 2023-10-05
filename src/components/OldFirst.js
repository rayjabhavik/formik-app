import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import {
  useFormik,
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as yup from "yup";
import TextError from "./TextError";
export default function OldFirst() {
  const initialValues = {
    name: "bhavik",
    email: "",
    channel: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phnumbers: [""],
  };

  const onSubmit = (values) => {
    console.log("form value", values);
  };

  const validate = (values) => {
    //
    let errors = {};
    if (!values.name) {
      errors.name = "name is required";
    }

    if (!values.email) {
      errors.email = "email is required";
    }

    if (!values.channel) {
      errors.channel = "channel is required";
    }
    console.log(errors);
    return errors;
  };

  const validationSchema = yup.object({
    name: yup.string().required("name Required"),
    email: yup
      .string()
      .email("invalid email format")
      .required("email Required"),
    channel: yup.string().required("channel Required"),
  });

  const validateComment = value => {
    let error 
    if(!value) {
      error = "comments required";
    }

    return error
  }

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <div className="container">
        <div className="main my-3 p-4">
          <div className="col-8 border p-3" style={{ marginLeft: "200px" }}>
            <h2 className="mt-3 font-weight-bold">Login Form</h2>
            <br />
            <Form>
              <div>
                <label className="form-label me-2">Enter your username:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field type="text" name="name" className="form-control" />
                </div>
                <ErrorMessage name="name" component={TextError} />
                {/* <ErrorMessage name="name" /> */}
                <br />
                <label className="form-label me-2">Enter your email:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} size="lg" />
                  <Field type="email" name="email" className="form-control" />
                </div>
                <ErrorMessage name="email" component={TextError} />
                {/* <ErrorMessage name="email" /> */}
                <br />

                <label className="form-label me-2">Enter your channel:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field type="text" name="channel" className="form-control" />
                </div>
                {/* <ErrorMessage name="channel" component={TextError} /> */}
                <ErrorMessage name="channel">
                  {(error) => <div className="text-danger">{error}</div>}
                </ErrorMessage>
                <br />

                <label className="form-label me-2">Enter your address:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field validate={validateComment}
                    as="textarea"
                    name="address"
                    className="form-control"
                  />
                </div>
                <ErrorMessage name="address">
                  {(error) => <div className="text-danger">{error}</div>}
                </ErrorMessage>

                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field
                    type="text"
                    name="social.facebook"
                    className="form-control"
                  />
                </div>

                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field
                    type="text"
                    name="social.twitter"
                    className="form-control"
                  />
                </div>

                {/* <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <Field type="text" name="address" className="form-control"
                  >{
                    (props) => {
                      console.log(props);
                      return <input  />
                    }
                  }</Field>
                </div> */}

                <FieldArray name="phnumbers">
                  {(FieldArrayProps) => {
                    console.log(FieldArrayProps);
                    const { push, remove, form } = FieldArrayProps;
                    const { values } = form;
                    const { phnumbers } = values;

                    return (
                      <div>
                        {phnumbers.map(
                          (
                            number,
                            index // Added parentheses for the map function
                          ) => (
                            <div key={index}>
                              <Field name={`phnumbers[${index}]`} />
                              <button type="button" onClick={()=>remove(index)}> - </button>
                              <button type="button" onClick={()=>push("")}> + </button>
                            </div>
                          )
                        )}
                      </div>
                    );
                  }}
                </FieldArray>

                <div className="d-flex justify-content-center mb-3">
                  <button type="submit" className="btn btn-primary me-2">
                    <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
}
