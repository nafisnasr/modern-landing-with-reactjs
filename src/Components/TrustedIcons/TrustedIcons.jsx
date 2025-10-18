import React, { useState } from 'react'
import { iconsData } from '../../data'
import "./TrustedIcons.css"

function TrustedIcons() {
    const [icons] = useState(iconsData)
    return (
        <section className='trusted-icons'>
            <div className="container">
                <div className="wrapper row">
                    {icons.map(item => (
                        <div key={item.id} className="col-lg-2 col-4">
                            <div className="img-box">
                                <img src={item.src} alt="" className='icon-img' />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default TrustedIcons