import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName === ''

    this.setState({showFirstNameError: isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target
    this.setState({firstName: value})
  }

  renderFirstName = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input error-field'
      : 'name-input'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          className={className}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName === ''

    this.setState({showLastNameError: isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastName: value})
  }

  renderLastName = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input error-field'
      : 'name-input'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          className={className}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidationFirstName = this.validateFirstName()
    const isValidationLastName = this.validateLastName()

    if (isValidationFirstName && isValidationLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidationFirstName,
        showLastNameError: !isValidationLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstName()}
        {showFirstNameError ? <p className="error-msg">Required</p> : ''}
        {this.renderLastName()}
        {showLastNameError ? <p className="error-msg">Required</p> : ''}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
