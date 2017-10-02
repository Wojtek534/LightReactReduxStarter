import React from 'react';
import PropTypes from 'prop-types';

const SampleForm = ({onSubmit}) => {
  return (
    <form>
      <h3>
        Input form
      </h3>
      <div className="wrapperClass">
        <label htmlFor="Title">Name</label>
        <div className="field">
          <input className="form-control" type="text" name=""/>
        </div>
      </div>
      <input type="submit" className="btn btn-primary" onClick={onSubmit}/>
    </form>
  )
}
SampleForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SampleForm;
