import React, { Component } from 'react';
import JSON from '../db.json'
import Tasks from './Tasks';

class TodoList extends Component {
    constructor() {
        super();
        this.state = { newTask: "", TaskList: JSON, showMe: false };
    }
    inputChange(event) {
        console.log("text changed", event.target.value);
        this.setState({ newTask: event.target.value });
    }
    handlesubmit() {
        let data = {
            id: this.state.TaskList.length + 1,
            name: this.state.newTask
        }
        let list = this.state.TaskList;
        list.push(data);
        this.setState({ TaskList: list, showMe: true });
    }
    renderList() {
        return (
            this.state.showMe ? <Tasks taskdata={this.state.TaskList}></Tasks> : <div></div>
        );
    }
    render() {
        const taskListRender = this.state.showMe ? <Tasks taskdata={this.state.TaskList}></Tasks> : <div></div>
        return (
            <div className="container-fluid mt-3">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="col-md-2">
                            <input type="text" onChange={this.inputChange.bind(this)}
                                id="newTask" placeholder="Add New Task"
                                value={this.state.newTask} />
                        </div>
                        <div className='col-md-2'>
                            <button type="submit" onClick={this.handlesubmit.bind(this)}>Submit</button>
                        </div>
                    </div>

                </div>

                <div>
                    {taskListRender}
                </div>
            </div>
        );
    }
}

export default TodoList;