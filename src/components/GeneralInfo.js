import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor() {
        super()

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            editMode: true,
        }
    }

    handleChange = (e) => {
        this.setState({
            // captures the name attribute of targeted html tag, and change the value accordingly to typed value
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            editMode: false
        })
    }

    handleEdit = () => {
        this.setState({
            editMode: true
        })
    }

    render() {
        const { firstName, lastName, email, phone, editMode } = this.state;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button type="submit" className="submit-button">SAVE GENERAL INFO</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className='container'>
                <form className="general-form" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <span></span>
                        <h2>GENERAL INFO</h2>
                    </div>
                    <div className="name-field">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            required
                        ></input>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            required
                        ></input>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    ></input>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        value={phone}
                        onChange={this.handleChange}
                        required
                    ></input>
                    {submitButton}
                </form>
            </div>
        )

        // Text to be shown after submission
        const submittedContent = (
            <div>
                <div className="submitted-name-div">
                    <span></span>
                    <h1>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
                </div>
                <div className='contact-div'>
                    <div>
                        <p><strong>Email: </strong>{email}</p>
                        <p><strong>Phone: </strong>{phone}</p>
                        <br/>
                    </div>
                    {editButton}
                </div>
            </div>
        )

        return(
            <div className='general-div content'>
                {editMode ? editContent : submittedContent}
            </div>
        )
    }
}

export default GeneralInfo;