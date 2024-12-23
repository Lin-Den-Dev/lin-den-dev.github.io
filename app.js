const businessSkills = [
    "IT project management",
    "Process analysis and optimization",
    "Technical documentation",
    "Stakeholder communication"
];

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
    const [showDetails, setShowDetails] = React.useState([]);

    const toggleDetails = (index) => {
        setShowDetails((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
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
                        <li className="list-group-item">Scrum</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Business Skills</h3>
                    <ul className="list-group">
                        {businessSkills.map((skill, index) => (
                            <li key={index} className="list-group-item">
                                {skill}
                                <button
                                    className="btn btn-link btn-sm"
                                    onClick={() => toggleDetails(index)}
                                >
                                    {showDetails[index] ? "Show less" : "Show more"}
                                </button>
                                {showDetails[index] && (
                                    <p className="text-muted mt-2">
                                        {skill === "IT project management" && "Planning, organizing, monitoring, and executing IT projects."}
                                        {skill === "Process analysis and optimization" && "Identifying and eliminating bottlenecks in business processes."}
                                        {skill === "Technical documentation" && "Creating clear and understandable project documentation and instructions."}
                                        {skill === "Stakeholder communication" && "Effective communication with business and technical teams."}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4">
                    <h3>Soft Skills</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Analytical thinking and problem-solving</li>
                        <li className="list-group-item">Communication and teamwork</li>
                        <li className="list-group-item">Initiative and independence</li>
                        <li className="list-group-item">Eagerness to learn and adaptability</li>
                        <li className="list-group-item">Organization and efficiency</li>
                        <li className="list-group-item">Quick learning</li>
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
                <h3>Freelancing</h3>
                {/* <p>Company Name</p> */}
                <p><i>May 2022 - currently</i></p>
                <p> Full-stack software development expert specializing in Java/
                    Spring backend and React.js frontend. Successfully delivered
                    projects for various clients, demonstrating flexibility and strong
                    client communication skills.</p>
            </div>
            <div>
                <h3>IT Department</h3>
                <p>Toyota Motors Poland</p>
                <p><i>Sep 2021 - Dec 2022</i></p>
                <p>Led the design and development of a web application,
                    overcoming challenges in data integration and UI
                    responsiveness to deliver a user-friendly solution.
                    Proactively troubleshooted technical issues and implemented
                    solutions, ensuring smooth project execution and minimizing
                    downtime.
                    Adapted quickly to new technologies and tools, contributing
                    effectively to the project s success despite a steep learning curve.</p>
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
                                <b>Date:</b> December 2023 - February 2024
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    [<Header key="header" />, <Skills key="skills" />, <Experience key="experience" />, <Projects key="projects" />, <Education key="education" />]
);