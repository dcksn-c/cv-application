import React, { Component } from 'react';
import uniqid from "uniqid";

class JobTasks extends Component {
    render() {
        const { tasks } = this.props;
        if (tasks === "") return;
        const formatDesc = (
            tasks.split('\n').map(bulletItem => {
                return <li key={uniqid()}>{bulletItem}</li>
            })
        )
        return (
            <ul>
                {formatDesc}
            </ul>
        );
    }
}

export default JobTasks;