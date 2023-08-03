import React from 'react';

const CreateAccountStrip = () => {
  return (
    <div className="row bg-dark p-3">
      <div className="col-md-4">
        <div className="p-2">
          <input className="form-control" placeholder="Email address" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-2">
          <input className="form-control" placeholder="What best describes you?" />
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-2">
          <button className="btn btn-warning">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountStrip;