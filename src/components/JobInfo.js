import React, { Component } from 'react';
import "../styles/styles.css"

class JobInfo extends Component {
    render() {
        const { 
            handleChange, 
            handleDelete,
            company,
            title,
            tasks,
            start,
            end,
            id, 
        } = this.props;

        return(
            <div>
                <form className="job-div">
                    <div className='company-name-title-field'>
                        <input
                            type="text"
                            placeholder="Company Name"
                            onChange={handleChange}
                            name="company"
                            className={id}
                            value={company}
                            required
                        ></input>
                        <input
                            type="text"
                            placeholder="Job Title"
                            onChange={handleChange}
                            name="title"
                            className={id}
                            value={title}
                            required
                        ></input>
                    </div>
                    <textarea
                        placeholder="Main Job Tasks. Press Enter to start a new bullet."
                        onChange={handleChange}
                        name="tasks"
                        className={id}
                        value={tasks}
                        rows={4}
                        required
                    />
                    <div className='job-date-div'>
                        <div className='job-start-date-div'>
                            <label htmlFor='job-start-date'>Start Date</label>
                            <input
                                type="date"
                                id='job-start-date'
                                onChange={handleChange}
                                name="start"
                                className={id}
                                value={start}
                                required
                            ></input>
                        </div>
                        <div className='job-end-date-div'>
                            <label htmlFor='job-end-date'>End Date</label>
                            <input
                                type="date"
                                id='job-end-date'
                                onChange={handleChange}
                                name="end"
                                className={id}
                                value={end}
                                required
                            ></input>
                        </div>
                    </div>
                    <button className={id} onClick={handleDelete}>− DELETE</button>
                </form>
            </div>
        )
    }
}

export default JobInfo;