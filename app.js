function Header() {
    return (
        <header className="bg-dark text-light py-4">
            <div className="container text-center">
                <h1>Krzysztof Lipski</h1>
                <p className="lead">Software Engineer</p>
            </div>
        </header>
    );
}

function Skills() {
    const [showDetails, setShowDetails] = React.useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <section id="skills" className="container py-4">
            <h2 className="text-center mb-4">Skills</h2>

            <div className="row">
                <div className="col-md-4">
                    <h3>Technical Skills</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">Spring</li>
                        <li className="list-group-item">SQL</li>
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

function Projects() {
    return (
        <section id="projects" className="container py-4">
            <h2 className="text-center mb-4">Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Omni-kom: Gamer-Connecting Platform</h3>
                            <p className="card-text">Project description and details.</p>
                            <p className="text-muted">
                                <b>Date:</b> September 2023 - December 2023
                            </p>
                            <p className="text-muted">
                                <b>Technologies:</b> Java, Swing, Lombok
                            </p>
                            <a href="#" className="btn btn-primary">
                                Project Link {/* github link */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Tomorrow's Weather App</h3>
                            <p className="card-text">Project description and details.</p>
                            <p className="text-muted">
                                <b>Date:</b> December 2023 - Ferbruary 2024
                            </p>
                            <p className="text-muted">
                                <b>Technologies:</b> Python, Docker, Flask, Streamlit, Numpy, Cufflinks, Matplotlib, Scikit-learn
                            </p>
                            <a href="#" className="btn btn-primary">
                                Project Link {/* github link */}
                            </a>
                        </div>
                    </div>
                </div>
                {/* ... (other project cards with similar structure) */}
            </div>
        </section>
    );
}

function Education() {
    return (
        <section id="education" className="container py-4">
            <h2 className="text-center mb-4">Education</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Engineer's Degree in Computer Science</h3>
                    <p>Polish-Japanese Academy of Information Technology</p>
                    <p>Warsaw, Poland</p>
                    <p>2024</p>
                    {/* Future implementation for achievements */}
                    {/* <p>Achievements: List of achievements</p> */}
                </div>
                {/* Add more education entries if needed */}
            </div>
        </section>
    );
}

ReactDOM.render(
    [<Header />, <Skills />, <Experience />, <Projects />, <Education />],
    document.getElementById('root')
);