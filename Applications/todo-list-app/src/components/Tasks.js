import React from "react";

const Tasks = (props) => {
    const taskList = props.taskdata.map((data) => {
        return (
            <div key={data.id}>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label">
                        {data.name}
                    </label>
                </div>
            </div>
        )
    })
    console.log(props);
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="col-md-10"><p className="fs-4 fw-bolder">Daily Tasks</p></div>
                        <div className="col-md-4">
                            {taskList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tasks;