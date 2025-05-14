import React from 'react';

const Main = ({ register, handleSubmit, onSubmit, errors, bmi, onClear }) => {
  return (
    <div className="container bg-secondary w-100 w-md-75 w-lg-50 border border-primary border-3 rounded mt-4">
      <div className="row text-light">
        {/* image */}
        <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center p-3">
          <img 
            src="https://img.freepik.com/premium-vector/concept-body-mass-index-illustration_206735-21.jpg" 
            alt="BMI visual" 
            className="img-fluid"
          />
        </div>

        {/* calculator */}
        <div className="col-sm-12 col-md-7 p-3">
          <h5 className="text-info fw-bold text-center py-3">BMI CALCULATOR</h5>

          {/* Form starts here */}
          <form onSubmit={handleSubmit(onSubmit)}>

            <label style={{ fontSize: "12px" }}>Height (cm):*</label>
            <input
              type="text"
              placeholder="Enter height in cm"
              {...register("height")}
              className={`form-control bg-dark text-light border border-primary mt-2 mb-1`}
            />
            {errors.height && <small className="text-warning">{errors.height.message}</small>} <br />

            <label className="mt-3" style={{ fontSize: "12px" }}>Weight (kg):*</label>
            <input
              type="text"
              placeholder="Enter weight in kg"
              {...register("weight")}
              className={`form-control bg-dark text-light border border-primary mt-2 mb-1`}
            />
            {errors.weight && <small className="text-warning">{errors.weight.message}</small>}

            <div className="row gap-2 mt-3">
              <div className="col-6">
                <button type="submit" className="btn btn-success w-100">Submit</button>
              </div>
              <div className="col-5">
                <button type="button" onClick={onClear} className="btn btn-danger w-100">Clear</button>
              </div>
            </div>
          </form>

          {/* BMI Result */}
          {bmi !== null && (
            <div className="border rounded border-primary border-2 mt-3 p-2">
              <p className="text-info fw-bold mb-1">Your BMI is: {bmi}</p>
              <p className="fw-bold">
                Status:
                {bmi <= 18.4 ? <span className="text-warning"> Under Weight</span> :
                 bmi <= 24.9 ? <span className="text-success"> Normal Weight</span> :
                 bmi <= 29.9 ? <span className="text-danger"> Over Weight</span> :
                               <span className="text-danger"> Obese</span>}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
