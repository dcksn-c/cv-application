import React, { Component } from 'react';
import uniqid from "uniqid";
import { format, parseISO } from 'date-fns'
import JobInfo from './JobInfo';
import "../styles/styles.css";
import JobTasks from './JobTasks';

class Experience extends Component {
    constructor() {
        super()
        
        this.state = {
            editMode: true,
            jobArr: [{
                company: "",
                title: "",
                tasks: "",
                start: "",
                end: "",
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
            jobArr: this.state.jobArr.map(job => {
                return job.id === e.target.className ? {
                    ...job,
                    [e.target.name]: e.target.value,
                } : job;
            })
        })
    }

    handleAddNew = () => {
        this.setState({
            editMode: true,
            jobArr: this.state.jobArr.concat({
                company: "",
                title: "",
                tasks: "",
                start: "",
                end: "",
                id: uniqid(),
            }),
        })
    }

    handleDelete = (e) => {
        this.setState({
            editMode: true,
            jobArr: this.state.jobArr.filter(job => {
                return job.id !== e.target.className ; 
            })
        })
    }

    render() {
        const { jobArr, editMode } = this.state;
        const editButton = <button onClick={this.handleEdit} className="edit-button">EDIT</button>;
        const submitButton = <button onClick={this.handleSubmit} className="submit-button">SAVE EXPERIENCE INFO</button>;
        const addNewButton = <button onClick={this.handleAddNew} className="add-new-button">+ ADD NEW</button>;

        // Form to be shown in edit mode
        const editContent = (
            <div className="edit-experience-div container">
                <div className="form-header">
                    <span></span>
                    <h2>EXPERIENCE</h2>
                </div>
                {jobArr.map(item => {
                    return (
                        <JobInfo 
                            handleChange={this.handleChange}
                            handleDelete={this.handleDelete}
                            handleAddNew={this.handleAddNew}
                            key={item.id} 
                            id={item.id}
                            company={item.company}
                            title={item.title}
                            tasks={item.tasks}
                            start={item.start}
                            end={item.end}
                        />
                    )
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
                    <h2>EXPERIENCE</h2>
                </div>
                {jobArr.map((item, index, _dummy)=> {
                    return (
                        <div key={item.id}>
                            <div className='company-details'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.company}</p>
                                </div>
                                {(item.start !== "" && item.end !== "") && <p className='job-date'>{format(parseISO(item.start), "MM/yy")} - {format(parseISO(item.end), "MM/yy")}</p>}
                            </div>
                            <JobTasks tasks={item.tasks} />
                            {jobArr[index+1] && <br/>}
                        </div>
                    )
                })}
            </div>
        )

        return(
            <div className="experience-div container">
                {editMode ? editContent : submittedContent}
                {!editMode && editButton}
            </div>
        )
    }
}

export default Experience;