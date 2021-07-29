import { Fragment } from 'react';
import './Header.css'

const Header = () => {
  const title = 'Drug App';
  return (
    <>
      <header className="header">
        <h2>{title}</h2>
      </header>
      
    </>
  );
};

export default Header;