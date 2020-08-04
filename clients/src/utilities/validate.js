const validate = values => {
    const errors = {}
    if (!values.firstname) {
      errors.firstname = '*Required First Name'
    } else if (values.firstname.length < 3 || values.firstname.length > 10) {
      errors.firstname = "*Firstname length must be 3-10 letters long"
    }
    if (!values.lastname) {
      errors.lastname = '*Required Last Name'
    } else if (values.lastname.length < 3 || values.lastname.length > 10) {
      errors.lastname = "*Lastname length must be 3-10 letters long"
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email Address is not valid'
    }
    if (!values.phonenumber) {
      errors.phonenumber = '*Required'
    } else if (values.phonenumber.length !== 10) {
      errors.phonenumber = '*Phone Number must be of 10 digits'
    }
    if (!values.currentaddress) {
      errors.currentaddress = '*Current Address Required Field'
    }
    if (!values.permanentaddress) {
      errors.permanentaddress = '*Permanent Address Required Field'
    }
  
    if (!values.edu_details || !values.edu_details.length) {
      errors.edu_details = { _error: '*One Detail Must Be Entered' }
    } else {
      const membersArrayErrors = []
      values.edu_details.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.course) {
          memberErrors.course = '*Required Fields'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.institution) {
          memberErrors.institution = '*Required Fields'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.year) {
          memberErrors.year = '*Required Fields'
          membersArrayErrors[memberIndex] = memberErrors
        } else if (member.year < 1950 || member.year > 2020) {
          memberErrors.year = '*Not a valid year'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.percentage) {
          memberErrors.percentage = '*Required Percentage Details'
          membersArrayErrors[memberIndex] = memberErrors
        } else if (member.percentage > 100) {
          memberErrors.percentage = '*Not a valid percentage details'
          membersArrayErrors[memberIndex] = memberErrors
        }
  
      });
      if (membersArrayErrors.length) {
        errors.edu_details = membersArrayErrors;
      }
  
    }
  
    if (!values.prof_details || !values.prof_details.length) {
      errors.prof_details = { _error: '*At least one detail must be entered' }
    } else {
      const membersArrayErrors = []
      values.prof_details.forEach((member, memberIndex) => {
        const memberErrors = {}
        if (!member || !member.companyname) {
          memberErrors.companyname = '*Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.from) {
          memberErrors.from = '*Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.to) {
          memberErrors.to = '*Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
        if (!member || !member.designation) {
          memberErrors.designation = '*Required'
          membersArrayErrors[memberIndex] = memberErrors
        }
  
      });
      if (membersArrayErrors.length) {
        errors.prof_details = membersArrayErrors;
      }
  
    }
  
    if (!values.linkedin) {
      errors.linkedin = '*Required Linkedin Details'
    }
    if (!values.github) {
      errors.github = '*Required Github Detials'
    }
    if (!values.facebook) {
      errors.facebook = '*Required Facebook Details'
    }
  
    return errors
  }
  
  export default validate