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
              <Link to='/dashboard'> DashBoard </Link>
            </li>
            <li>
              <Link to='/blog'>Blog </Link>
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;