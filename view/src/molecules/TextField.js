import React from 'react';

const TextField = ({ cy, input, label, required, meta, type }) => {
  const className = `form-control ${
    meta.error && meta.touched ? 'is-invalid' : ''
  }`;
  return (
    <div className='form-group' data-test={cy}>
      <label className='form-control-label'>
        {label}
        {required ? '*' : ' (optional)'}
      </label>
      <input
        {...input}
        type={type}
        autoComplete='off'
        className={className}
        required={required}
      />
      {renderError(meta)}
    </div>
  );
};

const renderError = ({ error, touched }) => {
  if (error && touched) {
    return <div className='invalid-feedback'>{error}</div>;
  }
};

export default TextField;
