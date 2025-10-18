import React from 'react'

function BenefitBox({icon,title}) {
    return (
        <div className="col-lg-3 col-5">
            <div className="benefit-box">
                <div className="icon">
                    {icon}
                </div>
                <h3>{title}</h3>
                <p>Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
            </div>
        </div>
    )
}

export default BenefitBox