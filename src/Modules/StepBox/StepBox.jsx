import React from 'react'

function StepBox({ id, title, desc }) {
    return (
        <div className="col-lg-4">
            <div className="step-box">
                <h3>{id}</h3>
                <div className="text">
                    <h5>{title}</h5>
                    <span>{desc}</span>
                </div>
            </div>
        </div>
    )
}

export default StepBox