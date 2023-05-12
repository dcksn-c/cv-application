import React, { Component } from 'react';
import "../styles/styles.css"

class DegreeInfo extends Component {
    render() {
        // destructures these props so we could use them by their name instead of "this.props.someProperty"
        const { handleChange, handleDelete, id, school, title, date } = this.props;

        return(
            <div className='container'>
                <form className="degree-div">
                    <input
                        type="text"
                        placeholder="Name of School"
                        onChange={handleChange}
                        name="school"
                        className={id}
                        value={school}
                        required
                    ></input>
                    <input
                        type="text"
                        placeholder="Title of Degree"
                        onChange={handleChange}
                        name="title"
                        className={id}
                        value={title}
                        required
                    ></input>
                    <div className='graduation-date'>
                    <label htmlFor="graduation-date" className="form-labels">Graduation Date</label>
                    <input
                        type="date"
                        id="graduation-date"
                        onChange={handleChange}
                        name="date"
                        className={id}
                        value={date}
                        required
                    ></input>
                    </div>
                    <button className={id} onClick={handleDelete}>− DELETE</button>
                </form>
                
            </div>
        )
    }
}

export default DegreeInfo;