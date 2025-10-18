import React from 'react'
import "./Features.css"

function Features() {
    return (
        <section className='features'>
            <div className="container">
                <div className="wrapper row">
                    <div className="col-lg-6 col-11">
                        <div className="text-box">
                            <h2>See the Big Picture</h2>
                            <p>Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                            <div className="list-box">
                                <ol>
                                    <li>Spot Trends in Seconds: No more digging through numbers. </li>

                                    <li>Get Everyone on the Same Page: Share easy-to-understand reports with your team.</li>

                                    <li>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</li>

                                    <li>Your Global Snapshot: Get a quick, clear overview of your entire operation.</li>
                                </ol>
                            </div>
                            <button className='discover-btn'>Discover more</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-11">
                        <div className="img-box">
                            <img
                                src="/features-img.jpg"
                                alt=""
                                className='container-fluid' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features