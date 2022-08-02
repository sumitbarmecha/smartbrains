
import logo from './logo192.png';
import './Navbar.css';
function Navbar() {
  return <div className="Navbar">
    
    
    <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">
    <div className="your-element" data-tilt data-tilt-max="50" data-tilt-speed="400" data-tilt-perspective="500"><img width="30px" src={logo} alt="" /></div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex justify-content-between">
        
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white    " href="#">sign out</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>  </div>;
}

export default Navbar;
