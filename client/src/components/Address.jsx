import { useState } from "react";

const Address = () => {
  const initialData = {
    fullName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handlerOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlerOnFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // // Getting data on Browser's Console;
    setFormData(initialData); // // Clearing the fields;
  };

  return (
    <>
      <div
        className="container my-3 p-4"
        style={{
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">Shipping Address</h1>
        <form className="my-3" onSubmit={handlerOnFormSubmit}>
          <div className="row">
            <div className="mb-3 col-md-4 ">
              <label htmlFor="full_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                id="full_name"
                name="fullName"
                value={formData.fullName}
                onChange={handlerOnChange}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="countries" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                id="countries"
                name="country"
                value={formData.country}
                onChange={handlerOnChange}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="states" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                id="states"
                name="state"
                value={formData.state}
                onChange={handlerOnChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3 col-md-4 ">
              <label htmlFor="cities" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                id="cities"
                name="city"
                value={formData.city}
                onChange={handlerOnChange}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="pinCode" className="form-label">
                Pincode
              </label>
              <input
                type="number"
                className="form-control bg-dark text-light"
                id="pinCode"
                name="pincode"
                value={formData.pincode}
                onChange={handlerOnChange}
              />
            </div>
            <div className="mb-3 col-md-4">
              <label htmlFor="phoneNum" className="form-label">
                PhoneNumber
              </label>
              <input
                type="number"
                className="form-control bg-dark text-light"
                id="phoneNum"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlerOnChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label htmlFor="addNearBy" className="form-label">
                Address/Nearby
              </label>
              <textarea
                type="text"
                className="form-control bg-dark text-light"
                id="addNearBy"
                name="address"
                value={formData.address}
                onChange={handlerOnChange}
              />
            </div>
          </div>

          <div className="d-grid col-6 mx-auto my-3">
            <button
              className="btn btn-primary"
              style={{ fontWeight: "bold" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="d-grid col-6 mx-auto my-3">
          <button className="btn btn-warning" style={{ fontWeight: "bold" }}>
            Use Old Address
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;
