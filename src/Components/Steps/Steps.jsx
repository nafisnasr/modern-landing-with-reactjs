import React, { useState } from 'react'
import StepBox from '../../Modules/StepBox/StepBox'
import { stepDatas } from '../../data'
import "./Steps.css"

function Steps() {
    const [steps] = useState(stepDatas)
    return (
        <section className='steps'>
            <div className="container">
                <div className="title-box">
                    <h2>Map Your Success</h2>
                    <button className='discover-btn'>Discover More</button>
                </div>
                <div className="wrapper row">
                    {steps.map(item => (
                        <StepBox {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Steps