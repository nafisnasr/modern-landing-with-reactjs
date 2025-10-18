import React from 'react'
import "./Fullimg.css"

function Fullimg({ img }) {
    return (
        <section className="full-img-box">
            <div className='full-img-container'>
                <img src={img}
                    className='container-fluid' alt="" />
            </div>
        </section>
    )
}

export default Fullimg