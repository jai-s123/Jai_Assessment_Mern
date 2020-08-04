import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from '../../utilities/validate'
import { renderField, renderDatePicker } from '../../utilities/renderThings'
import Button from '@material-ui/core/Button'

import styles from '../../utilities/register.css'

const renderProfessionalDetails = ({ fields, meta: { touched, error } }) => (
  <ul>

    {fields.map((member, index) => (
      <li className="reghli" key={index}>
        <h3 className="reghli">Professional Details {index + 1}:</h3>
        <Field name={`${member}.companyname`} type="text" component={renderField} label="Company Name" />
        <div>
          <label>From</label>
          <Field name={`${member}.from`} type="date" component={renderField} />
        </div>
        <div>
          <label>To</label>
          <Field name={`${member}.to`} type="date" component={renderField} />
        </div>
        <Field name={`${member}.designation`} type="text" component={renderField} label="Designation" />
        <br />
        <Button type="button" variant="outlined" color="secondary" className="removedetails" onClick={() => fields.remove(index)}>Remove Details</Button>
      </li>
    ))}
    <div>
      <Button type="button" variant="outlined" color="primary" className="adddetails" onClick={() => fields.push({})}>Add Details</Button>
      {touched && error && <small>{error}</small>}
    </div>
  </ul>
);

const CompanyDetails = props => {
  const { handleSubmit, previousPage } = props

  return (
    <>
      <div>
        <h2>Professional Details</h2>
      </div>
      <form onSubmit={handleSubmit} className="box">

        
      <br />

<Button type="button" variant="outlined" color="secondary" className="previous" onClick={previousPage}>Previous</Button>
<Button type="submit" variant="outlined" color="primary" className="next">Next</Button>

        <FieldArray name="prof_details" component={renderProfessionalDetails} />


      </form>
    </>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(CompanyDetails)