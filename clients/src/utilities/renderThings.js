import React from 'react'
import TextField from '@material-ui/core/TextField'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './register.css'
import { withStyles } from '@material-ui/core';

const CssTextField = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: '#90CAF9',
    }
  }
})(TextField);

const CssKeyboardDatePicker = withStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'violet',
    }
  }
})(KeyboardDatePicker);

export const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <CssTextField {...input} placeholder={label} type={type} className={styles.infield} />
      {touched && error && <small>{error}</small>}
    </div>
  </div>
);

export const renderDatePicker = ({ input, defaultValue, meta: { touched, error } }) => (
  <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssKeyboardDatePicker {...input} format="dd/MM/yyyy" selected={input.value} className={styles.txtfield} value={input.value !== '' ? new Date(input.value) : null} />
    </MuiPickersUtilsProvider>
    {touched && error && <small>{error}</small>}
  </div>
);

export const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>Hobbies</label>
    <div>
      <TextareaAutosize {...input} placeholder={label} rows="5" column="12" type={type} className={styles.txtfield} />
      {touched && error && <small>{error}</small>}
    </div>
  </div>
);

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const renderFileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};