import React, { useState } from 'react'
import {benefitsData} from '../../data'
import BenefitBox from '../../Modules/BenefitBox/BenefitBox'
import "./Benefits.css"

function Benefits() {
    const [benefits] = useState(benefitsData)
    return (
        <section className='benefits'>
            <div className="container">
                <div className="title-box">

                    <h2>We’ve cracked the code.</h2>
                    <p>Area provides real insights, without the data overload.</p>
                </div>
                <div className="wrapper row">
                    {benefits.map(item => (
                        <BenefitBox {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits