import React from 'react'

const ProjectsContent = () => {
    const styling = {
        width: "24rem"
    }
    const heading = {
        color: "red",
        fontWeight: "bold",
        marginBottom: "40px"
    }
    return (
        <div>
            <section className="projects mt-10">
                <div className="container">
                    <h1 className="text-center">Check Out Our <span style={heading}>Projects</span></h1>
                    <div className="row my-5">
                        {/* ======================1======================= */}
                        <div className="col-md-4">
                            <div className="card" style={styling}>
                                <img src="img/slider-1.avif" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  className="btn btn-primary" href="/">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        {/* ======================1======================= */}
                        <div className="col-md-4">
                            <div className="card" style={styling}>
                                <img src="img/slider-1.avif" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  className="btn btn-primary" href="/">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        {/* ======================1======================= */}
                        <div className="col-md-4">
                            <div className="card" style={styling}>
                                <img src="img/slider-1.avif" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  className="btn btn-primary" href="/">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectsContent
