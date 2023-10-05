import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faLock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
export default function First() {
  const initialValues = {
    name: "bhavik",
    email: "",
    channel: "",
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
    name : yup.string().required('Required'),
    email : yup.string().email('invalid email format').required('Required'),
    channel :  yup.string().required('Required')
  })
  const formik = useFormik({
    initialValues,
    onSubmit,
    // always return object
    // validate,
    validationSchema
  });

  // console.log("formik value", formik.values);
  // console.log("visited field", formik.touched);

  return (
    <>
      <div className="container">
        <div className="main my-3 p-4">
          <div className="col-8 border p-3" style={{ marginLeft: "200px" }}>
            <h2 className="mt-3 font-weight-bold">Login Form</h2>
            <br />
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="form-label me-2">Enter your username:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
                <label className="form-label me-2">Enter your email:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} size="lg" />
                  <input
                    type="email"
                    onChange={formik.handleChange}
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    className="form-control"
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}

                <label className="form-label me-2">Enter your channel:</label>
                <br />
                <div className="mb-3 d-flex align-items-center">
                  <FontAwesomeIcon icon={faPen} className="icon" size="lg" />
                  <input
                    type="channel"
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                    onBlur={formik.handleBlur}
                    name="channel"
                    className="form-control"
                  />
                </div>
                {formik.touched.channel && formik.errors.channel ? (
                  <div className="text-danger">{formik.errors.channel}</div>
                ) : null}
                <div className="d-flex justify-content-center mb-3">
                  <button type="submit" className="btn btn-primary me-2">
                    <FontAwesomeIcon icon={faThumbsUp} className="me-2" />
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
