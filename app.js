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
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">Skill 1</li>
                        <li className="list-group-item">Skill 2</li>
                        <li className="list-group-item">Skill 3</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">Skill 4</li>
                        <li className="list-group-item">Skill 5</li>
                        <li className="list-group-item">Skill 6</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

ReactDOM.render([<Header />, <Skills />], document.getElementById('root'));