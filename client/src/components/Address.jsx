const Address = () => {
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
        <form className="my-3">
          <div className="row">
            <div className="mb-3 col-md-4 ">
              <label htmlFor="full_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light"
                id="full_name"
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
              />
            </div>
          </div>

          <div className="d-grid col-6 mx-auto my-3">
            <button className="btn btn-primary" style={{ fontWeight: "bold" }}>
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
