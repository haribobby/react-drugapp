import { Fragment } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <h2>DrugApp</h2>
            </li>
            <li>
            </li>
            <li>
              <Link to='/welcome'> Welcome </Link>
            </li>
            <li>
              <Link to='/drugs'> Drugs </Link>
            </li>
            <li>
              <Link to='/dashboard'> DashBoard </Link>
            </li>
            <li>
              <Link to='/products'> Products </Link>
            </li>
            <li>
              <Link to='/blog'>Blog </Link>
            </li>
            {/* <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li>
              <Link to='/login'>Login</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;