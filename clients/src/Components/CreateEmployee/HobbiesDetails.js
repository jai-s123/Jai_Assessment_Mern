import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../../utilities/validate'
import { renderField, renderTextArea } from '../../utilities/renderThings'
import Button from '@material-ui/core/Button'
import styles from '../../utilities/register.css'
import SendIcon from '@material-ui/icons/Send';

const HobbiesDetails = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <>
      <div>
        <h2>Employee Hobbies and Detials</h2>
      </div>
      <form onSubmit={handleSubmit} className="box">

        <Field name="linkedin" type="text" component={renderField} label="Linkedin" />

        <Field name="github" type="text" component={renderField} label="Github" />

        <Field name="facebook" type="text" component={renderField} label="Facebook" />

        <Field name="hobbies" type="text" component={renderTextArea} label="Hobbies" />

        <br />

        <Button type="button" variant="contained" color="secondary" className={styles.previous} onClick={previousPage}>Previous</Button>
        <Button type="submit" variant="contained" color="primary" className={styles.next} disabled={pristine || submitting}>Register <SendIcon /></Button>
      </form>
    </>
  )
}
export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(HobbiesDetails)