import React from "react";

const Register = () => {
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
        <form className="my-3">
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
