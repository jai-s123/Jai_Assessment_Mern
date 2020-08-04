import React from 'react'
import ReactDOM from 'react-dom'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from '../../utilities/validate'
import { renderField } from '../../utilities/renderThings'
import Button from '@material-ui/core/Button'

import styles from '../../utilities/register.css'




const renderEducationalDetails = ({ fields, meta: { touched, error } }) => (
  <ul>

    {fields.map((member, index) => (
      <li key={index}>
        <h3>Educational Details {index + 1}:</h3>
        <Field name={`${member}.course`} type="text" component={renderField} label="Course" />

        <Field name={`${member}.institution`} type="text" component={renderField} label="University/College" />

        <Field name={`${member}.year`} type="number" component={renderField} label="Year" />

        <Field name={`${member}.percentage`} type="number" component={renderField} label="Percentage" />
        <br />

        <Button type="button" variant="contained" color="secondary" className="removedetails" onClick={() => fields.remove(index)}>Remove Details</Button>
      </li>
    ))}
    <div>
      <Button type="button" variant="contained" color="primary" className="adddetails" onClick={() => fields.push({})}>Add Details</Button>
      {touched && error && <small>{error}</small>}
    </div>
  </ul>
);

const EducationalDetails = props => {
  const { handleSubmit, previousPage } = props
  return (
    <>
      <div>
        <h2>Educational Details</h2>
      </div>

      
      <br />





      <form onSubmit={handleSubmit} className="box">

      <Button type="button" variant="outlined"  className="previous" onClick={previousPage}>Previous</Button>
      <Button type="submit" variant="outlined"  className="next">Next</Button>

        <FieldArray name="edu_details" component={renderEducationalDetails} />


      </form>
    </>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(EducationalDetails)