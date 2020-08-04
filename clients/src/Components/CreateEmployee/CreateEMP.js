import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PersonalDetails from './PersonalDetails'
import EducationalDetails from './EducationalDetails'
import CompanyDetails from './CompanyDetails'
import HobbiesDetails from './HobbiesDetails'
import '../../utilities/register.css';

class Register extends Component {
    state = {
      page: 1
    }

    
  

  componentDidMount() {
    document.title = "Employee Creation Form"
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage =  () =>  {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    
    return (
      <>
        <div><h1>Employee Creation Form</h1>
        </div>
        <div>
          {page === 1 && <PersonalDetails onSubmit={this.nextPage} />}
          {page === 2 && (<EducationalDetails previousPage={this.previousPage} onSubmit={this.nextPage} />)}
          {page === 3 && (<CompanyDetails previousPage={this.previousPage} onSubmit={this.nextPage} />)}
          {page === 4 && (<HobbiesDetails previousPage={this.previousPage} onSubmit={onSubmit} />)}
        </div>
      </>
    )
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Register