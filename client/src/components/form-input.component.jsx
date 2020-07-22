import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <label className="form-label">{label}</label>
        <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
);

export default FormInput;