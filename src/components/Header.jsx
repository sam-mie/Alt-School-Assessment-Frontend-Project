import { NavLink} from "react-router-dom";
import logo from "../assets/sam_pic.png.jpg";

function Header() {

  return (
    <>
      <header className="App-header">
        <div className="container">
          <div className="logo-wrap">
            <a href="#">
              <img src={logo} alt="Site logo" />
            </a>
          
          </div>
          
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">Test 404 page</NavLink>
              </li> 
            </ul>
          </nav>
        </div>

      </header>
    </>
  );
}

export default Header;
