/**
 * Import CSS Module
 * Disimpan ke variable styles (untuk penamaan variable bebas)
 */
import { Link } from "react-router-dom";

// import styled navbar
import StyledNavbar from "./Navbar.styled";

// Buat Component Navbar: Menampilkan Navigasi
function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li>
              <Link to="/movie/now">Playing Now</Link>
            </li>
            <li>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
