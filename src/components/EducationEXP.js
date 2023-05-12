import React, { Component } from 'react';
import uniqid from "uniqid";
import { format, parseISO } from 'date-fns'
import DegreeInfo from './DegreeInfo';
import "../styles/styles.css"

class EducationEXP extends Component {
    constructor() {
        super()
        
        this.state = {
            editMode: true,
            // array of object that consists of several keys
            degreeArr: [{
                school: "",
                title: "",
                date: "",
                id: uniqid(),
            }],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            editMode: false,
        })
    }

    handleEdit = () => {
        this.setState({
            ...this.state,
            editMode: true,
        })
    }

    handleChange = (e) => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.map(degree => {
                // if the id equals to the event target location, change the property's value accordingly to input,
                // otherwise leave it as it is
                return degree.id === e.target.className ? {
                    ...degree,
                    [e.target.name]: e.target.value,
                } : degree;
                
            })
        })
        
    }

    handleAddNew = () => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.concat({
                school: "",
                title: "",
                date: "",
                id: uniqid(),
            })
        })
    }

    handleDelete = (e) => {
        this.setState({
            editMode: true,
            degreeArr: this.state.degreeArr.filter(degree => {
                return degree.id !== e.target.className ; 
            })
        })
    }
    
    render() {
        const { degreeArr, editMode } = this.state;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button onClick={this.handleSubmit} className="submit-button">SAVE EDUCATION INFO</button>;
        const addNewButton = <button onClick={this.handleAddNew} className="add-new-button">+ ADD NEW</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className="edit-education-div">
                <div className="form-header">
                    <span></span>
                    <h2>EDUCATION</h2>
                </div>
                {degreeArr.map(item => {
                    return <DegreeInfo 
                                handleAddNew={this.handleAddNew}
                                handleChange={this.handleChange}
                                handleDelete={this.handleDelete}
                                key={item.id} 
                                id={item.id}
                                school={item.school}
                                title={item.title}
                                date={item.date}
                            />
                })}
                <div className='add-submit-btn-container'>
                {editMode && addNewButton}
                {submitButton}
                </div>
            </div>
        )
        
        // Text to be shown upon submission
        const submittedContent = (
            <div className='container'>
            <div className="form-header">
                <span></span>
                <h2>EDUCATION</h2>
            </div>
                {degreeArr.map(item=> {
                    return (
                        <div key={item.id} className="education-details">
                        <div>
                            <h3>{item.school}</h3>
                            <p>{item.title}</p>
                            {item.date !== "" && <p>Graduated {format(parseISO(item.date), "MM/yy")}</p>}
                            <br/>
                        </div>
                        </div>

                    )
                })}
            </div>
        )

        return(
            <div className="education-div container">
                {editMode ? editContent : submittedContent}
                {!editMode && editButton}
            </div>
        )
    }
}

export default EducationEXP;