function Header() {
    return (
        <header className="bg-dark text-light py-4">
            <div className="container text-center">
                <h1>Your Name</h1>
                <p className="lead">Software Engineer</p>
            </div>
        </header>
    );
}

function Skills() {
    return (
        <section id="skills" className="container py-4">
            <h2 className="text-center mb-4">Skills</h2>

            <div className="row">
                <div className="col-md-4">
                    <h3>Technical Skills</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Spring</li>
                        <li className="list-group-item">SQ</li>
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">Angular</li>
                        <li className="list-group-item">Bash</li>
                        <li className="list-group-item">SQL</li>
                        <li className="list-group-item">Scrum</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Business Skills</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            IT project management
                            <button className="btn btn-link btn-sm" onClick={toggleDetails}>
                                {showDetails ? "Show less" : "Show more"}
                            </button>
                            {showDetails && (
                                <p className="text-muted mt-2">Planning, organizing, monitoring, and executing IT projects.</p>
                            )}
                        </li>
                        <li className="list-group-item">
                            Process analysis and optimization
                            <button className="btn btn-link btn-sm" onClick={toggleDetails}>
                                {showDetails ? "Show less" : "Show more"}
                            </button>
                            {showDetails && (
                                <p className="text-muted mt-2">Identifying and eliminating bottlenecks in business processes.</p>
                            )}
                        </li>
                        <li className="list-group-item">Technical documentation
                            <button className="btn btn-link btn-sm" onClick={toggleDetails}>
                                {showDetails ? "Show less" : "Show more"}
                            </button>
                            {showDetails && (
                                <p className="text-muted mt-2">Creating clear and understandable project documentation and instructions.</p>
                            )}
                        </li>
                        <li className="list-group-item">Stakeholder communication
                            <button className="btn btn-link btn-sm" onClick={toggleDetails}>
                                {showDetails ? "Show less" : "Show more"}
                            </button>
                            {showDetails && (
                                <p className="text-muted mt-2"> Effective communication with business and technical teams.</p>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Soft Skills</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Skill 7</li>
                        <li className="list-group-item">Skill 8</li>
                        <li className="list-group-item">Skill 9</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section id="experience" className="container py-4">
            <h2 className="text-center mb-4">Experience</h2>
            <div className="mb-4">
                <h3>Job Title 1</h3>
                <p>Company Name</p>
                <p>Dates of Employment</p>
                <p>Responsibilities and achievements</p>
            </div>
            <div>
                <h3>Job Title 2</h3>
                <p>Company Name</p>
                <p>Dates of Employment</p>
                <p>Responsibilities and achievements</p>
            </div>
        </section>
    );
}

ReactDOM.render([<Header />, <Skills />, <Experience />], document.getElementById('root'));
