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
  
  ReactDOM.render(<Header />, document.getElementById('root'));