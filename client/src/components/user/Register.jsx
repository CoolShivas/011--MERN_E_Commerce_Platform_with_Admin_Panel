import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const { fetchingRegister } = useContext(AppContext);

  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handlerOnChange = (event) => {
    // const { name, value } = event.target;
    // setFormData({ ...formData, [name]: value });
    // // // The above thing can be done in a shortcut way also;
    setFormData({ ...formData, [event.target.name]: event.target.value }); // // Setting the fields with user entered data;
  };

  const handlerOnFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData); // // Getting the data on Browser's Console;
    // // // Now, this Front-End data of signup form will be send to Back-End for storing in database;
    // // // And, Retrieving afterwards for Login purpose;

    const result = await fetchingRegister(
      formData.name,
      formData.email,
      formData.password
    ); // // Passing this details to Context API fetchingRegister function that will connect to Back-End API database then;

    if (result.success) {
      navigate("/login");
    }

    setFormData(initialData); // // Clearing the input fields;
  };

  return (
    <>
      <div
        className="container my-5 p-4"
        style={{
          width: "600px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">User Register</h1>
        <form className="my-3" onSubmit={handlerOnFormSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              required
              placeholder="Enter your name here"
              name="name"
              value={formData.name}
              onChange={handlerOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              required
              placeholder="Enter your email here"
              name="email"
              value={formData.email}
              onChange={handlerOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              required
              placeholder="Enter your password here"
              minLength={6}
              name="password"
              value={formData.password}
              onChange={handlerOnChange}
            />
          </div>

          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
